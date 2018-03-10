module.exports = ({ file, options, env }) => {
    // browser support list see here: https://github.com/ai/browserslist#queries
    return ({
        plugins: {
            'autoprefixer': { browsers: 'last 2 version' },
        }
    })
}