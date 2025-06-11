// next.config.ts
import { copyFileSync } from "fs";

// Copia el archivo _headers desde public/ al build final en .next/
try {
  copyFileSync("public/_headers", ".next/_headers");
  console.log("✅ Copiado _headers a .next/");
} catch (e) {
  console.warn("⚠️ No se pudo copiar _headers:", e);
}

// Configuración de Next.js
const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
