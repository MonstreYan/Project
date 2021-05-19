<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="utf-8"%>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
    <title>注册 ----- 快嘟嘟家政官网</title>

    <!---->
    <link href="../static/css/User_style.css" rel="stylesheet">
    <script src="../static/js/User_jquery-1.11.1.js"></script>
    <script src="../static/js/User_jquery.raty.js"></script>
    <script src="../static/js/User_linkActive.js"></script>
    <script src="../static/js/User_common.js"></script>


    <!-- /内容区 -->
    <script type="text/javascript">
        (function(){
            var ThinkPHP = window.Think = {
                "ROOT"   : "", //当前网站地址
                "APP"    : "", //当前项目地址
                "PUBLIC" : "/Public", //项目公共目录地址
                "DEEP"   : "/", //PATHINFO分割符
                "MODEL"  : ["2", "", "html"],
                "VAR"    : ["m", "c", "a"]
            }
        })();
    </script>
    <script type="text/javascript" src="../static/js/User_static_think.js"></script>

    <style>
        span._verify_time{
            color:#fff;font-weight: bold;display: inline-block;height: 100%;font-size: 18px;line-height: 50px;
        }

        .last_go_verify{
            position: absolute;width:100%;height:100%;background:#cfcfcf;z-index: 2;
        }
        div.div-input{
            background-color: #e8776c;
            color: #fff;
            cursor: pointer;
            height: 50px;
            margin-left: 22px;
            width: 200px;
            display: inline-block;
        }
    </style>
</head>
<body>
<div class="login-register-page">
    <div class="logoregister">
        <div class="logoregister-info">
            <div class="logoregister-single">
                <div class="logoregister-logo"><img src="../static/images/logo-login_03.png" /> </div>
                <div class="logoregister-form">

                    <form action="registerHandle" method="post" class="login-form" >
                        <%-- <label>
                        <input type="text" placeholder="请您输入用户名称" name="username" class="input-text" required />
                    </label>--%>
                        <span class="errorPage">${msg}</span>
                        <label>
                            <input type="text" placeholder="请您输入手机号码" name="mobile"
                                   required id="mobile" class="input-text" value="${userPhone==null?"":userPhone}">
                        </label>
                        <label>
                            <input type="password" placeholder="请您输入密码" name="password" class="input-text" required />
                        </label>
                        <label>
                            <input type="password" placeholder="重复输入密码" name="repassword" class="input-text" required />
                        </label>
                        <!--<label>-->
                        <!--<input type="text" placeholder="请您输入电子邮箱" name="email" class="input-text" required />-->
                        <!--</label>-->

                        <label>
                            <input type="text" placeholder="短信验证码" name="mobile_verify" required="required" class="input-text1">
                            <%--<div class="input-submit div-input">
                            <input type="button" style="margin-left:0px;" class="input-submit jQ-send-mobile-code" id="mobile_verify" value="单击发送验证码">
                        </div>--%>
                        </label>

                        <input type="hidden" name="share_id" value="0" />

                        <label>
                            <input type="submit" class="input-submit1" value="注 册">
                        </label>
                    </form>
                </div>
                <div class="logoregister-black">
                    <p><a href="../../index.jsp">返回首页</a> 去<a href="toLogin">登录</a></p>
                    <p>使用有问题？<a href="idea.jsp">意见反馈</a></p>
                </div>
            </div>
        </div>
        <div class="logoregister-bottom"><img src="../static/images/login-bottom-bg_03.png" /> </div>
    </div>
</div>
<script>
    $(function(){
        var $window = $(window),
            Ww = $window.width(),
            Wh = $window.height();
        $window.load(function(){
            var login_register = $(".login-register-page"),
                logoregister = $(".logoregister"),
                logoregister_H = logoregister.height(),
                logoregister_W = logoregister.width();
            if(Ww>460){
                login_register.height(Wh);
            }
            else {
                login_register.height(logoregister_H+100)
            }
            logoregister.css({ marginTop: -logoregister_H/2,marginLeft: -logoregister_W/2})
        });
    })
</script>

<!--短信验证处理-->
<script src="../static/js/User_static_mobile_verify.js"></script>
<script>
    /* jQuery(function(){
         /!*验证码实效验证*!/
         check_verify_now('mobile_verify');
         /!* 获取手机验证码 *!/
         $('#mobile_verify').bind('click',function(e){
             var $phone     = $('#mobile').val();
             //验证字段
             if(!verify_str_value('mobile','','手机号码不能为空'))
                 return false;

             var $data = {'mobile':$phone} ;
             //发送信息了 30 s 限制
             get_verify_now("/Home/User/sendMobileVerify.jsp",$data,30,'mobile_verify');
             return false;
         });
     });
 */
    /*  //验证 手机号码
      $('#mobile').focusout(function(){
          if($('#mobile').val() == ''){
              alert('手机号码必填');
          }else{
              $.get("/Home/Public/mobileHaveRegister.jsp",{'mobile':$('#mobile').val()},function(data){
                  if(data.status == 0){
                      alert(data.info);
                  }
              });
          }
      });*/

    /* $(function () {
         // 给注册按钮绑定单击响应事件
         $(".input-submit1").click(function () {
             // 验证手机号是否合理
             // 获取输入框内容
             var phoneNum = $("#mobile").val();
             alert(phoneNum);
             // 创建正则表达式
             var phonePatt = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;

             // 使用test方法进行验证
             if(!phonePatt.test(phoneNum)){
                 // 提示用户结果
                 $("span.errorPage").text("手机号不正确");
                 return false;
             }
             $("span.errorPage").text("");
         })
     })
 */
</script>
</body>
</html>