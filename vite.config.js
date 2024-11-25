import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    commonjsOptions: { transformMixedEsModules: true },
    rollupOptions: {
      input: "src/main.jsx",
    },
  },
  publicDir: "public",
  base: "/my-pet-proj/",
});
