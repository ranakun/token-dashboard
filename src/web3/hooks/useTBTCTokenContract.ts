import TBTCToken from "@keep-network/tbtc/artifacts/TBTCToken.json"
import { useErc20TokenContract } from "./useERC20"
import { getContractAddressFromTruffleArtifact } from "../../utils/getContract"

export const useTBTCTokenContract = () => {
  // return useErc20TokenContract(getContractAddressFromTruffleArtifact(TBTCToken))
  return useErc20TokenContract("0x0EF2e01D46389D8534c7810B4dccFB3A6bd97AeB")
}
