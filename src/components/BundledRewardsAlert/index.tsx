import { FC } from "react"
import {
  Alert,
  AlertIcon,
  AlertDescription,
  BodySm,
  AlertProps,
} from "@threshold-network/components"

const defaultText =
  "tBTC + Random Beacon earn bundled rewards. Authorize both apps to earn rewards."

const BundledRewardsAlert: FC<{ text?: string } & AlertProps> = ({
  text = defaultText,
  ...restProps
}) => {
  return (
    <Alert status="error" mt="4" p="2" {...restProps}>
      <AlertIcon w="15px" h="15px" alignSelf="center" />
      <BodySm as={AlertDescription}>{text}</BodySm>
    </Alert>
  )
}

export default BundledRewardsAlert
