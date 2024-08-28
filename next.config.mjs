// next.config.mjs
import withPWA from "next-pwa";
import runtimeCaching from "next-pwa/cache.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Other Next.js config options here
};

export default withPWA({
  dest: "public",
  runtimeCaching,
  disable: process.env.NODE_ENV === "development",
})(nextConfig);
