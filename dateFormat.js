
/*日期格式*/
var thisDate = new Date();
document.writeln(thisDate.toString());
document.writeln("<br/>");
document.write(thisDate.getFullYear() + "-" + thisDate.getMonth() + "-" + thisDate.getDay());
document.writeln("&nbsp;");
document.writeln(thisDate.getHours() + ":" + thisDate.getMinutes() + ":" + thisDate.getSeconds() + "." + thisDate.getMilliseconds() );
