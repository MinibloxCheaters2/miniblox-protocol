import { defineConfig, type UserConfig } from "tsdown";

export default defineConfig({
  entry: "src/index.ts",
  dts: true,
  platform: "node", // NO ONE wants ts on a browser lol
  target: "esnext",
  cjsDefault: false, // no. CommonJS is trash, grow up.
  hash: false,
  minify: true,
}) satisfies UserConfig as UserConfig;
