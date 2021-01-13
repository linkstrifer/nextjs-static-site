const isProd = process.env.NODE_ENV === "production";

module.exports = {
  basePath: isProd ? "/nextjs-static-site" : "",
  assetPrefix: isProd ? "/nextjs-static-site/" : "",
};
