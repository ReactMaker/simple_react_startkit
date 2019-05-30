module.exports = {
  presets: [
    "@babel/env",
    "@babel/preset-react"
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    "react-hot-loader/babel"
  ]
};
