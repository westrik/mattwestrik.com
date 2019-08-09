const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	entry: "./src/index.ts",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx']
	},
	performance: {
		hints: false
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: 'dist/',
							hmr: process.env.NODE_ENV === 'development',
						},
					},
					"css-loader",
					"sass-loader"
				]
			},
			{
				test: /\.(js|jsx|tsx|ts)$/,
				loaders: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	devServer: {
		contentBase: "src/",
		historyApiFallback: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + '/src/index.html',
			filename: 'index.html',
			// TODO: add favicon
			// inject: 'body'
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		})
	]
};
