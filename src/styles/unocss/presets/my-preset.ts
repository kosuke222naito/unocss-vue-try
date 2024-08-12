import { definePreset, type Preset } from "unocss";

interface MyPresetOptions {
  primaryColor?: string;
  secondaryColor?: string;
}

export default definePreset(
  (options?: MyPresetOptions): Preset => ({
    name: "my-preset",
    rules: [
      ["bg-primary", { "background-color": options?.primaryColor || "blue" }],
      ["bg-secondary", { "background-color": options?.secondaryColor || "green" }],
    ],
  })
);
