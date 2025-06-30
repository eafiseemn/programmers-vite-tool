import { defineConfig } from "vite";
import { resolve } from "node:path";

const env = process.env.NODE_ENV;

export default defineConfig({
  server: {
    host:'localhost',
    port: 3000,
    cors: true,
  },
  build: {
    outDir: "docs"
  },
  css: {
    devSourcemap: true,
    modules: {
      generateScopedName: env === 'development' ? "[name]__[local]" : "css-[name]-[hash:base64:6]"
    }
  },
  resolve: {
    alias: {'@' : resolve(__dirname, 'src')}
  }
})