const path = require("path")
const CracoLessPlugin = require("craco-less")
module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "components":path.resolve(__dirname, "src/components"),
      "utils":path.resolve(__dirname, "src/utils"),
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ],
}
