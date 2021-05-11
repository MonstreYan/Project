/*
    处理 短信 验证码 倒计时处理
 */

var _mobile_verify = {
    data:{}
}


/**
 * 字段检查 --当前只做空检查
 * @param $id : 要检查 input 的id值
 * @param $type : 要检查的 类型
 * @param $error_str ： 错误提示
 */
function verify_str_value($id,$type,$error_str){
    var self = $('#'+$id),
        $val = self.val(),
        $error = false;
    $type = 'required';
    switch ($type){
        case 'required':
            if(!$val){
                $error = true;
            }
            break;
        default:
            break;
    }
    if($error){
        alert($error_str);
        self.focus();
        return false;
    }
    return true;
}

/**
 * 异步获取发送信息
 * @param $url : 要发送的地址信息
 * @param $data : 要发送的数据
 * @param $time : 覆盖时间
 * @param $place ： 要覆盖的地方
 *
 *      1、 将要覆盖的地方覆盖掉，同时计时开始
 *      2、 发送数据
 */
function get_verify_now($url,$data,$time,$place){

    var $cover_place = $('#'+$place),
        $time = $time?$time:30;
        $html = "<div id='time_go'class='last_go_verify'>" +
            "<span class='_verify_time'>"+$time+"</span>" +
            "</div>";

    $cover_place.parent().css('position','relative');
    $cover_place.parent().prepend($html);
    //倒计时开始
    setCookie('user_verify_time',$time-1,$time);
    $time_int = setInterval("time_go('time_go')",1000);
    setCookie('user_phone',$data.mobile);
    //检查 验证码是否 正确 ，错误则 将时间改为 10s ，正确则直接请求 发送函数
    $.get($url,$data,function(data){
        if(0 === data.status){
            $('#user_img_verify').click();
            alert(data.info);
            setCookie('user_verify_time',10,20);
        }else{
            //$('#user_img_verify').click(); 暂时不更新验证码
            alert(data.info);
        }
    });

    return;
    //获取当前的 email 地址
    var $email = $('#time_go_email').children('input:first').val();
    if(!$email){
        alert('请填写 email');
        $('#time_go_email').children('input:first').prev('input').focus();
    }else{
        $('#time_go_email').children('input:last').remove(); //删除 提交按钮
        // 修改 当前的 内容
        var $str = '<div id="time_go" class="last_go_verify">30</div>';
        $('#time_go_email').append($str);
        //给 div 加上 倒计时
        setCookie('email_time',29,30);
        $time_int = setInterval("time_go('time_go')",1000);
        //time_go('time_go',30);
        //提交数据，让后台发送邮件
        $.ajax({
            type:'post',
            url:$CHAGNE_PASS,
            data:'eamil='+$email,
            success:function(msg){
                console.log(msg);
                if(msg == 1){
                    alert('发送成功!');
                }
            },
        });
    }
}

/**
 * 检查 当前是否 仍然在倒计时
 */
function check_verify_now($place){
    var $now_time = getCookie('user_verify_time'),
        $cover_place = $('#'+$place),
        $html = "<div id='time_go' class='last_go_verify'>" +
            "<span class='_verify_time'>"+$now_time+"</span>" +
            "</div>";

    if($now_time > 0){
        $cover_place.parent().css('position','relative');
        $cover_place.parent().prepend($html);
        $time_int = setInterval("time_go('time_go')",1000);
    }
}

/**
 * 时间 一秒 一秒的 走，倒计时方式
 * @param $where : 倒计时 在 什么地方显示
 */
function time_go($place){
    var time = getCookie('user_verify_time');
    var str = '<span class="_verify_time">'+time+'</span>';
    $('#'+$place).html(str);
    if(time > 0){
        setCookie('user_verify_time',(time-1));
    }else{
        clearInterval($time_int);
        clearCoverVerify($place);
    }
}

/**
 * 移除 覆盖层
 * @param $place
 */
function clearCoverVerify($place){
    var self = $('#'+$place);
    self.remove();
    self.parent().css('position','none');
}

// 下面是 获取 设置 cookie和获取 cookie
function setCookie(c_name,value,expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate()+expiredays);
    document.cookie=c_name+ "=" +escape(value)+((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
}
function getCookie(name) {
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}
/**
 * 异步获取发送信息
 * @param $url : 要发送的地址信息
 * @param $data : 要发送的数据
 * @param $time : 覆盖时间
 * @param $place ： 要覆盖的地方
 *
 *      1、 将要覆盖的地方覆盖掉，同时计时开始
 *      2、 发送数据
 */
function right_widget_get_verify($url,$data,$time,$place){

    var $cover_place = $('#'+$place),
        $time = $time?$time:30;
        $html = "<div id='time_go' class='last_go_verify'>" +
        "<span class='_verify_time'>"+$time+"</span>" +
        "</div>";
    $cover_place.parent().css('position','relative');
    $cover_place.parent().prepend($html);
    //倒计时开始
    setCookie('user_verify_time',$time-1,$time);
    $time_int = setInterval("time_go('time_go')",1000);
    setCookie('user_phone',$data.mobile);
    //检查 验证码是否 正确 ，错误则 将时间改为 10s ，正确则直接请求 发送函数
    $.get($url,$data,function(data){
        if(0 === data.status){
            $('#user_img_verify').click();
            alert(data.info);
            setCookie('user_verify_time',10,20);
        }else{
            //$('#user_img_verify').click(); 暂时不更新验证码
            alert(data.info);
        }
    });
}