function currying(func, length) {
  // 第一次调用获取函数 func 参数的长度，后续调用获取 func 剩余参数的长度
  // 这里使用了 func.length 所以使用 currying 的函数不可以用函数参数默认值
  length = length || func.length
  // currying 包裹之后返回一个新函数，接收参数为 ...args
  return function(...args) {
    // 新函数接收的参数长度是否大于等于 func 剩余参数需要接收的长度
    if (args.length >= length) {
      // 够了，执行 func 函数，传入新函数的参数
      return func.apply(this, args)
    } else {
      // 不够，递归 currying 函数，新的 func 为 bind 返回的新函数（bind 绑定了 ...args 参数，未执行），新的 length 为 func 剩余参数的长度
      // 利用 bind 保存了参数
      return currying(func.bind(this, ...args), length - args.length)
      // 可以不用在递归 currying 的时候传入 length - args.length，因为 bind 返回的函数的 length 已经是 length - args.length 了
      // return currying(func.bind(this, ...args)) 
    }
  }
}

// Test
const func = currying(function(a, b, c) {
  console.log([a, b, c])
})

func('a', 'b', 'c') // ["a", "b", "c"]
func('a', 'b')('c') // ["a", "b", "c"]
func('a')('b')('c') // ["a", "b", "c"]
func('a')('b', 'c') // ["a", "b", "c"]
