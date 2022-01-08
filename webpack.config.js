module.exports={
    target:"node",
    module: {
        rules: [
            {
                test: /\.(woff|ttf|otf|eot|woff2|svg)$/i,
                loader: "file-loader"
            }
        ]
      }
};