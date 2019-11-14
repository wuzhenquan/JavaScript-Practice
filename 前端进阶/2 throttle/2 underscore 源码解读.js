// 上述代码实现了一个简单的节流函数，不过 underscore 实现了更高级的功能，即新增了两个功能

// 配置是否需要响应事件刚开始的那次回调（ leading 参数，false 时忽略）
// 配置是否需要响应事件结束后的那次回调（ trailing 参数，false 时忽略）
// 配置 { leading: false } 时，事件刚开始的那次回调不执行；配置 { trailing: false } 时，事件结束后的那次回调不执行，不过需要注意的是，这两者不能同时配置。

// 所以在 underscore 中的节流函数有 3 种调用方式，默认的（有头有尾），设置 { leading: false } 的，以及设置 { trailing: false } 的。上面说过实现 throttle 的方案有 2 种，一种是通过时间戳判断，另一种是通过定时器创建和销毁来控制。

// 第一种方案实现这 3 种调用方式存在一个问题，即事件停止触发时无法响应回调，所以 { trailing: true } 时无法生效。

// 第二种方案来实现也存在一个问题，因为定时器是延迟执行的，所以事件停止触发时必然会响应回调，所以 { trailing: false } 时无法生效。

// underscore 采用的方案是两种方案搭配使用来实现这个功能。

const throttle = function(func, wait, options) {
  var timeout, context, args, result;
  
  // 上一次执行回调的时间戳
  var previous = 0;
  
  // 无传入参数时，初始化 options 为空对象
  if (!options) options = {};

  var later = function() {
    // 当设置 { leading: false } 时
    // 每次触发回调函数后设置 previous 为 0
    // 不然为当前时间
    previous = options.leading === false ? 0 : _.now();
    
    // 防止内存泄漏，置为 null 便于后面根据 !timeout 设置新的 timeout
    timeout = null;
    
    // 执行函数
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  // 每次触发事件回调都执行这个函数
  // 函数内判断是否执行 func
  // func 才是我们业务层代码想要执行的函数
  var throttled = function() {
    
    // 记录当前时间
    var now = _.now();
    
    // 第一次执行时（此时 previous 为 0，之后为上一次时间戳）
    // 并且设置了 { leading: false }（表示第一次回调不执行）
    // 此时设置 previous 为当前值，表示刚执行过，本次就不执行了
    if (!previous && options.leading === false) previous = now;
    
    // 距离下次触发 func 还需要等待的时间
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    
    // 要么是到了间隔时间了，随即触发方法（remaining <= 0）
    // 要么是没有传入 {leading: false}，且第一次触发回调，即立即触发
    // 此时 previous 为 0，wait - (now - previous) 也满足 <= 0
    // 之后便会把 previous 值迅速置为 now
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        
        // clearTimeout(timeout) 并不会把 timeout 设为 null
        // 手动设置，便于后续判断
        timeout = null;
      }
      
      // 设置 previous 为当前时间
      previous = now;
      
      // 执行 func 函数
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      // 最后一次需要触发的情况
      // 如果已经存在一个定时器，则不会进入该 if 分支
      // 如果 {trailing: false}，即最后一次不需要触发了，也不会进入这个分支
      // 间隔 remaining milliseconds 后触发 later 方法
      timeout = setTimeout(later, remaining);
    }
    return result;
  };

  // 手动取消
  throttled.cancel = function() {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };

  // 执行 _.throttle 返回 throttled 函数
  return throttled;
};