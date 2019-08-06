// 简化写法
function currying(func) { // 将被转换的函数作为参数
  const args = [] // 闭包保存参数的变量
  return function result(...rest) {
      if (rest.length === 0) { // 如果执行了的函数里没有参数，执行被柯里化的函数
        return func(...args)
      } else { // 如果执行了的函数里有参数，保存参数并返回
        args.push(...rest)
        return result
      }
  }
}
// 哪些功能还不满足
// - 柯里化后只能 addCurryOne(1)(2)() 这样搞，不够灵活