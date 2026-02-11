/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    unoptimized: true,  
    remotePatterns: [
      {
        protocol: "https",
        hostname: "athenatec.com",
      },
    ],
  },
};

module.exports = nextConfig;
