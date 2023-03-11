// import TBTCToken from "../../artifacts/TBTC.json"
import { useErc20TokenContract } from "./useERC20"
import { getContractAddressFromTruffleArtifact } from "../../utils/getContract"

export const useTBTCTokenContract = () => {
  // return useErc20TokenContract(getContractAddressFromTruffleArtifact(TBTCToken))
  return useErc20TokenContract("0x2462134f4B8853c6A723744dfD778Aa462C5eA63")
}
