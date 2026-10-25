import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      // Segunda página: /calculadora, fuera de la landing.
      input: {
        main: "index.html",
        calculadora: "calculadora/index.html",
      },
    },
  },
});
