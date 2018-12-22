module.exports = {
    entry: "./dev/script/app.ts",
    output: {
        filename: "./script/app.js"
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: "ts-loader" }
        ]
    }
};