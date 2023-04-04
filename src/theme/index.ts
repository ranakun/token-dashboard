import { extendTheme, theme } from "@chakra-ui/react"
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
import { Timeline } from "./Timeline"
import { DotsLoadingIndicator } from "./DotsLoadingIndicator"

const index = extendTheme({
  // ...defaultTheme,
  // colors: {
  //   ...defaultTheme.colors,
  //   // TODO: move color to components repo.
  //   teal: {
  //     "500": "#00BACC",
  //   },
  // },
  // colors: {
  //   primary: {
  //     main: "#7bb9e8",
  //     50: "#e3f2fd",
  //     100: "#bbdefb",
  //     200: "#90caf9",
  //     300: "#64b5f6",
  //     400: "#42a5f5",
  //     // 500: "#2196f3",
  //     500: "#B794F4",
  //     600: "#1e88e5",
  //     700: "#1976d2",
  //     800: "#1565c0",
  //     900: "#0d47a1",
  //   },
  // },
  colors: {
    // gradient: {
    //   1: "linear-gradient(90deg, hsla(40, 96%, 53%, 1) 0%, hsla(46, 100%, 78%, 1) 100%, hsla(32, 97%, 59%, 1) 100%)",
    //   2: "linear-gradient(90deg, hsla(40, 96%, 53%, 1) 0%, hsla(46, 100%, 78%, 1) 100%, hsla(32, 97%, 59%, 1) 100%)",
    //   3: "linear-gradient(90deg, hsla(40, 96%, 53%, 1) 0%, hsla(46, 100%, 78%, 1) 100%, hsla(32, 97%, 59%, 1) 100%)",
    //   4: "linear-gradient(90deg, hsla(40, 96%, 53%, 1) 0%, hsla(46, 100%, 78%, 1) 100%, hsla(32, 97%, 59%, 1) 100%)",
    // },
    gradient: {
      1: "#FAAD14",
      2: "#FAAD14",
      3: "#FAAD14",
      4: "#FAAD14",
    },
    // brand: {
    //   50: "#FCF9FF",
    //   75: "#F2EDFF",
    //   100: "#D5C6FF",
    //   // 200
    //   300: "#9974FF",
    //   400: "#8B3AFF",
    //   500: "#7D00FF", // main Threshold brand color
    //   550: "#7C47EE", // main Threshold brand color - DARK MODE
    //   600: "#BD30FF",
    //   700: "#4A2E99",
    //   800: "#250F66",
    //   900: "#150640",
    // },
    yellow: {
      50: "#FFFBE6",
      100: "#FFF1B8",
      200: "#FFE58F",
      300: "#FFD666",
      400: "#FFC53D",
      500: "#FAAD14",
      600: "#D48806",
      700: "#AD6800",
      800: "#874D00",
      900: "#613400",
    },
    gray: {
      ...theme.colors.gray,
      50: "#F6F7FA",
      100: "#E2E8F0",
      // 200
      300: "#B1BCCC",
      // 400
      500: "#718096",
      // 600
      700: "#4A5568",
      800: "#323A47",
      850: "#2A313C",
      900: "#1D2229",
    },
    brand: {
      50: "#FFFBE6",
      100: "#FFF1B8",
      200: "#FFE58F",
      300: "#FFD666",
      400: "#FFC53D",
      500: "#FAAD14",
      600: "#D48806",
      700: "#AD6800",
      800: "#874D00",
      900: "#613400",
    },
    red: {
      400: "#F55B4B",
      500: "#E53939",
      600: "#BF3030",
      700: "#992626",
      800: "#731D1D",
      900: "#4C1316",
    },
    green: {
      50: "#F0FFF4",
      100: "#C6F6D5",
      200: "#9AE6B4",
      300: "#68D391",
      400: "#48BB78",
      500: "#38A169",
      600: "#25855A",
      700: "#276749",
      800: "#22543D",
      900: "#1C4532",
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
    Timeline,
    DotsLoadingIndicator,
    Button: {
      baseStyle: {
        bg: "#EBEBEB",
      },
    },
  },
})

export default index
