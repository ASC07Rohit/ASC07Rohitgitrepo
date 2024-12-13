package com.library.springboot.repository;

import com.library.springboot.entity.CirculationEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CirculationRepository extends JpaRepository<CirculationEntity, String> {
    @Query("SELECT COUNT(c) FROM CirculationEntity c WHERE c.returnDate IS NULL")
    long countBorrowedBooks();

    @Query("SELECT COUNT(c) FROM CirculationEntity c WHERE c.returnDate IS NOT NULL")
    long countReturnedBooks();
}