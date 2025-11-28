import * as path from 'node:path';
const { merge } = require('webpack-merge');
import { getCommonConfig } from './rspack.common';

const commonConfig = getCommonConfig();

const port = 3001;

module.exports = merge(commonConfig, {
    mode: 'development',
    dev: {
        hmr: false,
        liveReload: false,
    },
    devServer: {
        port: port,
        open: true,
        hot: false,
        liveReload: false,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        watchFiles: [path.resolve(__dirname, 'src')],
    },
});
