import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"
import { defaultTheme } from "@threshold-network/components"
import { InfoBox } from "./InfoBox"
import { NotificationPill } from "./NotificationPill"
import { Tree } from "./Tree"
import { Tabs } from "./Tabs"
import { Badge } from "./Badge"
import { DetailedLinkListItem } from "./DetailedLinkListItem"
import { Checkbox } from "./Checkbox"
import { Radio } from "./Radio"
import { AnnouncementBanner } from "./AnnouncementBanner"
import { SecondaryAnnouncementBanner } from "./SecondaryAnnouncementBanner"

const index = extendTheme({
  ...defaultTheme,
  colors: {
    primary: {
      main: "#7bb9e8",
      50: "#e3f2fd",
      100: "#bbdefb",
      200: "#90caf9",
      300: "#64b5f6",
      400: "#42a5f5",
      // 500: "#2196f3",
      500: "#B794F4",
      600: "#1e88e5",
      700: "#1976d2",
      800: "#1565c0",
      900: "#0d47a1",
    },
  },
  button: {
    backgroundColor: "red",
  },
  textStyles: {
    bodyLg: {
      fontWeight: "400",
      fontSize: "18px",
      lineHeight: "28px",
    },
    "chain-identifier": {
      fontFamily: "IBM Plex Mono, monospace",
    },
  },
  components: {
    ...defaultTheme.components,
    AnnouncementBanner,
    SecondaryAnnouncementBanner,
    InfoBox,
    NotificationPill,
    Tree,
    Tabs,
    Badge,
    DetailedLinkListItem,
    Radio,
    Checkbox,
    Button: {
      baseStyle: {
        bg: "#EBEBEB",
      },
    },
  },
})

export default index
