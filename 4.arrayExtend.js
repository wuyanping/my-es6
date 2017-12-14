// 1.扩展运算符 ...
// 扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。
{
	console.log(...[1, 2, 5])
	console.log(1, 2, 3)
}

// 该运算符主要用于函数调用。
{
	var add = function add(x, y) {
		return x + y;
	};
	var numbers = [4, 38];
	console.log(add(...numbers));

	var f = function f(v, w, x, y, z) {
		console.log(v, w, x, y, z);
	};
	var args = [0, 1];
	f(1, ...args, 3, 3)
}

{
	[...[], 1]
	// [1]
}

// 扩展运算符的应用
console.log('（1）复制数组')
{
	const a1 = [1, 2]
	const a2 = a1
	a2[0] = 2
	console.log(a2)  // [ 2, 2 ]
	console.log(a1)  // [ 2, 2 ]
	// a2并不是a1的克隆，而是指向同一份数据的另一个指针
	
}

// ES5 只能用变通方法来复制数组
{
	const a1 = [1, 2]
	const a2 = a1.concat()
	a2[0] = 2
	console.log(a2)  // [ 2, 2 ]
	console.log(a1)  // [ 1, 2 ]
}

// 扩展运算符提供了复制数组的简便写法。
{
	const a1 = [1, 2]
	// 方法1
	// const a2 = [...a1]
	// 写法二
	const [...a2] = a1
	console.log(a1)
	console.log(a2)
}

console.log('（2）合并数组')
{
	const more = [3, 4]
	console.log([1, 2].concat(more))
	console.log([1, 2, ...more])

	var arr1 = ['a', 'b'];
	var arr2 = ['c'];
	var arr3 = ['d', 'e'];
	console.log([...arr1, ...arr2,...arr3])

}

console.log('（3）与解构赋值结合')
{
	var list = [ 'a', 'b', 'c', 'd', 'e' ]
	// ES5
	// a = list[0], rest = list.slice(1)
	// ES6
	let [a, ...rest] = list
	// const [first, ...rest] = [1, 2, 3, 4, 5];
	// first // 1
	// rest  // [2, 3, 4, 5]

	// const [first, ...rest] = [];
	// first // undefined
	// rest  // []

	// const [first, ...rest] = ["foo"];
	// first  // "foo"
	// rest   // []
	// 如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。
}

console.log('（4）字符串')
{
	console.log([...'hello']) //[ 'h', 'e', 'l', 'l', 'o' ]
	console.log([...'hello'].length) // 5
}

console.log('（6）Map 和 Set 结构，Generator 函数')
{
	let map = new Map([
		[1, 'one'],
		[2, 'two'],
		[3, 'three']
	])
	console.log(map.keys())  // { 1, 2, 3 }
	let arr = [...map.keys()]
	console.log(arr) // [ 1, 2, 3 ]
}
