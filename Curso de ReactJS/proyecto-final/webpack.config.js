const path = require('path')

//? PLUGINS Y MINIFICADORES DE CSS Y SASS|SCSS
// para reducir el tamaño de las hojas de estilo de nuestro proyecto
const HtmlWebpackPlugin = require('html-webpack-plugin') //* para el template de html que usara webpack
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //* para reducir los css
const { SourceMapDevToolPlugin } = require('webpack') //* para conopcer el source map de nuestro proyecto

//? Configuracion del puerto
const port = process.env.PORT || 3000 // encaso de existir variable de entorno 'PORT', usalo, sino usa el puerto 3000

//? Exportar configuracion de Webpack
module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.[hash].js',
        publicPath: '/'
    },
    context: path.resolve(__dirname),
    devServer: {
        port,
        inline: true,
        historyApiFallback: true
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            //* Reglas para archivos JS y JSX
            // tienen que pasar el LINTING para poder pasar
            {
                enforce: 'pre',
                test: /(\.js|\.jsx)$/,
                exclude: /node_modules/,
                use: [
                    'eslint-loader',
                    'source-map-loader'
                ]
            },
            // reglas de Babel ES y JSX
            {
                test: /(\.js|\.jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        '@babel/env',
                        '@babel/react'
                    ]
                }
            },
            // reglas para CSS y SASS/SCSS
            {
                test: /(\.css|\.sass|\.scss)$/,
                loader: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            // reglas para los archivos de imagenes
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        // Template HTML
        new HtmlWebpackPlugin(
            {
                template: './index.html'
            }
        ),
        new MiniCssExtractPlugin(
            {
                filename: './css/styles.css'
            }
        ),
        new SourceMapDevToolPlugin(
            {
                filename: '[file].map'
            }
        )
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.sass', '.scss'],
        modules: ['node_modules']
    }
}