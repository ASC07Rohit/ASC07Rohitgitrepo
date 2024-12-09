package com.library.springboot.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "new_admin")

public class AdminEntity {
    @Id
    private String id;
    private String fullName;
    private String mobileNumber;
    private String email;
    private String password;

    public AdminEntity() {

    }

    public AdminEntity(String id, String fullName, String mobileNumber, String email, String password) {
        super();
        this.id = id;
        this.fullName = fullName;
        this.mobileNumber = mobileNumber;
        this.password = password;
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

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
