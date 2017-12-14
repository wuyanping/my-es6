"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// 1. 数组的解构赋值
{
	var _a = 1,
	    _b = 2,
	    _c = 3;

	console.log(_a); // 1
	console.log(_b); // 2
	console.log(_c); // 3
}

// 上面代码表示，可以从数组中提取值，按照对应位置，对变量赋值。
{
	var head = 1,
	    tail = [2, 3, 4];

	console.log(head); // 1
	console.log(tail); // [2, 3, 4]
}

{
	var _ref = ['a'],
	    x = _ref[0],
	    y = _ref[1],
	    z = _ref.slice(2);

	console.log(x); // "a"
	console.log(y); // undefined
	console.log(z); // []
}

// 如果解构不成功，变量的值就等于undefined。

// let [x, y, z] = new Set(['a', 'b', 'c']);
// x // "a"

// 2. 默认值
// let [foo = true] = []
// console.log(foo) // true

// let [x, y = 'b'] = ['a']; // x='a', y='b'
// let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'
// 如果一个数组成员不严格等于undefined，默认值是不会生效的

// let [x = 1] = [undefined];
// x // 1

// let [x = 1] = [null];
// x // null
// 因为null不严格等于undefined。

// let [x = 1, y = x] = [];     // x=1; y=1
// let [x = 1, y = x] = [2];    // x=2; y=2
// let [x = 1, y = x] = [1, 2]; // x=1; y=2
// let [x = y, y = 1] = [];     // ReferenceError

// 2. 对象的解构赋值
{
	var _foo$bar = { foo: "aaa", bar: "bbb" },
	    foo = _foo$bar.foo,
	    bar = _foo$bar.bar;

	console.log(foo); // "aaa"
	console.log(bar); // "bbb"
	// 变量必须与属性同名，才能取到正确的值。
}

// let { baz } = { foo: "aaa", bar: "bbb" };
// console.log(baz) // undefined

// 如果变量名与属性名不一致，必须写成下面这样。
// let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
// console.log(baz) // "aaa"

// let { foo: baz } = { foo: "aaa", bar: "bbb" };
// baz // "aaa"
// foo // error: foo is not defined

// 与数组一样，解构也可以用于嵌套结构的对象。
// let obj = {
// 	p: [
// 		'hello',
// 		{y: 'world'}
// 	]
// }

// // let {p: [x, {y}]} = obj
// let {p, p: [x, {y}]} = obj
// console.log(p)
// console.log(x)
// console.log(y)

// const node = {
// 	loc: {
// 		start: {
// 			line: 1,
// 			column: 5
// 		}
// 	}
// }

// let {loc, loc: {start}, loc: {start: {line}}} = node
// console.log(loc)
// console.log(start)
// console.log(line)

// let obj = {};
// let arr = [];

// ({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });
// console.log(obj) // {prop:123}
// console.log(arr) // [true]

// var {x = 3} = {};
// x // 3

// var {x, y = 5} = {x: 1};
// x // 1
// y // 5

// var {x: y = 3} = {};
// y // 3

// var {x: y = 3} = {x: 5};
// y // 5

// var { message: msg = 'Something went wrong' } = {};
// msg // "Something went wrong"

// let {foo: {bar}} = {baz: 'baz'};

// 如果要将一个已经声明的变量用于解构赋值，必须非常小心
// 错误的写法
// let x;
// {x} = {x: 1};

// // 正确的写法
// let x;
// ({x} = {x: 1})

// 对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量。
{
	var log = Math.log,
	    sin = Math.sin,
	    cos = Math.cos;
}

//3. 字符串的解构赋值
{
	var _hello = 'hello',
	    _hello2 = _slicedToArray(_hello, 5),
	    a = _hello2[0],
	    b = _hello2[1],
	    c = _hello2[2],
	    d = _hello2[3],
	    e = _hello2[4];

	console.log(a); // h
	console.log(b); // e
	console.log(c); // l
	console.log(d); // l
	console.log(e); // o
	// 字符串被转换成了一个类似数组的对象。
	// [h, e, l, l, o]
}

// let {length:len} = 'hello'
// console.log(len)

// 5.函数参数的解构赋值 
// function add ([x, y]) {
// 	return x+y
// }
// add([1, 2])

// console.log([[1, 2], [3,4]].map(([a, b]) => a + b)) // [3, 7]

// function move({x = 0, y = 0} = {}) {
// 	return [x, y]
// }
// console.log(move({x: 3, y: 8}))
// console.log(move({x: 3}))
// console.log(move({}))
// console.log(move())

// 7 用途
console.log('（1）交换变量的值）');
{
	var _x = 1;
	var _y = 2;
	var _ref2 = [_y, _x];
	_x = _ref2[0];
	_y = _ref2[1];

	console.log(_x);
	console.log(_y);
}

console.log('（2）从函数返回多个值');
// 返回一个数组
{
	var example = function example() {
		return [1, 2, 3];
	};

	var _example = example(),
	    _example2 = _slicedToArray(_example, 3),
	    _a2 = _example2[0],
	    _b2 = _example2[1],
	    _c2 = _example2[2];
}

// 返回一个对象
{
	var _example3 = function _example3() {
		return {
			foo: 1,
			bar: 2
		};
	};

	var _example4 = _example3(),
	    _foo = _example4.foo,
	    _bar = _example4.bar;

	console.log(_foo);
	console.log(_bar);
}

console.log('（3）函数参数的定义');
{
	var f = function f(_ref3) {
		var _ref4 = _slicedToArray(_ref3, 3),
		    x = _ref4[0],
		    y = _ref4[1],
		    z = _ref4[2];

		return x + y + z;
	};

	console.log(f([1, 5, 3]));
}

console.log('（4）提取 JSON 数据');
{
	var jsonData = {
		id: 42,
		status: "ok",
		data: [867, 5465]
	};
	var id = jsonData.id,
	    status = jsonData.status,
	    data = jsonData.data;

	console.log(id);
	console.log(status);
	console.log(data);
}

console.log('（5）函数参数的默认值');
{
	// JQuery.ajax = function (url, {
	// 	async = true,
	// 	beforeSend = function () {},
	// 	cache = true,
	// 	complete = function () {},
	// 	crossDomain = false,
	// 	global = true
	// }) {

	// }
}

console.log('（6）遍历 Map 结构');
{
	var map = new Map();
	map.set('first', 'hello');
	map.set('second', 'world');

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var _step$value = _slicedToArray(_step.value, 2),
			    key = _step$value[0],
			    value = _step$value[1];

			console.log(key + ' is ' + value);
		}

		// first is hello
		// second is world

		// 获取键名
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = map[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var _step2$value = _slicedToArray(_step2.value, 1),
			    key = _step2$value[0];
		}
		// ...


		// 获取键值
	} catch (err) {
		_didIteratorError2 = true;
		_iteratorError2 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion2 && _iterator2.return) {
				_iterator2.return();
			}
		} finally {
			if (_didIteratorError2) {
				throw _iteratorError2;
			}
		}
	}

	var _iteratorNormalCompletion3 = true;
	var _didIteratorError3 = false;
	var _iteratorError3 = undefined;

	try {
		for (var _iterator3 = map[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
			// ...

			var _step3$value = _slicedToArray(_step3.value, 2),
			    value = _step3$value[1];
		}
	} catch (err) {
		_didIteratorError3 = true;
		_iteratorError3 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion3 && _iterator3.return) {
				_iterator3.return();
			}
		} finally {
			if (_didIteratorError3) {
				throw _iteratorError3;
			}
		}
	}
}

console.log('（7）输入模块的指定方法');
{
	// const { SourceMapConsumer, SourceNode } = require("source-map");
}