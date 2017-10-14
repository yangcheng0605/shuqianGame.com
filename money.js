
/*         第一层 进度条          */
function first(){
    var i=0;
    let time;
    time=setInterval(function loop(){
        $('#progress').text(i+"%");
        i+=parseInt(Math.random()*10);
        if(i>100){
            clearInterval(time);
            $('#progress').text(100+"%");
            $('#first').css("display","none");
        }
    },100);
}
/*            第二层 点击事件            */

/*     开始游戏  弹出填写信息    */
var hammer=new Hammer(start);
hammer.on("tap",function(){
    $('#information').css("display","block");
})

var close=document.getElementsByClassName('close');

/*     数钱榜信息    */
var hammer3=new Hammer(ranking);
hammer3.on("tap",function(){
    $('#rankingList').css("display","block");
})

/*     活动规则    */
var hammer5=new Hammer(rule);
hammer5.on("tap",function(){
    $('#activeRule').css("display","block");
})

/*     活动奖品    */
var hammer7=new Hammer(prize);
hammer7.on("tap",function(){
    $('#activePrize').css("display","block");
})

/*     奖券使用说明    */
var hammer9=new Hammer(shiyong);
hammer9.on("tap",function(){
    $('#activeShiyong').css("display","block");
})

/*     所有的关闭按钮功能     */
var str="hammer";
for(var j=0;j<=5;j++){
    var str2=(str+2*j)
    console.log(str2);
    var close=document.getElementsByClassName('close');
    for(var i=0;i<close.length;i++){
        str2= new Hammer(close[i]);
        str2.on("tap",function(){
            $('#information').css("display","none");
            $('#rankingList').css("display","none");
            $('#activeRule').css("display","none");
            $('#activePrize').css("display","none");
            $('#activeShiyong').css("display","none");
        })
    }
}




/*       提交成功  进入游戏页面          */
var hammer11=new Hammer(start2);
hammer11.on("tap",function(){
    $('#information').css("display","none");
    $('#second').css("display","none");
    $('#third').css("display","block");
})

/*         第三层 轮播图           */
var j=0;
setTimeout(function loop(){
    var arr=["images/p2_txt1.png","images/p2_txt2.png","images/p2_txt3.png"];
    $('#img').attr("src",arr[j]);
    j++;
    if(j==3){
        j=0;
    }
    setTimeout(loop,2000)
},1000)




/*         第三层 点钞           */
var hammer13=new Hammer(qian);
/*启动pan*/
hammer13.get('pan').set({ direction: Hammer.DIRECTION_ALL });
/*定义变量*/
var time,num;
var g=0,s=0,b=0,z=60;
hammer13.on("panend",function(e){

/*   记录  个 十  百 */
    g++;
    if(g>=10){
        s++;
        g=0;
        if(s>=10){
            b++;
            s=0;
        }
    }
    $('#source1').find('p').text(b);
    $('#source2').find('p').text(s);
    $('#source3').find('p').text(g);

/*         第三层 计时           */
    if( $('#shizhon').find('p').text()<1 ||  $('#shizhon').find('p').text()>60){
        time=setTimeout(function loop(){
            $('#shizhon').find('p').text(z);
            z--;
            // if(z<=0){
            //     z=0;
            //     clearInterval(time);
            //     setTimeout(function(){
            //         $('#third').css("display","none");
            //         $('#fourth').css("display","block");
            //         /*      将分数填入第四层     */
            //         $('#fillIn').text("￥"+b+s+g);
            //     },3000)
            // }
            setTimeout(loop,1000)
        },0)
    }


/*      点钞效果     */
    var third=document.getElementById('third')
    var img = document.querySelector('qian');
    var newImg = document.createElement("img");
    newImg.src = "images/p2_qian.jpg";
    newImg.className = "qian qian2";
    newImg.addEventListener("animationend", function (){
        third.removeChild(newImg);
    })
    third.appendChild(newImg);
});

/*                 第四层               */

/*    share   */
var  hammer14=new Hammer(share);
hammer14.on("tap",function(){
    $('#shareEnd').css("display","block");
});
var  hammer15=new Hammer(shareEnd);
hammer15.on("tap",function(){
    $('#shareEnd').css("display","none");
});

var  hammer16=new Hammer(startAgain);
hammer16.on("tap",function(){
    window.location.reload();
});