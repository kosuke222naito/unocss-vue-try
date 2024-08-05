import { defineConfig } from "unocss";
import presetAttributify from "@unocss/preset-attributify";

import { myPreset } from "./src/styles/unocss/presets/my-preset";

export default defineConfig({
  presets: [presetAttributify(), myPreset],
});
