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

## 报错信息国际化字段列表

字段名 |  内容 |
|---|---|
csvLessThan10	| 支持.csv格式，文件大小不能超过10MB
fileFormatNotSupported	| 文件格式不支持
pleaseUpload	| 请上传
pleaseInputCorrectFormat |	请输入正确格式
fullWidthText	| 请输入全角文字
fullWidthAlphabetsNumbers	| 请输入全角英数字
halfWidthAlphabetsNumbers | 	请输入半角英数字
fullWidthAlphabets	| 请输入全角英文字符
halfWidthAlphabets	| 请输入半角英文字符
fullWidthNumbers	| 请输入全角数字
halfWidthNumbers	| 请输入半角数字
fullWidthKatakanas	| 请输入全角片假名
halfWidthKatakanas	| 请输入半角片假名