const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const isNeedGzip = true;
// TerserPlugin配置
const terserConfig = new TerserPlugin({
    terserOptions: {
        // 自动删除console.log
        compress: {
            warnings: false,
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ['console.log'],
        },
    },
    sourceMap: false,
    parallel: true,
});
// CompressionWebpackPlugin配置
const compressionConfig = new CompressionWebpackPlugin({
    filename: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.js$|\.css$|\.html$/,
    // 对超过10k的数据压缩
    threshold: 10240,
    // 压缩率小于这个值的资源才会被处理
    minRatio: 0.8,
    // 不删除源文件
    deleteOriginalAssets: false,
});

module.exports = {
    // 基本路径
    publicPath: isProduction ? '.' : '/',
    // 静态文件目录
    assetsDir: 'static',
    // 生产环境去除source map构建
    productionSourceMap: false,
    configureWebpack: (config) => {
        if (isProduction) {
            config.plugins.push(terserConfig);
        }
        if (isProduction && isNeedGzip) {
            config.plugins.push(compressionConfig);
        }
    },
    // css相关配置
    css: {
        extract: isProduction,
        sourceMap: true,
    },
};