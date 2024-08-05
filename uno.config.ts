import { defineConfig } from "unocss";
import presetAttributify from "@unocss/preset-attributify";

export default defineConfig({
  rules: [["m-1", { margin: "1px" }]],
  presets: [presetAttributify()],
});
