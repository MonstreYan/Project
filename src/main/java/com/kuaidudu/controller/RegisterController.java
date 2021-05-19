package com.kuaidudu.controller;

import com.kuaidudu.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class RegisterController {
    @Autowired
    UserService userService;

    /**
     * 前往注册页面
     * @return
     **/

    @RequestMapping(value = "toRegister")
    public String toRegister(){
        return "registerByMobile";
    }

     /**
     * 跳转到注册成功页面
     * @return
     **/

    @RequestMapping(value = "toRegisterSuccess")
    public String toRegisterSuccess(){
        return "gerenzhongxin/index";
    }

     /**
     * 处理注册逻辑
     * @param userPhone 用户电话号码
     * @param password 用户密码
     * @param code 验证码
     * @return
     **/

    @RequestMapping(value = "registerHandle")
    public String registerHandle(@RequestParam("mobile") String userPhone, @RequestParam("password") String password,
                                 @RequestParam("repassword") String repassword, @RequestParam("mobile_verify") String code,
                                 Model model) {
        System.out.println(userPhone + password + code);
        // 检测验证码是否正确
        if ("abcde".equalsIgnoreCase(code)) {
            System.out.println("成功进入验证手机号");
            System.out.println(password + "  " + repassword);
            if (!password.equals(repassword)) {
                model.addAttribute("userPhone", userPhone);
                model.addAttribute("msg", "两次密码不一样，请重新输入");
                return "forward:/toRegister";
            } else {
                if (userService.existsUserPhone(userPhone)) {
                    // 不可用，跳回到注册页面
                    System.out.println("手机号已存在");
                    model.addAttribute("msg", "手机号已存在");
                    return "forward:/toRegister";
                } else {
                    // 手机号不存在，判断密码是否正确
                    // 将用户保存到数据库
                    userService.saveUser(userPhone, password);
                    // 跳转到注册成功页面
                    return "forward:/toRegisterSuccess";
                }
            }
        } else {
            model.addAttribute("msg", "验证码错误");
            return "forward:/toRegister";
        }
    }
}
