console.log('1. 基本用法')
// console.log("1.1 ------ ")
// {
// 	// let命令，用来声明变量,在代码块内有效
// 	let a = 10
// 	var b =1
// }
// // console.log(a)  // 报错
// console.log(b)

// console.log("1.2 ------ ")
// for (let i = 0; i < 10; i++) {

// }
// // i只在for循环体内有效
// console.log(i) // 报错

// console.log("1.3 ------ ")
// var a = []
// for (var i = 0; i < 10; i++) {
// 	a[i] = function () {
// 		console.log(i)
// 	}
// }
// a[6]() // 10i只在for循环体内有效，在循环体外引用就会报错。

// 1.4
// var a = []
// for (let i = 0; i < 10; i++) {
// 	a[i] = function () {
// 		console.log(i)
// 	}
// }
// a[6]()  // 6

// 1.5
// for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。
// for (let i = 0; i < 3; i++) {
//   let i = 'abc';
//   console.log(i);
// }

// abc
// abc
// abc


// 2. 不存在变量提升
// // var 的情况
// console.log(foo); // 输出undefined
// var foo = 2;

// // let 的情况
// console.log(bar); // 报错
// let bar = 2;

// 3. 暂时性死区
// 3.1
// var tmp = 123;

// if (true) {
//   tmp = 'abc'; // 报错
//   let tmp;
// }
 // 块级作用域内存在let命令, 它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。
 
 // 3.2
//  if (true) {
//   // TDZ开始
//   tmp = 'abc'; // ReferenceError
//   console.log(tmp); // ReferenceError

//   let tmp; // TDZ结束
//   console.log(tmp); // undefined

//   tmp = 123;
//   console.log(tmp); // 123
// }

// 上面代码中，在let命令声明变量tmp之前，都属于变量tmp的“死区”。

// function bar(x = y, y = 2) {
//   return [x, y];
// }
// bar(); // 报错

// 4.  不允许重复声明 
// 报错
// function func() {
//   let a = 10;
//   var a = 1;
// }

// 报错
// function func() {
//   let a = 10;
//   let a = 1;
// }

