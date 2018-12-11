/*
 * @Author: za-xielingjuan 
 * @Date: 2018-11-19 12:15:57 
 * @Description: '日文表单校验正则' 
 * @Last Modified by: za-xielingjuan
 * @Last Modified time: 2018-12-07 18:42:05
 * @ToDo: '' 
 */

exports = module.exports = {
    fullWidthText: /^[Ａ-ｚ０-９ぁ-んァ-ン一-龠々]+$/, // 全角文字('谢ひらがなコン１２３ａＡ')
    fullWidthAlphabetsNumbers: /^[Ａ-ｚ０-９]+$/, // 全角英数字('ｓＡ０９')
    halfWidthAlphabetsNumbers: /^[a-zA-Z0-9]+$/, // 半角英数字('asd12')
    fullWidthAlphabets: /^[Ａ-ｚ]+$/, // 全角英文('ａＡ')
    halfWidthAlphabets: /^[a-zA-Z]+$/, // 半角英文('aA')
    fullWidthNumbers: /^[０-９]+$/, // 全角数字('１２３')
    halfWidthNumbers: /^[0-9]+$/, // 半角数字('123')
    fullWidthKatakanas: /^[ァ-ン一]+$/, // 全角片假名('コン一')
    halfWidthKatakanas: /^[ｧ-ﾝﾞﾟ一]+$/, // 半角片假名('ｺｻｼｽｾｿﾀ一')
};




