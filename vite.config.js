import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  proxy: {
    "/raw/hbAZZiJx": {
      target: "http://jsonplaceholder.typicode.com",
    },
  },
});
