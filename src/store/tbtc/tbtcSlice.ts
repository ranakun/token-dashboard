import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction"
import {
  MintingStep,
  MintingSteps,
  TbtcMintingType,
  TbtcStateKey,
  UnmintingStep,
} from "../../types/tbtc"
import { UpdateStateActionPayload } from "../../types/state"
import { FetchingState } from "../../types"
import { BridgeHistoryStatus, BridgeTxHistory } from "../../threshold-ts/tbtc"
import { featureFlags } from "../../constants"
import { startAppListening } from "../listener"
import { fetchBridgeTxHitoryEffect, findUtxoEffect } from "./effects"
import { UnspentTransactionOutput } from "@keep-network/tbtc-v2.ts/dist/src/bitcoin"

interface TbtcState {
  mintingType: TbtcMintingType
  mintingStep: MintingStep
  unmintingStep: UnmintingStep
  btcWithdrawAddress: string
  unmintAmount: string
  btcDepositAddress: string

  //deposit data
  ethAddress: string
  btcRecoveryAddress: string
  walletPublicKeyHash: string
  refundLocktime: string
  blindingFactor: string
  utxo: UnspentTransactionOutput

  nextBridgeCrossingInUnix?: number

  // TODO: These may be incorrect types
  tBTCMintAmount: string
  ethGasCost: number
  thresholdNetworkFee: string
  mintingFee: string

  transactionsHistory: FetchingState<BridgeTxHistory[]>
}

export const tbtcSlice = createSlice({
  name: "tbtc",
  initialState: {
    mintingType: TbtcMintingType.mint,
    mintingStep: MintingSteps[0],
    transactionsHistory: {
      isFetching: false,
      error: "",
      data: [] as BridgeTxHistory[],
    },
  } as TbtcState,
  reducers: {
    updateState: (
      state,
      action: PayloadAction<UpdateStateActionPayload<TbtcStateKey>>
    ) => {
      // @ts-ignore
      state[action.payload.key] = action.payload.value
    },
    requestBridgeTransactionHistory: (
      state,
      action: PayloadAction<{ depositor: string }>
    ) => {},
    fetchingBridgeTransactionHistory: (state) => {
      state.transactionsHistory.isFetching = true
    },
    bridgeTransactionHistoryFetched: (
      state,
      action: PayloadAction<BridgeTxHistory[]>
    ) => {
      state.transactionsHistory.isFetching = false
      state.transactionsHistory.error = ""
      state.transactionsHistory.data = action.payload
    },
    bridgeTransactionHistoryFailed: (
      state,
      action: PayloadAction<{ error: string }>
    ) => {
      state.transactionsHistory.isFetching = false
      state.transactionsHistory.error = action.payload.error
    },
    depositRevealed: (
      state,
      action: PayloadAction<{
        fundingTxHash: string
        fundingOutputIndex: number
        depositKey: string
        amount: string
        depositor: string
        txHash: string
      }>
    ) => {
      const { amount, txHash, depositKey } = action.payload
      const history = state.transactionsHistory.data
      const { itemToUpdate } = findHistoryByDepositKey(history, depositKey)

      // Do not update an array if there is already an item with the same
      // deposit key- just in case duplicated Ethereum events.
      if (itemToUpdate) return

      // Add item only if there is no item with the same deposit key.
      state.transactionsHistory.data = [
        { amount, txHash, status: BridgeHistoryStatus.PENDING, depositKey },
        ...state.transactionsHistory.data,
      ]
    },
    optimisticMintingFinalized: (
      state,
      action: PayloadAction<{
        depositKey: string
        txHash: string
      }>
    ) => {
      const { depositKey, txHash } = action.payload
      const history = state.transactionsHistory.data
      const {
        index: historyIndexItemToUpdate,
        itemToUpdate: historyItemToUpdate,
      } = findHistoryByDepositKey(history, depositKey)

      if (!historyItemToUpdate) return

      state.transactionsHistory.data[historyIndexItemToUpdate] = {
        ...historyItemToUpdate,
        status: BridgeHistoryStatus.MINTED,
        txHash,
      }
    },
    findUtxo: (
      state,
      action: PayloadAction<{
        btcDepositAddress: string
        depositor: string
      }>
    ) => {},
  },
})

function findHistoryByDepositKey(
  history: BridgeTxHistory[],
  depositKey: string
) {
  const historyIndexItemToUpdate = history.findIndex(
    (item) => item.depositKey === depositKey
  )

  if (historyIndexItemToUpdate < 0) return { index: -1, itemToUpdate: null }

  const historyItemToUpdate = history[historyIndexItemToUpdate]

  return { index: historyIndexItemToUpdate, itemToUpdate: historyItemToUpdate }
}

export const { updateState } = tbtcSlice.actions

export const registerTBTCListeners = () => {
  if (!featureFlags.TBTC_V2) return

  startAppListening({
    actionCreator: tbtcSlice.actions.requestBridgeTransactionHistory,
    effect: fetchBridgeTxHitoryEffect,
  })

  startAppListening({
    actionCreator: tbtcSlice.actions.findUtxo,
    effect: findUtxoEffect,
  })
}

// TODO: Move to the `../listener` file once we merge
// https://github.com/threshold-network/token-dashboard/pull/302.
registerTBTCListeners()
