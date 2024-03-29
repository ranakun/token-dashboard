import { FC } from "react"
import { Image, ImageProps } from "@threshold-network/components"
import randomBeaconIncrease from "../../static/images/RandomBeaconIncrease.png"
import randomBeaconDecrease from "../../static/images/RandomBeaconDecrease.png"
import tbtcIncrease from "../../static/images/TbtcIncrease.png"
import tbtcDecrease from "../../static/images/TbtcDecrease.png"
import batCoin from "../../static/images/batCoin.png"
import { StakingAppName } from "../../store/staking-applications"

type Operation = "increase" | "decrease"

const iconMap: Record<StakingAppName, Record<Operation, string>> = {
  tbtc: {
    increase: batCoin,
    decrease: batCoin,
  },
  randomBeacon: {
    increase: batCoin,
    decrease: batCoin,
  },
}

const StakingApplicationOperationIcon: FC<
  {
    stakingApplication: StakingAppName
    operation: Operation
  } & ImageProps
> = ({ stakingApplication, operation, ...props }) => {
  const imgSrc = iconMap[stakingApplication][operation]

  return <Image src={imgSrc} {...props} />
}

export default StakingApplicationOperationIcon
