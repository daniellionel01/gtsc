import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["./build/dev/javascript/gtsc/gleam.main.mjs"],
  dts: true,
});
