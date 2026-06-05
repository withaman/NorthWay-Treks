/** @type {import('next').NextConfig} */
const nextConfig = {
    allowedDevOrigins: [
        "http://localhost:3000",
        "http://10.172.109.225:3000",
        "http://172.31.224.32",
    ],

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
            },
            {
                protocol: "https",
                hostname: "lh4.googleusercontent.com",
            },
            {
                protocol: "https",
                hostname: "lh5.googleusercontent.com",
            },
            {
                protocol: "https",
                hostname: "lh6.googleusercontent.com",
            },
        ],
    },
};

export default nextConfig;