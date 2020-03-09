var CreateDiv = function(html){
	this.html = html
	this.init()
}
CreateDiv.prototype.init = function(){
	var div = documnet.createElement('div')
	div.innerHTML = this.html
	documnet.body.appendChild(div)
}

// 下面引入代理类
var ProxySingletonCreateDiv = (function(){
	var instance
	return function(html){
		if(!instance){
			instance = new CreateDiv(html)
		}
		return instance
	}
})()

var a = new ProxySingletonCreateDiv('div1')
var b = new ProxySingletonCreateDiv('div2')

console.log(a === b) // true