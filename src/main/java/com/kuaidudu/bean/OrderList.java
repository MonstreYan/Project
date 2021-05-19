package com.kuaidudu.bean;

public class OrderList {
    private Integer orderId;

    private Integer auntId;

    private Integer userId;

    private Integer homemakeId;

    private String orderFinish;

    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    public Integer getAuntId() {
        return auntId;
    }

    public void setAuntId(Integer auntId) {
        this.auntId = auntId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getHomemakeId() {
        return homemakeId;
    }

    public void setHomemakeId(Integer homemakeId) {
        this.homemakeId = homemakeId;
    }

    public String getOrderFinish() {
        return orderFinish;
    }

    public void setOrderFinish(String orderFinish) {
        this.orderFinish = orderFinish == null ? null : orderFinish.trim();
    }
}