import { Button } from "./components";

export const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  fonts: {
    heading: `"Mukta", sans-serif; `,
    body: `sans-serif; `,
  },
  styles: {
    global: {
      "html, body": {
        bg: "primary",
      },
    },
  },
  semanticTokens: {
    colors: {
      error: "red.500",
      success: "green.500",
      primary: {
        default: "#F5F4F5",
        _dark: "#262626",
      },
      lightenPrimary: {
        default: "#F5F4F5",
        _dark: "#3b3b3b",
      },
      darkenPrimary: {
        default: "#F5F4F5",
        _dark: "#222222",
      },
      secondary: {
        default: "#FFFFFF",
        _dark: "#111111",
      },
      lightenSecondary: {
        default: "#FFFFFF",
        _dark: "#282828",
      },
      darkenSecondary: {
        default: "#FFFFFF",
        _dark: "#0f0f0f",
      },
      brand: {
        default: "#3F7BFB",
      },
    },
  },
  colors: {
    brand: {
      300: "#4780f7",
      500: "#0a55f4",
    },
  },
  components: {
    Button,
  },
};
