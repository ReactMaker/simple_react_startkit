// browser support list see here: https://github.com/ai/browserslist#queries
module.exports = ({ file, options, env }) => ({
  plugins: {
    autoprefixer: { browsers: 'last 2 version' },
  }
});
