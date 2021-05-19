package com.kuaidudu.controller;

import com.kuaidudu.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class LoginController {
    @Autowired
    UserService userService;


    /**
     * 跳转到用户登录页面
     * @return
     **/

    @RequestMapping(value = "/toLogin")
    public String login(){
        return "login";
    }

     /**
     * 跳转到登录成功页面
     * @return
     **/

    @RequestMapping(value = "/toLoginSuccess")
    public String toLoginSuccess(){
        return "gerenzhongxin/index";
    }

    @RequestMapping(value = "loginHandler", method = RequestMethod.POST)
    public String loginSuccess(@RequestParam("userPhone") String userPhone, @RequestParam("password") String userPassword,
                               Model model){

        if (userService.existsUserPhone(userPhone)){
            // 验证密码是否正确
            if (userService.login(userPhone, userPassword)){
                return "forward:toLoginSuccess";
            }else{
                model.addAttribute("userPhone", userPhone);
                model.addAttribute("msg", "密码错误");
                return "forward:toLogin";
            }
        }else {
            // 手机号不存在，返回登录页面
            model.addAttribute("msg", "手机号不存在");
            return "forward:toLogin";
        }

    }
}
