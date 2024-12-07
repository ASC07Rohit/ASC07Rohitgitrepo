package com.library.springboot.repository;


import com.library.springboot.entity.CatalogueEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CatalogueRepository extends JpaRepository<CatalogueEntity, String> {
    @Query(value = "SELECT * FROM new_catalogue WHERE LOWER(title) LIKE LOWER(CONCAT('%', :title, '%'))", nativeQuery = true)
    List<CatalogueEntity> findByNameContainingIgnoreCase(@Param("title") String title);
}
