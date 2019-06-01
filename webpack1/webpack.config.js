module.exports = {
    mode: 'none',
    entry: {
        index: "./src/js/entry.js"
    },
    output: {
        filename: 'index.js',
        path: __dirname + '/out'
    }
};