/**
 * Created by Chris Cai on 2016/12/6.
 */

window.onload = function(){
    var btn = $("#count-down");
    addEvent(btn,'click',function(){
        var time = $("#time").value;
        if(time.length === 0){
            $("#list").style.display = 'none';
            $("#error-msg").innerHTML = '请输入未来的某一时间';
            $("#error-msg").style.display = 'block';
            return false;
        }
        if(!time.match(/^\d{4}-\d{2}-\d{2}$/)){
            $("#list").style.display = 'none';
            $("#error-msg").innerHTML = '请输入正确的时间格式';
            $("#error-msg").style.display = 'block';
            return false;
        }
        var timeArr = time.split('-');
        var date = new Date(time),
            today = new Date();
        var gap = date.getTime() - today.getTime();
        if(gap<=0){
            $("#list").style.display = 'none';
            $("#error-msg").innerHTML = '请输入未来的某一时间';
            $("#error-msg").style.display = 'block';
            return false;
        }
        gap = Math.floor(gap/1000)-8*60*60;

        var timer = setInterval(function(){
            //show data
            var day = Math.floor(gap / 3600 / 24);
            var hour = Math.floor(gap % (3600 * 24) / 3600);
            var minute = Math.floor(gap % (3600 * 24) % 3600 / 60);
            var second = Math.floor(gap % (3600 * 24) % 3600 % 60);
            //console.log(day + "  " + hour + "   " + minute + "   " + second);

            $("#list").innerHTML = "距离" + timeArr[0] + "年" + timeArr[1] + "月" + timeArr[2] + "日还有" + day + "天" + hour + "小时" + minute + "分" + second + "秒";
            $("#error-msg").style.display = 'none';
            $("#list").style.display = 'block';

            gap -= 1;
            if(gap<0){
                clearInterval(timer);
            }
        },1000);

    });


}