/**
 * @type {import('next').NextConfig}
 **/

module.exports = {
  reactStrictMode: true,
  images:{
    domains: ['gh.jumia.is', 'backend-api.martekgh.com', 'images.unsplash.com']
  },
  publicRuntimeConfig : {
    backendUrl: process.env.NEXT_PUBLIC_API_URL
  }
}
