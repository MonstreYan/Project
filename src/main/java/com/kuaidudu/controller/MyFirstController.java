package com.kuaidudu.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MyFirstController {

    @RequestMapping("test1")
    public String test1(){
        return "success";
    }
}
