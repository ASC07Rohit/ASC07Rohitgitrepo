package com.library.springboot.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "new_members")
public class MemberEntity {
    @Id
    @Column(name = "id")
    private String id;

    @Column(name = "name")
    private String name;

    @Column(name = "contact_number")
    private String contactNumber;

    @Column(name = "email")
    private String email;

    @Column(name = "member_ship_type")
    private String memberShipType;

    @Column(name = "registration_date")
    private String registrationDate;

    public MemberEntity(){

    }

    public MemberEntity(String id,String name,String contactNumber,String email,String memberShipType,String registrationDate){
        super();
        this.id = id;
        this.name=name;
        this.contactNumber=contactNumber;
        this.email=email;
        this.memberShipType=memberShipType;
        this.registrationDate=registrationDate;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMemberShipType() {
        return memberShipType;
    }

    public void setMemberShipType(String memberShipType) {
        this.memberShipType = memberShipType;
    }

    public String getRegistrationDate() {
        return registrationDate;
    }

    public void setRegistrationDate(String registrationDate) {
        this.registrationDate = registrationDate;
    }
}
