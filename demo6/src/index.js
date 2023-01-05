import data from './data.json'

// 引入样式文件
import "./style.css";
function fn1 () {
    console.log('fn1');
}
fn1()
console.log(data);
// 开发环境
// webpack ./src/index.js -o ./dist/bundle.js --mode=development
// 生产环境
// webpack ./src/index.js -o ./dist/bundle_production.js --mode=production

// webpack 默认可处理js文件，json文件
// 生产环境下比开发环境多了压缩代码和代码混淆