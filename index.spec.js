const Jr = require('./index');
const { 
    fullWidthText, 
    fullWidthAlphabetsNumbers,
    halfWidthAlphabetsNumbers,
    fullWidthAlphabets,
    halfWidthAlphabets,
    fullWidthNumbers,
    halfWidthNumbers,
    fullWidthKatakanas,
    halfWidthKatakanas
} = Jr;

test('fullWidthText is right', () => {
  expect(fullWidthText.test('谢ひらがなコン１２３ａＡ々一')).toBeTruthy;
});
test('fullWidthAlphabetsNumbers is right', () => {
    expect(fullWidthAlphabetsNumbers.test('ｓＡ０９')).toBeTruthy;
});
test('halfWidthAlphabetsNumbers is right', () => {
    expect(halfWidthAlphabetsNumbers.test('asd12')).toBeTruthy;
});
test('fullWidthAlphabets is right', () => {
    expect(fullWidthAlphabets.test('ａＡ')).toBeTruthy;
});
test('halfWidthAlphabets is right', () => {
    expect(halfWidthAlphabets.test('aA')).toBeTruthy;
});
test('fullWidthNumbers is right', () => {
    expect(fullWidthNumbers.test('１２３')).toBeTruthy;
});
test('halfWidthNumbers is right', () => {
    expect(halfWidthNumbers.test('123')).toBeTruthy;
});
test('fullWidthKatakanas is right', () => {
    expect(fullWidthKatakanas.test('コン一')).toBeTruthy;
});
test('halfWidthKatakanas is right', () => {
    expect(halfWidthKatakanas.test('ｺｻｼｽｾｿﾀ一')).toBeTruthy;
});

