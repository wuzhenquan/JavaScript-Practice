
/*URL分解*/
//设定一个带有参数的URL  如:    file:///E:/Documents%20and%20Settings/simon/%E6%A1%8C%E9%9D%A2/Untitled-1.html?aa=11&bb=cc

var a = document.getElementsByTagName('a')[0];
var url = a.href.split("?");
var param = url[1].split("&");
for(i = 0; i < param.length; i++){
    var val = param[i].split("=");
    document.write(val[0] + "=" + val[1]);
    document.write("<br/>");
}      
       
       
//网页加载进度窗口, 页面没有内容时刷的太快, 可以通过onload控制.
//var placeHolder2 = document.open('Untitled-2.html','test','width=300,height=300');
       