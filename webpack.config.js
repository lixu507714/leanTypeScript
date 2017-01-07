/**
 * Created by lixu on 17/1/6.
 */
module.exports = {
  entry:"./app.ts",
  output:{
      filename:"bundles.js"
  },
    module:{
      loader:[
          {
              test:/\.ts$/,loader:"ts-loader"
          }
      ]
    }
};