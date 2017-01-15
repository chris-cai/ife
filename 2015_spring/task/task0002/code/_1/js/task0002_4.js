/**
 * Created by Chris Cai on 2016/12/7.
 */

var data = ['a', 'abandon', 'abdomen', 'abide', 'ability', 'able', 'abnormal', 'aboard', 'abolish', 'abound', 'about', 'above', 'fiction', 'field', 'fierce', 'fight', 'test2', 'test3'];

var list = $("#word-list");

window.onload = function(){
    addEvent($("#keyword"),'keyup',function(e){search.call(this,e);});

    delegateEvent(list,'li','mouseover',function(e){
        //清除上下键的选中
        var active = document.getElementsByClassName('active')?document.getElementsByClassName('active')[0]:undefined;
        if(active){
            active.className = '';
        }
        e.target.className = 'active';
    });
    delegateEvent(list,'li','mouseout',function(e){
        e.target.className = '';
    });
    delegateEvent(list,'li','click',function(e){
        var value = e.target.getAttribute('data-value');
        $("#keyword").value = value;
        //
        $("#word-list").innerHTML = '';
        $("#word-list").style.display = 'none';
    });

    /*
    list.addEventListener('mouseover',function(event){
        if(event.target.tagName.toLowerCase() === 'li'){
            console.log(event.target.getAttribute('data-value'));
            event.target.className = 'active';
        }
    });
    list.addEventListener('mouseout',function(event){
        if(event.target.tagName.toLowerCase() === 'li'){
            console.log(event.target.getAttribute('data-value'));
            event.target.className = '';
        }
    });
    */

}

function search(e){
    var active = document.getElementsByClassName('active')?document.getElementsByClassName('active')[0]:undefined;
    var li = document.getElementsByTagName('li')[0];

    console.log(active);
    console.log(e.keyCode);
    //enter
    if(e.keyCode === 13){
        if(active){
            $("#keyword").value = active.getAttribute('data-value');

        }
        //隐藏提示框
        $("#word-list").innerHTML = '';
        $("#word-list").style.display = 'none';
    //up
    }else if(e.keyCode === 38){
        if(active){
            var pre = active.previousSibling;
            if(pre){
                pre.className = 'active';
                active.className = '';
            }
        }

    }else if(e.keyCode === 40){
        if(active){
            var next = active.nextSibling;
            if(next){
                next.className = 'active';
                active.className = '';
            }
        }else{
            li.className = 'active';
        }

    }else{
        var keyword = trim($("#keyword").value);
        if(keyword === ''){
            $("#word-list").innerHTML = '';
            $("#word-list").style.display = 'none';
            return false;
        }
        var reg = new RegExp('^('+keyword+')(.*)$');
        console.log(reg);
        var wordArr = data.filter(function(item,index,array){
            return reg.test(item);
        });
        var str = '';
        for(var i=0,len=wordArr.length; i<len; i++){
            str += '<li data-value="'+wordArr[i]+'">'+wordArr[i].replace(reg,'<span>$1</span>$2')+'</li>';
        }
        $("#word-list").innerHTML = str;
        $("#word-list").style.display = 'block';
    }

}