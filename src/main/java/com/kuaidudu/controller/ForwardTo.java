package com.kuaidudu.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ForwardTo {

    @RequestMapping(value = "/toAboutContact")
    public String toAboutContact(){
        return "about_contact";
    }

    @RequestMapping(value = "/toAboutIndex")
    public String toAboutIndex(){
        return "about_index";
    }

    @RequestMapping(value = "/toAboutJoin")
    public String toAboutJoin(){
        return "about_join";
    }

    @RequestMapping(value = "/toDongtaiFwgg")
    public String toDongtaiFwgg(){
        return "dongtai_fwgg";
    }

    @RequestMapping(value = "/toDongtaiHyzx")
    public String toDongtaiHyzx(){
        return "dongtai_hyzx";
    }

    @RequestMapping(value = "/toDongtaiIndex")
    public String toDongtaiIndex(){
        return "dongtai_index";
    }

    @RequestMapping(value = "/toDongtaiXmz")
    public String toDongtaiXmz(){
        return "dongtai_xmz";
    }

    @RequestMapping(value = "/toFindPassword")
    public String toFindPassword(){
        return "findPassword";
    }

    @RequestMapping(value = "/toPersonalCenter")
    public String toPersonalCenter(){
        return "personal_center";
    }

    @RequestMapping(value = "/toService")
    public String toService(){
        return "service";
    }
}
