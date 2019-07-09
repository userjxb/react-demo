const fs = require('fs');
const Mock = require('mockjs');
const path = require('path');

fs.readFile( path.join( __dirname,'../../public/category.json'), 'utf8', ( err,doc ) => {
  if( !doc ){ // 做这个判断是为了 只写一次就可以了
    var str = Mock.mock({
      "category|15": [
        {
          "cid|+1": 1,
          "name": "@name",
          "floor|2": [
            {
              "id|+1": 11,
              "name": "@name",
              "list|8": [
                {
                  "id|+1": 1101,
                  "name": "@name",
                  "img": "https://img.alicdn.com/imgextra/i4/2053469401/O1CN01oAWcWV2JJhx8G6ovd_!!2053469401.png"
                }
              ]
            }
          ]
        }
      ]
    })

    // console.log( str )
    fs.writeFile( path.join( __dirname,'../../public/category.json'), JSON.stringify( str.category ),( error ) => {
      if( error ) throw error
      console.log( '写入成功' )
    })
  }
})