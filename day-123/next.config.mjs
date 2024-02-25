/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "vectorstock.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
