package com.library.springboot.repository;


import com.library.springboot.entity.ReviewEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<ReviewEntity, String> {
}
