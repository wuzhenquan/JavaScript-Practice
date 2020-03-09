// 作用 负责在页面中创建唯一的 div 节点
var CreateDiv = (function(){
	var instance
	var CreateDiv = function(html){
		if(instance){
			return instance
		}
		this.html = html
		this.init()
		return instance = this
	}
	CreateDiv.prototype.init = function(){
		var div = document.createElement('div')
		div.innerHTML =  this.html
		document.body.appendChild(div)
		return CreateDiv
	}
})()

var a = new CreateDiv('div1')
var b = new CreateDiv('div2')
console.log(a === b) // true