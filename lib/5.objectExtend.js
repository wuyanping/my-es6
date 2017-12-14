'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

console.log('1.属性的简洁表示法');
{
	var foo = 'bar';
	var obj = { foo: foo
		// 等同于
		// const baz = {foo: foo};
	};console.log(obj); // { foo: 'bar' }
}

{
	var f = function f(x, y) {
		return { x: x, y: y };
	};

	console.log(f(1, 2)); // { x: 1, y: 2 }
}

// 方法也可以简写
{
	// es5
	// const o = {
	// 	method: function() {
	// 		return 'hello'
	// 	}
	// }

	// es6
	var o = {
		method: function method() {
			return 'hello';
		}
	};
}

// 下面是一个实际的例子。
{
	var birth = '2000/01/01';

	var Person = {
		name: 'yoko',

		//等同于birth: birth
		birth: birth,

		// 等同于hello: function ()...
		hello: function hello() {
			console.log('我的名字是，' + this.name);
		}
	};
	Person.hello();
}

{
	var getItem = function getItem(key) {
		return key in ms ? ms[key] : null;
	};

	var setItem = function setItem(key, value) {
		ms[key] = value;
	};

	var clear = function clear() {
		ms = {};
	};

	var ms = {};


	module.exports = { getItem: getItem, setItem: setItem, clear: clear
		// 等同于
		// module.exports = {
		//     getItem: getItem,
		//     setItem: setItem,
		//     clear: clear
		// }
	};
}

console.log('2. 属性名表达式');
{
	var _obj = {};
	// 方法一
	_obj.foo = true;

	// 方法二
	_obj['a' + 'bc'] = 123;
	console.log(_obj); // { foo: true, abc: 123 }
}

// （表达式）作为对象的属性名，即把表达式放在方括号内
{
	var _obj3;

	var propKey = 'foo';
	var _obj2 = (_obj3 = {}, _defineProperty(_obj3, propKey, true), _defineProperty(_obj3, 'a' + 'bc', 123), _obj3);
	console.log(_obj2); // { foo: true, abc: 123 }
	console.log(_obj2[propKey]); // true
}

console.log('Object.assign(target, sourcel...) 基本用法');
// Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。
{
	var target = { a: 1 };
	var sourcel = { b: 2 };
	var source2 = { c: 3 };

	Object.assign(target, sourcel, source2);
	console.log(target); // { a: 1, b: 2, c: 3 }
	console.log(sourcel); // { b: 2 }
	console.log(source2); // { c: 3 }
}

// 注意，如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。
{
	var _target = { a: 1, b: 1 };
	var source1 = { b: 2, c: 2 };
	var _source = { c: 3 };

	Object.assign(_target, source1, _source); // {a: 1, b: 2, c: 3}
	console.log(_target);
}
{
	var _obj4 = { a: 1 };
	console.log(Object.assign(_obj4) === _obj4); // true

	console.log(Object.assign(2)); // [Number: 2]
	console.log(Object.assign('2')); // [String: '2']
	// 如果该参数不是对象，则会先转成对象，然后返回。
	console.log(_typeof(Object.assign(2))); // object
	console.log(_typeof(Object.assign('2'))); // object
}

{
	var v1 = 'abc';
	var v2 = true;
	var v3 = 10;
	var _obj5 = Object.assign({}, v1, v2, v3);
	console.log(_obj5); // { '0': 'a', '1': 'b', '2': 'c' }
	// 这是因为只有字符串的包装对象，会产生可枚举属性。
}

console.log('注意点');
console.log('(1) 浅拷贝');
// Object.assign方法实行的是浅拷贝，而不是深拷贝。也就是说，如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用。
{
	var obj1 = { a: { b: 1 } };
	var obj2 = Object.assign({}, obj1);

	obj1.a.b = 2;
	console.log(obj2.a.b); // 2
}

console.log('（2）同名属性的替换');
{
	var _target2 = { a: { b: 'c', d: 'e' } };
	var source = { a: { b: 'hello' } };
	Object.assign(_target2, source);
	// { a: { b: 'hello' } }
}

console.log('（3）数组的处理');
// Object.assign可以用来处理数组，但是会把数组视为对象
{
	// Object.assign把数组视为属性名为 0、1、2 的对象
	var arr1 = [1, 2, 3];
	var arr2 = [4, 5];
	console.log(Object.assign(arr1, arr2)); // [ 4, 5, 3 ]
}

console.log('（4）取值函数的处理');
{
	var _source2 = {
		get foo() {
			return 1;
		}
	};
	var _target3 = {};
	console.log(_source2);
	console.log(Object.assign(_target3, _source2)); //{ foo: 1 }
	// Object.assign不会复制这个取值函数，只会拿到值以后，将这个值复制过去。
}

console.log('常见用途');
console.log('（1）为对象添加属性');
{
	var Point = function Point(x, y) {
		_classCallCheck(this, Point);

		Object.assign(this, { x: x, y: y });
	};
	// 将x属性和y属性添加到Point类的对象实例

}

console.log('（2）为对象添加方法');
{
	// Object.assign(SomeClass.prototype, {
	//   someMethod(arg1, arg2) {
	//     ···
	//   },
	//   anotherMethod() {
	//     ···
	//   }
	// });

	// // 等同于下面的写法
	// SomeClass.prototype.someMethod = function (arg1, arg2) {
	//   ···
	// };
	// SomeClass.prototype.anotherMethod = function () {
	//   ···
	// };	
}

console.log('（3）克隆对象');
{
	var clone = function clone(origin) {
		return Object.assign({}, origin);
	};

	// function clone(origin) {
	//   let originProto = Object.getPrototypeOf(origin);
	//   return Object.assign(Object.create(originProto), origin);
	// }


	var _obj6 = { a: { b: 1 } };
	var _obj7 = clone(_obj6);

	_obj6.a.b = 2;
	console.log(_obj7.a.b); // 2
}

console.log('可枚举性');
{
	var _obj8 = { foo: 123 };
	console.log(Object.getOwnPropertyDescriptor(_obj8, 'foo'));
	// { value: 123,
	//   writable: true,
	//   enumerable: true, 称为”可枚举性“，
	//   configurable: true }
}

{
	// 属性的遍历
	// ES6 一共有 5 种方法可以遍历对象的属性。

	// （1）for...in

	// for...in循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。

	// （2）Object.keys(obj)
}

console.log('对象的扩展运算符');
{
	var a = 1,
	    b = [2, 3];

	console.log(a); // 1
	console.log(b); // [2, 3]
}

console.log('对象的解构赋值');
console.log('对象的解构赋值需要转换为es5才能运行');
{
	var _x$y$a$b = { x: 1, y: 2, a: 3, b: 4 },
	    x = _x$y$a$b.x,
	    y = _x$y$a$b.y,
	    z = _objectWithoutProperties(_x$y$a$b, ['x', 'y']);

	console.log(x); // 1
	console.log(y); // 2
	console.log(z); // {a: 3, b: 4}

	// let { x, y, ...z } = null; // 运行时错误
	// let { x, y, ...z } = undefined; // 运行时错误
}
{
	var _z = { a: 3, b: 4 };
	var n = _extends({}, _z);
	console.log(n); //{ a: 3, b: 4 }

	// 解构赋值必须是最后一个参数，否则会报错
	// let { ...x, y, z } = obj; // 句法错误
	// let { x, ...y, ...z } = obj; // 句法错误
}

{
	var o1 = { a: 1 };
	var o2 = { b: 2 };
	o2.__proto__ = o1;

	var o3 = _objectWithoutProperties(o2, []);

	console.log(o1); //{ b: 2 }
	console.log(o2); //{ b: 2 }
	console.log(o3); //{ b: 2 }
	console.log(o3.a); // undefined
}

{
	var _o = Object.create({ x: 1, y: 2 });
	_o.z = 3;

	var _x = _o.x,
	    _objectWithoutPropert = _objectWithoutProperties(_o, ['x']),
	    _y = _objectWithoutPropert.y,
	    _z2 = _objectWithoutPropert.z;

	console.log(_x); // 1
	console.log(_y); // 2
	console.log(_z2); // 3
}