
/** @type {import('next').NextConfig} */

const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/i,
            use: ['@svgr/webpack'],
        });
        return config;
    },

    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true,
    },
    plugins: [
        "inline-react-svg"
    ]
}


module.exports = nextConfig;
