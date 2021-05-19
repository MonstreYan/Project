package com.kuaidudu.bean;

import java.util.ArrayList;
import java.util.List;

public class TechnicianExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public TechnicianExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andTechnicianIdIsNull() {
            addCriterion("technician_id is null");
            return (Criteria) this;
        }

        public Criteria andTechnicianIdIsNotNull() {
            addCriterion("technician_id is not null");
            return (Criteria) this;
        }

        public Criteria andTechnicianIdEqualTo(Integer value) {
            addCriterion("technician_id =", value, "technicianId");
            return (Criteria) this;
        }

        public Criteria andTechnicianIdNotEqualTo(Integer value) {
            addCriterion("technician_id <>", value, "technicianId");
            return (Criteria) this;
        }

        public Criteria andTechnicianIdGreaterThan(Integer value) {
            addCriterion("technician_id >", value, "technicianId");
            return (Criteria) this;
        }

        public Criteria andTechnicianIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("technician_id >=", value, "technicianId");
            return (Criteria) this;
        }

        public Criteria andTechnicianIdLessThan(Integer value) {
            addCriterion("technician_id <", value, "technicianId");
            return (Criteria) this;
        }

        public Criteria andTechnicianIdLessThanOrEqualTo(Integer value) {
            addCriterion("technician_id <=", value, "technicianId");
            return (Criteria) this;
        }

        public Criteria andTechnicianIdIn(List<Integer> values) {
            addCriterion("technician_id in", values, "technicianId");
            return (Criteria) this;
        }

        public Criteria andTechnicianIdNotIn(List<Integer> values) {
            addCriterion("technician_id not in", values, "technicianId");
            return (Criteria) this;
        }

        public Criteria andTechnicianIdBetween(Integer value1, Integer value2) {
            addCriterion("technician_id between", value1, value2, "technicianId");
            return (Criteria) this;
        }

        public Criteria andTechnicianIdNotBetween(Integer value1, Integer value2) {
            addCriterion("technician_id not between", value1, value2, "technicianId");
            return (Criteria) this;
        }

        public Criteria andTechnicianNameIsNull() {
            addCriterion("technician_name is null");
            return (Criteria) this;
        }

        public Criteria andTechnicianNameIsNotNull() {
            addCriterion("technician_name is not null");
            return (Criteria) this;
        }

        public Criteria andTechnicianNameEqualTo(String value) {
            addCriterion("technician_name =", value, "technicianName");
            return (Criteria) this;
        }

        public Criteria andTechnicianNameNotEqualTo(String value) {
            addCriterion("technician_name <>", value, "technicianName");
            return (Criteria) this;
        }

        public Criteria andTechnicianNameGreaterThan(String value) {
            addCriterion("technician_name >", value, "technicianName");
            return (Criteria) this;
        }

        public Criteria andTechnicianNameGreaterThanOrEqualTo(String value) {
            addCriterion("technician_name >=", value, "technicianName");
            return (Criteria) this;
        }

        public Criteria andTechnicianNameLessThan(String value) {
            addCriterion("technician_name <", value, "technicianName");
            return (Criteria) this;
        }

        public Criteria andTechnicianNameLessThanOrEqualTo(String value) {
            addCriterion("technician_name <=", value, "technicianName");
            return (Criteria) this;
        }

        public Criteria andTechnicianNameLike(String value) {
            addCriterion("technician_name like", value, "technicianName");
            return (Criteria) this;
        }

        public Criteria andTechnicianNameNotLike(String value) {
            addCriterion("technician_name not like", value, "technicianName");
            return (Criteria) this;
        }

        public Criteria andTechnicianNameIn(List<String> values) {
            addCriterion("technician_name in", values, "technicianName");
            return (Criteria) this;
        }

        public Criteria andTechnicianNameNotIn(List<String> values) {
            addCriterion("technician_name not in", values, "technicianName");
            return (Criteria) this;
        }

        public Criteria andTechnicianNameBetween(String value1, String value2) {
            addCriterion("technician_name between", value1, value2, "technicianName");
            return (Criteria) this;
        }

        public Criteria andTechnicianNameNotBetween(String value1, String value2) {
            addCriterion("technician_name not between", value1, value2, "technicianName");
            return (Criteria) this;
        }

        public Criteria andTechnicianAgeIsNull() {
            addCriterion("technician_age is null");
            return (Criteria) this;
        }

        public Criteria andTechnicianAgeIsNotNull() {
            addCriterion("technician_age is not null");
            return (Criteria) this;
        }

        public Criteria andTechnicianAgeEqualTo(Integer value) {
            addCriterion("technician_age =", value, "technicianAge");
            return (Criteria) this;
        }

        public Criteria andTechnicianAgeNotEqualTo(Integer value) {
            addCriterion("technician_age <>", value, "technicianAge");
            return (Criteria) this;
        }

        public Criteria andTechnicianAgeGreaterThan(Integer value) {
            addCriterion("technician_age >", value, "technicianAge");
            return (Criteria) this;
        }

        public Criteria andTechnicianAgeGreaterThanOrEqualTo(Integer value) {
            addCriterion("technician_age >=", value, "technicianAge");
            return (Criteria) this;
        }

        public Criteria andTechnicianAgeLessThan(Integer value) {
            addCriterion("technician_age <", value, "technicianAge");
            return (Criteria) this;
        }

        public Criteria andTechnicianAgeLessThanOrEqualTo(Integer value) {
            addCriterion("technician_age <=", value, "technicianAge");
            return (Criteria) this;
        }

        public Criteria andTechnicianAgeIn(List<Integer> values) {
            addCriterion("technician_age in", values, "technicianAge");
            return (Criteria) this;
        }

        public Criteria andTechnicianAgeNotIn(List<Integer> values) {
            addCriterion("technician_age not in", values, "technicianAge");
            return (Criteria) this;
        }

        public Criteria andTechnicianAgeBetween(Integer value1, Integer value2) {
            addCriterion("technician_age between", value1, value2, "technicianAge");
            return (Criteria) this;
        }

        public Criteria andTechnicianAgeNotBetween(Integer value1, Integer value2) {
            addCriterion("technician_age not between", value1, value2, "technicianAge");
            return (Criteria) this;
        }

        public Criteria andTechnicianSexIsNull() {
            addCriterion("technician_sex is null");
            return (Criteria) this;
        }

        public Criteria andTechnicianSexIsNotNull() {
            addCriterion("technician_sex is not null");
            return (Criteria) this;
        }

        public Criteria andTechnicianSexEqualTo(String value) {
            addCriterion("technician_sex =", value, "technicianSex");
            return (Criteria) this;
        }

        public Criteria andTechnicianSexNotEqualTo(String value) {
            addCriterion("technician_sex <>", value, "technicianSex");
            return (Criteria) this;
        }

        public Criteria andTechnicianSexGreaterThan(String value) {
            addCriterion("technician_sex >", value, "technicianSex");
            return (Criteria) this;
        }

        public Criteria andTechnicianSexGreaterThanOrEqualTo(String value) {
            addCriterion("technician_sex >=", value, "technicianSex");
            return (Criteria) this;
        }

        public Criteria andTechnicianSexLessThan(String value) {
            addCriterion("technician_sex <", value, "technicianSex");
            return (Criteria) this;
        }

        public Criteria andTechnicianSexLessThanOrEqualTo(String value) {
            addCriterion("technician_sex <=", value, "technicianSex");
            return (Criteria) this;
        }

        public Criteria andTechnicianSexLike(String value) {
            addCriterion("technician_sex like", value, "technicianSex");
            return (Criteria) this;
        }

        public Criteria andTechnicianSexNotLike(String value) {
            addCriterion("technician_sex not like", value, "technicianSex");
            return (Criteria) this;
        }

        public Criteria andTechnicianSexIn(List<String> values) {
            addCriterion("technician_sex in", values, "technicianSex");
            return (Criteria) this;
        }

        public Criteria andTechnicianSexNotIn(List<String> values) {
            addCriterion("technician_sex not in", values, "technicianSex");
            return (Criteria) this;
        }

        public Criteria andTechnicianSexBetween(String value1, String value2) {
            addCriterion("technician_sex between", value1, value2, "technicianSex");
            return (Criteria) this;
        }

        public Criteria andTechnicianSexNotBetween(String value1, String value2) {
            addCriterion("technician_sex not between", value1, value2, "technicianSex");
            return (Criteria) this;
        }

        public Criteria andTechnicianPhoneIsNull() {
            addCriterion("technician_phone is null");
            return (Criteria) this;
        }

        public Criteria andTechnicianPhoneIsNotNull() {
            addCriterion("technician_phone is not null");
            return (Criteria) this;
        }

        public Criteria andTechnicianPhoneEqualTo(String value) {
            addCriterion("technician_phone =", value, "technicianPhone");
            return (Criteria) this;
        }

        public Criteria andTechnicianPhoneNotEqualTo(String value) {
            addCriterion("technician_phone <>", value, "technicianPhone");
            return (Criteria) this;
        }

        public Criteria andTechnicianPhoneGreaterThan(String value) {
            addCriterion("technician_phone >", value, "technicianPhone");
            return (Criteria) this;
        }

        public Criteria andTechnicianPhoneGreaterThanOrEqualTo(String value) {
            addCriterion("technician_phone >=", value, "technicianPhone");
            return (Criteria) this;
        }

        public Criteria andTechnicianPhoneLessThan(String value) {
            addCriterion("technician_phone <", value, "technicianPhone");
            return (Criteria) this;
        }

        public Criteria andTechnicianPhoneLessThanOrEqualTo(String value) {
            addCriterion("technician_phone <=", value, "technicianPhone");
            return (Criteria) this;
        }

        public Criteria andTechnicianPhoneLike(String value) {
            addCriterion("technician_phone like", value, "technicianPhone");
            return (Criteria) this;
        }

        public Criteria andTechnicianPhoneNotLike(String value) {
            addCriterion("technician_phone not like", value, "technicianPhone");
            return (Criteria) this;
        }

        public Criteria andTechnicianPhoneIn(List<String> values) {
            addCriterion("technician_phone in", values, "technicianPhone");
            return (Criteria) this;
        }

        public Criteria andTechnicianPhoneNotIn(List<String> values) {
            addCriterion("technician_phone not in", values, "technicianPhone");
            return (Criteria) this;
        }

        public Criteria andTechnicianPhoneBetween(String value1, String value2) {
            addCriterion("technician_phone between", value1, value2, "technicianPhone");
            return (Criteria) this;
        }

        public Criteria andTechnicianPhoneNotBetween(String value1, String value2) {
            addCriterion("technician_phone not between", value1, value2, "technicianPhone");
            return (Criteria) this;
        }

        public Criteria andIdIsNull() {
            addCriterion("id is null");
            return (Criteria) this;
        }

        public Criteria andIdIsNotNull() {
            addCriterion("id is not null");
            return (Criteria) this;
        }

        public Criteria andIdEqualTo(String value) {
            addCriterion("id =", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotEqualTo(String value) {
            addCriterion("id <>", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThan(String value) {
            addCriterion("id >", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThanOrEqualTo(String value) {
            addCriterion("id >=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThan(String value) {
            addCriterion("id <", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThanOrEqualTo(String value) {
            addCriterion("id <=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLike(String value) {
            addCriterion("id like", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotLike(String value) {
            addCriterion("id not like", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdIn(List<String> values) {
            addCriterion("id in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotIn(List<String> values) {
            addCriterion("id not in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdBetween(String value1, String value2) {
            addCriterion("id between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotBetween(String value1, String value2) {
            addCriterion("id not between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andTechnicianAddrIsNull() {
            addCriterion("technician_addr is null");
            return (Criteria) this;
        }

        public Criteria andTechnicianAddrIsNotNull() {
            addCriterion("technician_addr is not null");
            return (Criteria) this;
        }

        public Criteria andTechnicianAddrEqualTo(String value) {
            addCriterion("technician_addr =", value, "technicianAddr");
            return (Criteria) this;
        }

        public Criteria andTechnicianAddrNotEqualTo(String value) {
            addCriterion("technician_addr <>", value, "technicianAddr");
            return (Criteria) this;
        }

        public Criteria andTechnicianAddrGreaterThan(String value) {
            addCriterion("technician_addr >", value, "technicianAddr");
            return (Criteria) this;
        }

        public Criteria andTechnicianAddrGreaterThanOrEqualTo(String value) {
            addCriterion("technician_addr >=", value, "technicianAddr");
            return (Criteria) this;
        }

        public Criteria andTechnicianAddrLessThan(String value) {
            addCriterion("technician_addr <", value, "technicianAddr");
            return (Criteria) this;
        }

        public Criteria andTechnicianAddrLessThanOrEqualTo(String value) {
            addCriterion("technician_addr <=", value, "technicianAddr");
            return (Criteria) this;
        }

        public Criteria andTechnicianAddrLike(String value) {
            addCriterion("technician_addr like", value, "technicianAddr");
            return (Criteria) this;
        }

        public Criteria andTechnicianAddrNotLike(String value) {
            addCriterion("technician_addr not like", value, "technicianAddr");
            return (Criteria) this;
        }

        public Criteria andTechnicianAddrIn(List<String> values) {
            addCriterion("technician_addr in", values, "technicianAddr");
            return (Criteria) this;
        }

        public Criteria andTechnicianAddrNotIn(List<String> values) {
            addCriterion("technician_addr not in", values, "technicianAddr");
            return (Criteria) this;
        }

        public Criteria andTechnicianAddrBetween(String value1, String value2) {
            addCriterion("technician_addr between", value1, value2, "technicianAddr");
            return (Criteria) this;
        }

        public Criteria andTechnicianAddrNotBetween(String value1, String value2) {
            addCriterion("technician_addr not between", value1, value2, "technicianAddr");
            return (Criteria) this;
        }

        public Criteria andTechnicianSkillIsNull() {
            addCriterion("technician_skill is null");
            return (Criteria) this;
        }

        public Criteria andTechnicianSkillIsNotNull() {
            addCriterion("technician_skill is not null");
            return (Criteria) this;
        }

        public Criteria andTechnicianSkillEqualTo(String value) {
            addCriterion("technician_skill =", value, "technicianSkill");
            return (Criteria) this;
        }

        public Criteria andTechnicianSkillNotEqualTo(String value) {
            addCriterion("technician_skill <>", value, "technicianSkill");
            return (Criteria) this;
        }

        public Criteria andTechnicianSkillGreaterThan(String value) {
            addCriterion("technician_skill >", value, "technicianSkill");
            return (Criteria) this;
        }

        public Criteria andTechnicianSkillGreaterThanOrEqualTo(String value) {
            addCriterion("technician_skill >=", value, "technicianSkill");
            return (Criteria) this;
        }

        public Criteria andTechnicianSkillLessThan(String value) {
            addCriterion("technician_skill <", value, "technicianSkill");
            return (Criteria) this;
        }

        public Criteria andTechnicianSkillLessThanOrEqualTo(String value) {
            addCriterion("technician_skill <=", value, "technicianSkill");
            return (Criteria) this;
        }

        public Criteria andTechnicianSkillLike(String value) {
            addCriterion("technician_skill like", value, "technicianSkill");
            return (Criteria) this;
        }

        public Criteria andTechnicianSkillNotLike(String value) {
            addCriterion("technician_skill not like", value, "technicianSkill");
            return (Criteria) this;
        }

        public Criteria andTechnicianSkillIn(List<String> values) {
            addCriterion("technician_skill in", values, "technicianSkill");
            return (Criteria) this;
        }

        public Criteria andTechnicianSkillNotIn(List<String> values) {
            addCriterion("technician_skill not in", values, "technicianSkill");
            return (Criteria) this;
        }

        public Criteria andTechnicianSkillBetween(String value1, String value2) {
            addCriterion("technician_skill between", value1, value2, "technicianSkill");
            return (Criteria) this;
        }

        public Criteria andTechnicianSkillNotBetween(String value1, String value2) {
            addCriterion("technician_skill not between", value1, value2, "technicianSkill");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}