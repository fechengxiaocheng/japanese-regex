# Japanese Regex

japanese-regex包中统一了表单中需要校验的日本字段(如片假名)的正则表达式。

## 使用方法

``` javascript
// 在项目根目录安装npm包
npm i japanese-regex
// 然后在项目文件中引用(可按需引用)
import { halfWidthKatakanas } from 'japanese-regex';
console.log(halfWidthKatakanas.test('ｺｻｼｽｾｿﾀ'));
```
 
## 校验字段列表
    
|  类型 | 字段名 |  校验内容 |
| --- | --- | --- |
| 全角文字(全角平假名+全角片假名+汉字+全角英文+全角数字+长音符号一+々) | fullWidthText | '谢ひらがなコン１２３ａＡ々一' |
|全角英数字|fullWidthAlphabetsNumbers|'ｓＡ０９'|
| 半角英数字 | halfWidthAlphabetsNumbers | 'asd12' |
| 全角英文 | fullWidthAlphabets | 'ａＡ' |
| 半角英文 | halfWidthAlphabets | 'aA' |
| 全角数字 | fullWidthNumbers | '１２３' |
| 半角数字 | halfWidthNumbers | '123' |
| 全角片假名 | fullWidthKatakanas | 'コン一' |
| 半角片假名 | halfWidthKatakanas | 'ｺｻｼｽｾｿﾀ一' |
