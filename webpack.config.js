module.exports = {
    entry: ["@babel/polyfill", "./src/script.js"],
    output:{
        path: `${__dirname}/public/`,
        filename: 'bundle.js'
    },

    module:{
        rules:[
            {
                test: /\.js$/,
                use:{
                    loader: 'babel-loader'
                }
            }
        ]
    }
};
