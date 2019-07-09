const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(

    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css'
    }),
    
    addWebpackAlias({
        // key: value    key就是别名： value就是磁盘路径
        'assets': path.join(__dirname,'src/assets'),
        'common': path.join( __dirname, 'src/components/common' ),
        'layout': path.join( __dirname,'src/components/layout'),
        'pages': path.join( __dirname,'src/pages'),
        'store': path.join( __dirname,'src/store'),
        'utils': path.join( __dirname,'src/utils'),
        'lib': path.join( __dirname,'src/lib'),
        'style': path.join( __dirname, 'src/assets/stylesheets'),
        'img': path.join( __dirname,'src/assets/img')
    })
);