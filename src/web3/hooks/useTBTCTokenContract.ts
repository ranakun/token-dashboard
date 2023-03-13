import TBTCToken from "@keep-network/tbtc/artifacts/TBTCToken.json" // modify this later
import { useErc20TokenContract } from "./useERC20"
import { getContractAddressFromTruffleArtifact } from "../../utils/getContract"

export const useTBTCTokenContract = () => {
  return useErc20TokenContract("0x171F19606D729B69eef779d5cf8bDEc47612F32f")
  // return useErc20TokenContract(getContractAddressFromTruffleArtifact(TBTCToken))
}
