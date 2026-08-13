import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // GitHub Pages provides VITE_BASE_PATH=/Propose/ during its build.
  // Local development and root-domain deployments continue to use `/`.
  base: process.env.VITE_BASE_PATH || "/",
  plugins: [react(), tailwindcss()],
});
