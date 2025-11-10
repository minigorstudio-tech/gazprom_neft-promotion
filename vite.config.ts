import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// Убираем Replit-специфичные плагины - они не нужны на Vercel
// import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    react(),
    // runtimeErrorOverlay(), // Убрать - только для Replit
    // Убрать Replit-плагины - они не работают на Vercel
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"), // Убрать "client/"
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: ".", // Изменить на текущую директорию вместо "client"
  build: {
    outDir: "dist/public",
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
