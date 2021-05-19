package com.kuaidudu.dao;

import com.kuaidudu.bean.User;
import com.kuaidudu.bean.UserExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface UserMapper {
    long countByExample(User example);

    int deleteByExample(UserExample example);

    int insert(User record);

    int insertSelective(User record);

    List<User> selectByExample(UserExample example);

    int updateByExampleSelective(@Param("record") User record, @Param("example") UserExample example);

    int updateByExample(@Param("record") User record, @Param("example") UserExample example);

    User queryByPhone(@Param("userTel") String userPhone);

    User queryByPassword(@Param("userPassword") String userPassword);

    void insertByUserPhoneAndUserPassword(@Param("userTel")String userPhone, @Param("password")String password);

    User queryByPoneAndPassword(@Param("userTel") String userPhone, @Param("password") String password);
}