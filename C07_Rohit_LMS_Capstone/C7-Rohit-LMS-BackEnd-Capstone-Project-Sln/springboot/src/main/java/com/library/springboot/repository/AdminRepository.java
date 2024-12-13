package com.library.springboot.repository;

import com.library.springboot.entity.AdminEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface AdminRepository extends JpaRepository<AdminEntity, String> {

}
