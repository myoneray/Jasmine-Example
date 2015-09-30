/**
 * 测试案例
 * 
 * @author MYONERAY
 * @TODO http://jasmine.github.io/
 */
describe('Example 1>', function() {
	it('传值到要测试的方法并与预期值进行比对：', function() {
		var a = 'ck';
		// 错误
		var exp = 'my name is ck';
		// 正确
		// var exp = 'my name is mm';
		expect(exp).toEqual(showName(a));
	});
});