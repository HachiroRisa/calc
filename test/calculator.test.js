test('コンストラクタのテスト', function() {

	var c = new Calculator();
	ok( c instanceof Calculator, 'new演算子をつけてコンストラクタを呼び出す');

	c =  Calculator();
	ok( c instanceof Calculator, 'new演算子をつけないでコンストラクタを呼び出す');
});

test('getExpression', function() {
	var c = new Calculator();
	equal(c.getExpression(), '', '結果が空文字と等しいか');
});

test('append', function() {
	var c = new Calculator();
	c.append('a');
	ok(c.getExpression() === 'a', '末尾に追加');
});

test('clearEntry', function() {
	var c = new Calculator();
	c.append('1+1');
	c.clearEntry();
	equal(c.getExpression(), '1+', '１文字削除'); 
});

test('clear', function() {
	var c = new Calculator();
	c.clear();
	equal(c.getExpression(), '', '初期化');
});
	
test('calculate', function() {
	var c = new Calculator();
	c.append('1+1');
	c.calculate();
	equal(c.getExpression(), '2', '計算');
});
