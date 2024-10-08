// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nhrxyrenvhuaybhx.public.blob.vercel-storage.com",
        port: "",
        pathname: "/**", // Allow all paths
      },
    ],
  },
};
