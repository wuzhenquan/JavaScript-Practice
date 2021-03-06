  
//Javascript对象
/*对象 
    属性可以在对象内定义,如name,age;也可以在对象外定义,如addr
    方法分两种方式定义,见say和ageAdd的定义
 */    
function Person(){
    this.name = 'aa';
    this.age = 12;
    this.say = sayPerson;
    this.ageAdd=function(){
        this.age++;
    }  
}      
function sayPerson(){
    alert(this.name + "," + this.age + "," + this.addr);    
}      
function newP(){
    var p = new Person();
    p.addr = "abcd";
    p.say();
    p.ageAdd();
    p.say();
}      
       
//对象2 简单的自定义对象 内部函数
function cHuman(){
    function sayHuman(attr){
        return human[attr];
    }  
    var human = new Object();
    human.userName = "abc";
    human.userAge = 12;
    alert(sayHuman("userAge"));
    alert(sayHuman("userName"));
}      
       
//对象3 
function Simon(){this.userName; this.userAge;}
//Simon.prototype.userName = "";
Simon.prototype.setUserName = function(userName){this.userName = userName;}
Simon.prototype.getUserName = function(){return this.userName;}
Simon.prototype.setUserAge = function(userAge){this.userAge = userAge;}
Simon.prototype.getUserAge = function(){return this.userAge;}
function cSimon(){
    var simon = new Simon();
    simon.setUserName("Simon hahah ");
    simon.setUserAge(22);
    alert(simon.getUserName() + "  " + simon.getUserAge());
    with(simon){//with的用法
        alert(getUserName() + ", " + getUserAge());
    }  
    var p, str = "";
    for(p in simon){
        str +=p + "\n";
    }  
    alert(str);
}      
       
//对象4 
function cObj(){
    function Obj(){this.userName = "aa"; this.userAge = 55;}
    var obj = new Obj();
    var p, str = "";
    for(p in obj){//for的用法
        str +=p + "=" + obj[p] + "\n";
    }  
    alert(str);
}      
       
//对象5 数组对象
function MyArr(){
    this.length = arguments.length;
    for(i = 0; i < this.length; i++){
        this[i] = arguments[i];
    }  
}      
function cMyArr(){
    var myArr = new MyArr("abc", 12, '你好', 3.5, true);
    var str = "";
    for(i = 0; i < myArr.length; i++){
        str += myArr[i] + ", ";
    }  
    alert(str);
       
    var p;
    str = "";
    for(p in myArr){
        str += p + "=" + myArr[p] + "\n";
    }  
    alert(str);
}      
       
//对象6 数组对象
function MyArr2(size){
    this.length = size;
    for(i = 0; i < this.length; i++){
        this[i] = "";
    }
}      
function cMyArr2(){
    var myArr2 = new MyArr2(6);

    myArr2[0] = "aa";
    myArr2[1] = 3;
    myArr2[2] = 'dfadfa';
    myArr2[3] = true;
    myArr2[5] = 0.4;        
    var p, str = "";
    for(p in myArr2){//for的用法
        str +=p + "=" + myArr2[p] + "\n";
    }
    alert(str);
}       