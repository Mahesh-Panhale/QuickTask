import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // 🔴 IMPORTANT: base path for GitHub Pages
  base: mode === "production" ? "/QuickTask/" : "/",

  server: {
    host: "::",
    port: 8080,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
    },
  },

  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // ✅ Helps reduce & control build size
  build: {
    outDir: "dist",
    chunkSizeWarningLimit: 1500,
    sourcemap: false,
  },
}));
