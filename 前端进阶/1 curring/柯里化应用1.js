// 取 id
var objects = [{ id: 1 }, { id: 2 }, { id: 3 }]
objects.map(o => o.id)
// 如果很多这样的数组都要取得话，总是要写函数 o => o.id，很麻烦
// 让我们来柯里化一下
var get = curry(function(property, object){ return object[property] })
objects.map(get('id')) // [1, 2, 3] map 里实际执行了这样的形式 get('id')(obj)
// 或者
var get = curry(function(property, object){ return object[property] })
var map = curry(function(fn, value){ return value.map(fn) })
var getIDs = map(get('id')) 
getIDs(objects) //= [1, 2, 3]
