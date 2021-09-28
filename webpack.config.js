const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: {
        main: path.join(__dirname, './webpack/entry-server'),
        client: path.join(__dirname, './webpack/entry-client'),
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js',
        libraryTarget: "umd",
        globalObject: "this"
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: '/node_modules',
                use: {
                    loader: 'vue-loader'
                }
            },
            {
                test: /\.js$/,
                exclude: '/node_modules|dist/',
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        // plugin: [
                        //     '@babel/plugin-transform-runtime'
                        // ]
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ]
}