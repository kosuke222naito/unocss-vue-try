import { type Preset } from "unocss";

export const myPreset: Preset = {
  name: "my-preset",
  rules: [
    [/^m-([.\d]+)$/, ([, num]) => ({ margin: `${num}px` })],
    [/^p-([.\d]+)$/, ([, num]) => ({ padding: `${num}px` })],
  ],
};
