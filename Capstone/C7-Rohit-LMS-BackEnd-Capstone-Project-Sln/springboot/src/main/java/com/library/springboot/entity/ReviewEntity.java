package com.library.springboot.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "new_review")

public class ReviewEntity {
    @Id
    private String id;
    private String fullName;
    private String feedback;

    public ReviewEntity(){

    }

    public ReviewEntity(String id, String fullName, String feedback){
        super();
        this.id = id;
        this.fullName = fullName;
        this.feedback = feedback;
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getFeedback() {
        return feedback;
    }

    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }
}
