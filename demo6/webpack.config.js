let path = require('path')
// 安装html-webpack-plugin   cnpm install html-webpack-plugin --save-dev
let HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    // 入口文件
    entry: './src/index.js',
    output: {
        // 输出文件名称
        filename: "bundle.js",
        // 输出文件路径
        // 绝对路径
        path: path.resolve(__dirname, 'dist')
    },
    // 开发模式 production(生产模式)
    mode: 'development',
    // loader的配置
    module: {
        // 将某个格式的文件进行转换处理
        rules: [
            {
                test: /\.css$/,
                use: [
                    // 以下执行顺序是从下到上
                    // 将js中的样式插入到style标签里
                    "style-loader",
                    "css-loader",
                    // 将css文件转换为js

                ],

            },
            // 匹配图片文件
            // 安装url-loader html-loader  cnpm install url-loader html-loader --save-dev
            // 安装file-loader cnpm install file-loader --save-dev
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader',
                // 图片小于8kb,base64处理
                // 优：减少请求数量
                // 缺：会使得体积更大
                options: {
                    limit: 8 * 1024,
                    // 关闭es模块化解析
                    esModule: false,
                    // [hash:10] 取图片hash的前10位
                    // [ext] 取图片的扩展名
                    name: '[hash:10].[ext]',
                },
                // 解决打包后生成多余图片
                type: 'javascript/auto'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    // plugins插件配置
    // template的内容是：要和入口文件整合的文件
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ],
    // 代码热更新（打包实时更新）
    // 安装 webpack-dev-server    cnpm install webpack-dev-server -g 
    devServer: {
        // 项目构建路径
        // contentBase: path.resolve(__dirname, 'dist')
        static: {
            directory: path.join(__dirname, 'dist')
        },
        // 启动gzip压缩
        compress: true,
        // 端口号
        port: 3000,
        // 自动打开浏览器
        open: true
    }

}