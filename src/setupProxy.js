const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use( proxy( '/shengqian' , {
        target: 'http://www.shengqian.com',
        changeOrigin: true,
        pathRewrite: {
            '^/shengqian': ''
        }
    }))
}