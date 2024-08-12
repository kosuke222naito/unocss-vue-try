import { defineConfig, presetUno } from "unocss";
import presetAttributify from "@unocss/preset-attributify";

import myPreset from "./src/styles/unocss/presets/my-preset";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    myPreset({
      primaryColor: "#42B983",
      secondaryColor: "#35495E",
    }),
  ],
  theme: {
    breakpoints: {
      sm: "320px",
      md: `${40 * 16}px`,
      lg: "960px",
    },
  },
});
