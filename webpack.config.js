// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const isProduction = process.env.NODE_ENV == 'production';
const stylesHandler = 'style-loader';
const CopyWebpackPlugin = require('copy-webpack-plugin');


const config = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'interactivecode.js'
    },
    plugins: [
        new CopyWebpackPlugin(
            { 
                patterns: [
                    { from: 'node_modules/codemirror/src/codemirror.js', to: 'vendor' },
                    { from: 'node_modules/klipse/dist/klipse_plugin.js', to: 'vendor' },
                    { from: 'node_modules/klipse/dist/javascript.inc.js', to: 'vendor' },
                    { from: 'node_modules/klipse/dist/pretty_format.js', to: 'vendor' },
                ]
            }
        )
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, 'css-loader']
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset'
            }
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
    }
    return config;
};
