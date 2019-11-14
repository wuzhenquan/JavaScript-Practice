// 缺点 增加了类的不透明性
var Singleton = function(name){
	this.name = name
	this.instance = null
}

Singleton.prototype.getName = function(){
	console.log(this.name)
}

Singleton.getInstance = function(name){
	if(!this.instance){
		this.instance = new Singleton(name)
	}
	return this.instance)
}