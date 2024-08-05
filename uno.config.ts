import { defineConfig } from "unocss";
import presetAttributify from "@unocss/preset-attributify";

export default defineConfig({
  rules: [[/^m-([.\d]+)$/, ([, num]) => ({ margin: `${num}px` })]],
  presets: [presetAttributify()],
});
