/**
 * Created by Chris Cai on 2016/12/6.
 */

window.onload = function(){
    var btn = $("#add-hobby");
    addEvent(btn,'click',function(){
        var hobby = $("#hobby").value;
        hobby = trim(hobby);
        hobby = hobby.split(/\n|\s+|,|，|;|；|、/);
        var hobbyArray = deleteEmptyArr(uniqArray1(hobby));
        if(hobbyArray.length > 10 || hobbyArray.length === 0){
            $("#list").style.display = 'none';
            $("#error-msg").innerHTML = '爱好不能太多也不能为空';
            $("#error-msg").style.display = 'block';
        }else{
            $("#error-msg").style.display = 'none';
            var str = '';
            for(var i=0,len=hobbyArray.length; i<len; i++){
                if(i!==0){
                    str += '<br>';
                }
                str += '<input type="checkbox"><label>'+hobbyArray[i]+'</label>';
            }
            $("#list").innerHTML = str;
            $("#list").style.display = 'block';
        }
    });
}
/*
 第一阶段

 在页面中，有一个单行输入框，一个按钮，输入框中用来输入用户的兴趣爱好，允许用户用半角逗号来作为不同爱好的分隔。

 当点击按钮时，把用户输入的兴趣爱好，按照上面所说的分隔符分开后保存到一个数组，过滤掉空的、重复的爱好，在按钮下方创建一个段落显示处理后的爱好。

 第二阶段

 单行变成多行输入框，一个按钮，输入框中用来输入用户的兴趣爱好，允许用户用换行、空格（全角/半角）、逗号（全角/半角）、顿号、分号来作为不同爱好的分隔。

 当点击按钮时的行为同上

 第三阶段

 用户输入的爱好数量不能超过10个，也不能什么都不输入。当发生异常时，在按钮上方显示一段红色的错误提示文字，并且不继续执行后面的行为；当输入正确时，提示文字消失。

 同时，当点击按钮时，不再是输出到一个段落，而是每一个爱好输出成为一个checkbox，爱好内容作为checkbox的label。
 */