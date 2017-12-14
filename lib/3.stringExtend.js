'use strict';

{
	// 普通字符串
	var str = 'yoko \n is girl';
	console.log(str);

	// 多行字符串
	var str2 = 'yoko \n\t is girl';
	console.log(str2);

	// 字符串中嵌入变量
	var sex = 'gril';
	var str3 = 'yoko is ' + sex;
	console.log(str3);
}

// 可以进行运算，以及引用对象属性。
{
	var x = 1,
	    y = 2;

	console.log(x + ' + ' + y + ' = ' + (x + y));

	var obj = { x: 1, y: 2 };
	console.log('' + (obj.x + obj.y));
}

// 模板字符串之中还能调用函数。
{
	var fn = function fn() {
		return "hello";
	};

	console.log(fn() + ' yoko');
}
// 如果大括号中的值不是字符串，将按照一般的规则转为字符串。比如，大括号中是一个对象，将默认调用对象的toString方法。

// 模板字符串甚至还能嵌套。
{
	var tmpl = function tmpl(addrs) {
		return '\n\t  <table>\n\t  ' + addrs.map(function (addr) {
			return '\n\t    <tr><td>' + addr.first + '</td></tr>\n\t    <tr><td>' + addr.last + '</td></tr>\n\t  ';
		}).join('') + '\n\t  </table>\n\t';
	};
	var data = [{ first: '<Jane>', last: 'Bond' }, { first: 'Lars', last: '<Croft>' }];

	console.log(tmpl(data));

	console.log('abc is ' + 'abc');
	var arr = ['abc', '111'].join('');
	console.log(arr);
}

// 该运算符主要用于函数调用。
{
	var add = function add(x, y) {
		return x + y;
	};

	var f = function f(v, w, x, y, z) {
		console.log(v, w, x, y, z);
	};

	var numbers = [4, 38];
	console.log(add.apply(undefined, numbers));

	var args = [0, 1];
	f.apply(undefined, [1].concat(args, [3], [3]));
}

{
	[].concat([1]);
	// [1]
}