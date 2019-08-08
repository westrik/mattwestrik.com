module.exports = {
	mode: "none",
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
					"style-loader",
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
	plugins: []
};
