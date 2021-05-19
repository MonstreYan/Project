package com.kuaidudu.bean;

public class Technician {
    private Integer technicianId;

    private String technicianName;

    private Integer technicianAge;

    private String technicianSex;

    private String technicianPhone;

    private String id;

    private String technicianAddr;

    private String technicianSkill;

    private byte[] technicianPhoto;

    public Integer getTechnicianId() {
        return technicianId;
    }

    public void setTechnicianId(Integer technicianId) {
        this.technicianId = technicianId;
    }

    public String getTechnicianName() {
        return technicianName;
    }

    public void setTechnicianName(String technicianName) {
        this.technicianName = technicianName == null ? null : technicianName.trim();
    }

    public Integer getTechnicianAge() {
        return technicianAge;
    }

    public void setTechnicianAge(Integer technicianAge) {
        this.technicianAge = technicianAge;
    }

    public String getTechnicianSex() {
        return technicianSex;
    }

    public void setTechnicianSex(String technicianSex) {
        this.technicianSex = technicianSex == null ? null : technicianSex.trim();
    }

    public String getTechnicianPhone() {
        return technicianPhone;
    }

    public void setTechnicianPhone(String technicianPhone) {
        this.technicianPhone = technicianPhone == null ? null : technicianPhone.trim();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }

    public String getTechnicianAddr() {
        return technicianAddr;
    }

    public void setTechnicianAddr(String technicianAddr) {
        this.technicianAddr = technicianAddr == null ? null : technicianAddr.trim();
    }

    public String getTechnicianSkill() {
        return technicianSkill;
    }

    public void setTechnicianSkill(String technicianSkill) {
        this.technicianSkill = technicianSkill == null ? null : technicianSkill.trim();
    }

    public byte[] getTechnicianPhoto() {
        return technicianPhoto;
    }

    public void setTechnicianPhoto(byte[] technicianPhoto) {
        this.technicianPhoto = technicianPhoto;
    }
}