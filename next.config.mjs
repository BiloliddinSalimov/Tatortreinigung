/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve portfolio photos as AVIF/WebP — a fraction of the JPEG size.
    formats: ["image/avif", "image/webp"],
  },
};
export default nextConfig;
