{
	// 普通字符串
	let str = `yoko \n is girl`
	console.log(str)

	// 多行字符串
	let str2 = `yoko 
	 is girl`
	console.log(str2)

	// 字符串中嵌入变量
	let sex = 'gril'
	let str3 = `yoko is ${sex}`
	console.log(str3)
}

// 可以进行运算，以及引用对象属性。
{
	let [x, y] = [1, 2] 
	console.log(`${x} + ${y} = ${x+y}`)

	let obj = {x: 1, y: 2}
	console.log(`${obj.x + obj.y}`)

}

// 模板字符串之中还能调用函数。
{
	function fn () {
		return "hello"
	}
	console.log(`${fn()} yoko`)
}
// 如果大括号中的值不是字符串，将按照一般的规则转为字符串。比如，大括号中是一个对象，将默认调用对象的toString方法。

// 模板字符串甚至还能嵌套。
{
	const tmpl = addrs => `
	  <table>
	  ${addrs.map(addr => `
	    <tr><td>${addr.first}</td></tr>
	    <tr><td>${addr.last}</td></tr>
	  `).join('')}
	  </table>
	`;
	const data = [
	    { first: '<Jane>', last: 'Bond' },
	    { first: 'Lars', last: '<Croft>' },
	];


	console.log(tmpl(data));

	console.log(`abc is ${'abc'}`)
	var arr = ['abc', '111'].join('')
	console.log(arr)
}

// 该运算符主要用于函数调用。
{
	function add (x, y) {
		return x + y
	}
	const numbers = [4, 38]
	console.log(add(...numbers))
	function f (v, w, x, y, z) {
		console.log(v, w, x, y, z)
	}
	const args = [0, 1]
	f(1, ...args, 3, ...[3])
}

{
	[...[], 1]
// [1]
}