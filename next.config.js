/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
       remotePatterns: [
      {
        protocol: "https",
        hostname: "athenatec.com",
      },
      {
        protocol: "https",
        hostname: "www.athenatec.com",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/mes/siemens-opcenter",
        destination: "/partners/siemens-opcenter",
        permanent: true,
      },
      {
        source: "/solutions/mes/siemens-opcenter-mes",
        destination: "/partners/siemens-opcenter",
        permanent: true,
      },
      {
        source: "/mes/critical-manufacturing",
        destination: "/partners/critical-manufacturing",
        permanent: true,
      },
      {
        source: "/solutions/mes/critical-manufacturing",
        destination: "/mes/critical-manufacturing",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;