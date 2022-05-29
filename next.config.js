/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ["cdn2.thecatapi.com", "24.media.tumblr.com", "28.media.tumblr.com", "27.media.tumblr.com", "26.media.tumblr.com", "25.media.tumblr.com"],
    loader: 'akamai',
    path: '/'
  }
}

module.exports = nextConfig
