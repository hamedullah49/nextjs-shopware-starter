// eslint-disable-next-line import/no-anonymous-default-export
export default {
  experimental: {
    ppr: true,
    inlineCss: true,
    useCache: true,
    reactOwnerStack: true,
    newDevOverlay: true,
  },
  eslint: {
    // Disabling on production builds because we're running checks on PRs via GitHub Actions.
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
  images: {
    // also other fromats like jpg, jpeg, png are working without adding them here
    // formats: ["image/avif", "image/webp", "image/jpeg", "image/png"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/password",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
