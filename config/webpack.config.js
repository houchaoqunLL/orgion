const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const miniCssExtractPlugin=require('mini-css-extract-plugin');
module.exports={
    entry:{
        index:"./src/product.js",
        indexCss:"./src/index.js"
    },
    output:{
        path:path.resolve(__dirname,'../dist/'),
        filename:'[name].[hash].js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    // {loader:'style-loader'},
                    {loader:miniCssExtractPlugin.loader},  //用抽出css的插件，要改这个
                    {loader:'css-loader'}
                ]
            },{
                test:/\.less$/,
                use:[
                    // {loader:'style-loader'},
                    {loader:miniCssExtractPlugin.loader},
                    {loader:'css-loader'},
                    {loader:'less-loader'}
                ]
            },
            {
                test:/\.scss$/,
                use:[
                    {loader:'style-loader'},
                    {loader:'css-loader'},
                    {loader:'sass-loader'}
                ]
            },
            {
                test:/\.(jpg|png|gif|webp|jpeg|jfif)$/,
                use:[
                    {
                        loader:"url-loader",
                        options:{
                            limit:102400 //单位byte 图片小于100k的时候转为base64 否则用file-loader处理
                        }
                    }
                ]
            },{
                test:/\.js$/,
                exclude:/(node_modules|brower_components)/,  //注意babel-loader比babel-core多一级不能多两级多了降级
                use:[
                    {
                        loader:"babel-loader", // 用babel-loader处理
                        options:{
                            presets:['env'] //预设es6转化
                        }
                    }
                ]
            }
                
            
            // {
            //     test:/\.(jpg|png|gif|webp|jpeg)$/,
            //     use:[
            //         {loader:'file-loader'}
            //     ]
            // }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:"网页标题",
            template:"./src/tpl.html", //路径
            inject:true, //true 默认值，script票签放在body底部
            minify:{
                removeComments:true,  //是否移除注释
                removeAttributeQuotes:true, //是否移除属性的引号
                collapseWhitespace:true  //是否移除空白
            },
            filename:'index_1.html' //输出模板名称
        }),
        new miniCssExtractPlugin({
            filename:"[name].[hash].css"
        })
    ],
    devServer:{
        contentBase:path.join(__dirname,"dist"),
        compress:true,
        port:9000,
        open:true
    }
}