package com.library.springboot.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.time.LocalDate;

@Entity
@Table(name = "new_circulation")
public class CirculationEntity {


    @Id
    private String id;
    private String memberId;
    private String catalogueId;
    private LocalDate borrowDate;
    private LocalDate returnDate;

    public CirculationEntity(){

    }

    public CirculationEntity(String id, String memberId, String catalogueId, LocalDate borrowDate, LocalDate returnDate){
        super();
        this.id = id;
        this.memberId = memberId;
        this.catalogueId = catalogueId;
        this.borrowDate = borrowDate;
        this.returnDate = returnDate;
    }

    public String getId(){
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getMemberId(){
        return memberId;
    }

    public void setMemberId(String memberId) {
        this.memberId = memberId;
    }

    public String getCatalogueId() {
        return catalogueId;
    }

    public void setCatalogueId(String catalogueId) {
        this.catalogueId = catalogueId;
    }

    public LocalDate getBorrowDate() {
        return borrowDate;
    }

    public void setBorrowDate(LocalDate borrowDate) {
        this.borrowDate = borrowDate;
    }

    public LocalDate getReturnDate() {
        return returnDate;
    }

    public void setReturnDate(LocalDate returnDate) {
        this.returnDate = returnDate;
    }
}
