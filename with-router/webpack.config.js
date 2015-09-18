import {
    HotModuleReplacementPlugin,
    NoErrorsPlugin
} from 'webpack';

import path from 'path';

const PROJECT_SRC = path.resolve(__dirname);

const clientDevConfig = {
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            exclude: path.resolve(__dirname, 'node_modules'),
            include: [
                path.resolve(__dirname),
                PROJECT_SRC
            ]
        }]
    },
    resolve: {
        //alias: {
            //'redux-react-router': PROJECT_SRC
        //},
        extensions: ['', '.js']
    },
    entry: [
        'webpack-hot-middleware/client',
        './index'
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new NoErrorsPlugin()
    ],
    devtool: 'eval'
};

export default clientDevConfig;