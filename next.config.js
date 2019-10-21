const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});
const withPreact = require("next-preactx-plugin");

module.exports = withBundleAnalyzer(withPreact());
