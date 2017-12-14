// 1. 数组的解构赋值
// ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构
{
	let [a, b, c] = [1, 2, 3]
	console.log(a) // 1
	console.log(b) // 2
	console.log(c) // 3
}

// 上面代码表示，可以从数组中提取值，按照对应位置，对变量赋值。
{
	let [head, ...tail] = [1, 2, 3, 4];
	console.log(head) // 1
	console.log(tail) // [2, 3, 4]
}

{
	let [x, y, ...z] = ['a'];
	console.log(x) // "a"
	console.log(y) // undefined
	console.log(z) // []
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
	let { foo, bar } = { foo: "aaa", bar: "bbb" };
	console.log(foo) // "aaa"
	console.log(bar) // "bbb"
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
	let { log, sin, cos } = Math;
}

//3. 字符串的解构赋值
{
	var [a, b, c, d, e] = 'hello'
	console.log(a)  // h
	console.log(b)	// e
	console.log(c)	// l
	console.log(d)	// l
	console.log(e)	// o
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
console.log('（1）交换变量的值）')
{
	let x = 1
	let y= 2;
	[x, y] = [y, x]
	console.log(x)
	console.log(y)
}

console.log('（2）从函数返回多个值')
// 返回一个数组
{
	function example() {
	  return [1, 2, 3];
	}
	let [a, b, c] = example();
}

// 返回一个对象
{
	function example() {
	  return {
	    foo: 1,
	    bar: 2
	  };
	}
	let { foo, bar } = example();
	console.log(foo)
	console.log(bar)
}

console.log('（3）函数参数的定义')
{
	function f([x, y, z]) {
		return x+y+z
	}
	console.log(f([1, 5, 3]))
}

console.log('（4）提取 JSON 数据')
{
	let jsonData = {
		id: 42,
		status: "ok",
		data: [867, 5465]
	}
	let {id, status, data} = jsonData
	console.log(id)
	console.log(status)
	console.log(data)
}

console.log('（5）函数参数的默认值')
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

console.log('（6）遍历 Map 结构')
{
	const map = new Map()
	map.set('first', 'hello')
	map.set('second', 'world')

	for (let [key, value] of map) {
		console.log(key + ' is ' + value)
	}

	// first is hello
	// second is world
	
	// 获取键名
	for (let [key] of map) {
	  // ...
	}

	// 获取键值
	for (let [,value] of map) {
	  // ...
	}
}

console.log('（7）输入模块的指定方法')
{
	// const { SourceMapConsumer, SourceNode } = require("source-map");
}