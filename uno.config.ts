import { defineConfig } from "unocss";
import presetAttributify from "@unocss/preset-attributify";

import myPreset from "./src/styles/unocss/presets/my-preset";

export default defineConfig({
  presets: [
    presetAttributify(),
    myPreset({
      primaryColor: "#42B983",
      secondaryColor: "#35495E",
    }),
  ],
});
