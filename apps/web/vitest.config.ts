import react from "@vitejs/plugin-react"
import {fileURLToPath, URL} from "url"
import {defineConfig} from "vitest/config"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    environment: "jsdom",
  },
})
