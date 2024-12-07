package com.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public class EmployeeRepository extends JpaRepository<Employee,Integer> {

}
