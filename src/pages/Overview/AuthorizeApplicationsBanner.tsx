import { useColorModeValue } from "@threshold-network/components"
import authorizeAppsFingerPrint from "../../static/images/AuthorizeAppsFingerPrint.png"
import authorizeAppsFingerPrintDark from "../../static/images/AuthorizeAppsFingerPrintDark.svg"
import AnnouncementBanner from "../../components/AnnouncementBanner"

export const AuthorizeApplicationsBanner = () => {
  const imgSrc = useColorModeValue(
    authorizeAppsFingerPrint,
    authorizeAppsFingerPrintDark
  )
  return (
    <AnnouncementBanner
      imgSrc={imgSrc}
      preTitle="Get Started"
      title="Authorize Insaanity apps and stake your BAT to earn rewards."
      href="/staking"
      buttonText="Start Staking"
    />
  )
}
