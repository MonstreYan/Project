package com.kuaidudu.dao;

import com.kuaidudu.bean.Technician;
import com.kuaidudu.bean.TechnicianExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TechnicianMapper {
    long countByExample(TechnicianExample example);

    int deleteByExample(TechnicianExample example);

    int deleteByPrimaryKey(Integer technicianId);

    int insert(Technician record);

    int insertSelective(Technician record);

    List<Technician> selectByExampleWithBLOBs(TechnicianExample example);

    List<Technician> selectByExample(TechnicianExample example);

    Technician selectByPrimaryKey(Integer technicianId);

    int updateByExampleSelective(@Param("record") Technician record, @Param("example") TechnicianExample example);

    int updateByExampleWithBLOBs(@Param("record") Technician record, @Param("example") TechnicianExample example);

    int updateByExample(@Param("record") Technician record, @Param("example") TechnicianExample example);

    int updateByPrimaryKeySelective(Technician record);

    int updateByPrimaryKeyWithBLOBs(Technician record);

    int updateByPrimaryKey(Technician record);
}