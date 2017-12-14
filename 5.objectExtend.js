console.log('1.属性的简洁表示法')
{
	const foo = 'bar'
	const obj = {foo}
	// 等同于
	// const baz = {foo: foo};
	console.log(obj) // { foo: 'bar' }
}

{
	function f(x, y) {
		return {x, y}
	}
	console.log(f(1, 2))  // { x: 1, y: 2 }
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
	const o = {
		method() {
			return 'hello'
		}
	}
}

// 下面是一个实际的例子。
{
	let birth = '2000/01/01'

	const Person = {
		name: 'yoko',

		//等同于birth: birth
		birth,

		// 等同于hello: function ()...
		hello() {
			console.log('我的名字是，' + this.name)
		}
	}
	Person.hello()
}

{
	let ms = {}
	function getItem (key) {
		return key in ms ? ms[key] : null
	}

	function setItem (key, value) {
		ms[key] = value
	}

	function clear () {
		ms = {}
	}

	module.exports = { getItem, setItem, clear }
	// 等同于
	// module.exports = {
	//     getItem: getItem,
	//     setItem: setItem,
	//     clear: clear
	// }
}

console.log('2. 属性名表达式')
{
	let obj = {}
	// 方法一
	obj.foo = true;

	// 方法二
	obj['a' + 'bc'] = 123;
	console.log(obj)  // { foo: true, abc: 123 }
}

// （表达式）作为对象的属性名，即把表达式放在方括号内
{
	let propKey = 'foo'
	let obj = {
		[propKey]: true,
		['a' + 'bc']: 123
	}
	console.log(obj) // { foo: true, abc: 123 }
	console.log(obj[propKey]) // true
}

console.log('Object.assign(target, sourcel...) 基本用法')
// Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。
{
	const target = {a: 1}
	const sourcel = {b: 2}
	const source2 = {c: 3}

	Object.assign(target, sourcel, source2)
	console.log(target)    // { a: 1, b: 2, c: 3 }
	console.log(sourcel)   // { b: 2 }
	console.log(source2)   // { c: 3 }
}

// 注意，如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。
{
	const target = {a:1, b: 1}
	const source1 = {b:2, c: 2}
	const source2 = {c: 3}

	Object.assign(target, source1, source2)  // {a: 1, b: 2, c: 3}
	console.log(target)
}
{
	const obj = {a:1}
	console.log(Object.assign(obj) === obj) // true

	console.log(Object.assign(2))   // [Number: 2]
	console.log(Object.assign('2')) // [String: '2']
	// 如果该参数不是对象，则会先转成对象，然后返回。
	console.log(typeof Object.assign(2))	// object
	console.log(typeof Object.assign('2'))  // object
}

{
	const v1 = 'abc'
	const v2 = true
	const v3 = 10
	const obj = Object.assign({}, v1, v2, v3) 
	console.log(obj)  // { '0': 'a', '1': 'b', '2': 'c' }
	// 这是因为只有字符串的包装对象，会产生可枚举属性。
}

console.log('注意点')
console.log('(1) 浅拷贝')
// Object.assign方法实行的是浅拷贝，而不是深拷贝。也就是说，如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用。
{
	const obj1 = {a: {b: 1}}
	const obj2 = Object.assign({}, obj1)

	obj1.a.b = 2
	console.log(obj2.a.b)  // 2
}

console.log('（2）同名属性的替换')
{
	const target = { a: { b: 'c', d: 'e' } }
	const source = { a: { b: 'hello' } }
	Object.assign(target, source)
	// { a: { b: 'hello' } }
}

console.log('（3）数组的处理')
// Object.assign可以用来处理数组，但是会把数组视为对象
{	
	// Object.assign把数组视为属性名为 0、1、2 的对象
	var arr1 = [1, 2, 3]
	var arr2 = [4, 5]
	console.log(Object.assign(arr1, arr2)) // [ 4, 5, 3 ]
}

console.log('（4）取值函数的处理')
{
	const source = {
	  get foo() { return 1 }
	};
	const target = {};
	console.log( source)
	console.log(Object.assign(target, source)) //{ foo: 1 }
	// Object.assign不会复制这个取值函数，只会拿到值以后，将这个值复制过去。
}

console.log('常见用途')
console.log('（1）为对象添加属性')
{
	class Point {
	  constructor(x, y) {
	    Object.assign(this, {x, y});
	  }
	}
	// 将x属性和y属性添加到Point类的对象实例
}

console.log('（2）为对象添加方法')
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

console.log('（3）克隆对象')
{
	function clone(origin) {
		return Object.assign({}, origin)
	}

	// function clone(origin) {
	//   let originProto = Object.getPrototypeOf(origin);
	//   return Object.assign(Object.create(originProto), origin);
	// }
	const obj1 = {a: {b: 1}}
	const obj2 = clone(obj1)

	obj1.a.b = 2
	console.log(obj2.a.b)  // 2
}

console.log('可枚举性')
{
	let obj = { foo: 123 };
	console.log(Object.getOwnPropertyDescriptor(obj, 'foo'))
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


console.log('对象的扩展运算符')
{
	const [a, ...b] = [1, 2, 3]
	console.log(a)  // 1
	console.log(b)  // [2, 3]
}

console.log('对象的解构赋值')
console.log('对象的解构赋值需要转换为es5才能运行')
{
	let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
	console.log(x) // 1
	console.log(y) // 2
	console.log(z) // {a: 3, b: 4}
	
	// let { x, y, ...z } = null; // 运行时错误
	// let { x, y, ...z } = undefined; // 运行时错误
}
{
	let z = { a: 3, b: 4 };
	let n = { ...z };
	console.log(n) //{ a: 3, b: 4 }

	// 解构赋值必须是最后一个参数，否则会报错
	// let { ...x, y, z } = obj; // 句法错误
	// let { x, ...y, ...z } = obj; // 句法错误
}

{
	let o1 = { a: 1 };
	let o2 = { b: 2 };
	o2.__proto__ = o1;
	let { ...o3 } = o2;
	console.log(o1)  //{ b: 2 }
	console.log(o2)  //{ b: 2 }
	console.log(o3)  //{ b: 2 }
	console.log(o3.a) // undefined
}

{
	const o = Object.create({ x: 1, y: 2 });
	o.z = 3;
	let {x, ...{y, z}} = o
	console.log(x)  // 1
	console.log(y)  // 2
	console.log(z)  // 3
}