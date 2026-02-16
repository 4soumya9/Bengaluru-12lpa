import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg"],
      manifest: {
        name: "Offline Todo",
        short_name: "Todo",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/vite.svg",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
