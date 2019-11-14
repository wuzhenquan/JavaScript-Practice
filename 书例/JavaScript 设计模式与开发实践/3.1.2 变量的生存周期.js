// 没达到期望的代码
var data = []
for(var i = 0; i < 3; i++){
	data[i] = function(){
		console.log(i)
	}
}
data[0]() // 3
data[1]() // 3
data[2]() // 3

// 解决方法 使用闭包
var data = []
for(var i = 0; i < 3; i++){
	(function(i){
		data[i] = function(){
			console.log(i)
		}
	})(i)
}
data[0]() // 3
data[1]() // 3
data[2]() // 3