import TBTCToken from "@keep-network/tbtc/artifacts/TBTCToken.json" // modify this later
import { useErc20TokenContract } from "./useERC20"
import { getContractAddressFromTruffleArtifact } from "../../utils/getContract"

export const useTBTCTokenContract = () => {
  return useErc20TokenContract("0x48cE9bEc99C7cc9F26D60F1B3A0dB1d7bA3b0101")
  // return useErc20TokenContract(getContractAddressFromTruffleArtifact(TBTCToken))
}
