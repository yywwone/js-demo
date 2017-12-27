
// JavaScript Document
//定义全局变量
var img = new Array()
img[0]="images/1.jpg"
img[1]="images/2.jpg"
img[2]="images/3.jpg"
img[3]="images/4.jpg"
var a =new Array()
a[0]="1.jpg"
a[1]="2.jpg"
a[2]="3.jpg"
a[3]="4.jpg"
var NowFrame = 1;  //最先显示第一张图片
var MaxFrame = 4;	//一共五张图片
function show(d1)
{			
	var j=Math.floor(Math.random()*4+1)
	document.getElementById("Rotator").src=img[j-1]; 
	document.getElementById("Rotator").title=a[j-1]; 
}
setInterval('show()',5000);  //设置定时器，显示下一张图片
window.onload=show;   				 //页面加载时运行函数show()















































































