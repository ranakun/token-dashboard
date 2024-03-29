import React, { FC } from "react"
import { IconSpinner } from "@threshold-network/components"
// import Threshold from "../../static/icons/Ttoken"
import { EthereumDark } from "../../static/icons/EthereumDark"

export const ThresholdSpinner: FC = () => {
  // @ts-ignore
  return <IconSpinner icon={EthereumDark} />
}
