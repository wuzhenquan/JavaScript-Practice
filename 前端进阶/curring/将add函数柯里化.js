const add = (...args) => args.reduce((a, b) => a + b)

// 传入多个参数，执行 add 函数
add(1, 2) // 3

// 假设我们实现了一个 currying 函数，支持一次传入一个参数
let sum = currying(add)
// 封装第一个参数，方便重用
let addCurryOne = sum(1)
addCurryOne(2) // 3
addCurryOne(3) // 4