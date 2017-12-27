
// JavaScript Document
//定义全局变量
var title = new Array();
title[0]="1.店庆第一波 限时抢购 一日三疯！";
title[1]="2.十年店庆均价场 39/99/169专场！";
title[2]="3.全场69折封顶 享当当的超值低价！";
title[3]="4.店庆巨献 海量图书69折封顶";
title[4]="5.十年店庆 名家跨界祝贺 珍藏签名本专区";
title[5]="5.十年店庆 名家跨界祝贺 珍藏签名本专区";
title[6]="5.十年店庆 名家跨界祝贺 珍藏签名本专区";
var img = new Array()
img[0]="images/1.png"
img[1]="images/2.png"
img[2]="images/3.png"
img[3]="images/4.png"
img[4]="images/5.png"
img[5]="images/6.png"
img[6]="images/7.png"
var NowFrame = 1;  //最先显示第一张图片
var MaxFrame = 7;	//一共五张图片
var theTimer;
var yTime;
function show(d1)
{
	if(Number(d1))
		{
			
			NowFrame=d1;			  //设当前现实图片
		}
	for(var i=1;i<(MaxFrame+1);i++)
		{
			if(i==NowFrame)
				{
					document.getElementById("Rotator").src=img[i-1];          
					document.getElementById("fig_"+i).innerHTML=title[i-1];				
					document.getElementById("fig_"+i).className="numberOver"			
				}
			else
				{
					document.getElementById("fig_"+i).innerHTML=i;
					document.getElementById("fig_"+i).className="number";
				}
			
		}
	if(NowFrame == MaxFrame)    	//设置下一个显示的图片
		{
			NowFrame=1;
		}
	else
		{
			NowFrame++;
		}
}
theTimer=setInterval('show()',2000);  //设置定时器，显示下一张图片
window.onload=show;   				 //页面加载时运行函数show()















































































