package com.kuaidudu.service;

import com.kuaidudu.bean.User;
import com.kuaidudu.dao.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserMapper userMapper;

    /**
     * 判断是否有该用户
     * @param userPhone 用户号码
     * @return 返回true则表示找到该用户
     */

    public boolean existsUserPhone(String userPhone){
        System.out.println(userPhone);

        if(userMapper.queryByPhone(userPhone) == null){
            return false;
        }


        return true;
    }


    /**
     * 判断该用户密码是否正确
     * @param userPassword 用户密码
     * @return 返回true表示用户密码正确
     */

    public boolean existsUserPassword(String userPassword){

        if (userMapper.queryByPassword(userPassword) == null){
            return false;
        }

        return true;
    }


    /**
     * 通过用户手机号和用户密码保存用户
     * @param userPhone
     * @param password
     */

    public void saveUser(String userPhone, String password){
        userMapper.insertByUserPhoneAndUserPassword(userPhone,password);
    }


    /**
     * 登录
     * @param userPhone 手机号
     * @param password 手机密码
     * @return 返回true表示登录成功
     */

    public boolean login(String userPhone, String password){

        if (userMapper.queryByPoneAndPassword(userPhone, password) == null){
            return false;
        }

        return true;
    }
}

