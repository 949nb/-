var app = {
	init:function(){
		console.log('页面初始化')
		this.bind()
		this.start()
	},
	bind:function(){
		console.log('绑定事件')
	},
	start:function(){
		console.log('开始代码')
		var _this = this
		this.getData(data){
			console.log(data)
			_this.render(data)
		}
	},
	getData:function(callback){
		console.log('获取数据')
	},
	render:function(data){
		console.log('渲染数据')
	}
}

app.init()





//使用构造函数，创建对象～
function People(){
	this.name = name
	this.age = age
}

People('hunger',3)//这里面执行的这个函数就是把name和age赋值给了window.

var obj1 = new People('hunger',3)	
var obj2 = new People('hanyu',2)
 

//用instenceof与操作符 判断一个对象的原型链中是否是某个类型的实例～





var app = {
	name : 'app',
	sayName : function(){
		console.log(this.name)
	}
}
app.sayName()//app

var obj = {
	name:'hunger'
}
app.sayName.bind(obj)()//'hunger' 如果遇到this 就将函数内部的this改成括号中的this

app.call(context,param1,param2)
app.apply(context,paramArray)
//改变了函数的this，为第一个参数。区别在于apply接受一个数组，call接受参数。

//函数节流
var clock;//先声明
$xx.on('scroll',function(){
	if(clock){
		clearTimeout(clock)
	}
	clock = setTimeout(()=>{},1000)
})//如果计时器不存在，就给计时器赋值，如果计时器存在 就清除计时器。



















