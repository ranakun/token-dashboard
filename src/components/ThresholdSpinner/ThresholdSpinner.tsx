import React, { FC } from "react"
import { IconSpinner } from "@threshold-network/components"
import { EthereumDark } from "../../static/icons/EthereumDark"

export const ThresholdSpinner: FC = () => {
  // @ts-ignore
  return <IconSpinner icon={EthereumDark} />
}
