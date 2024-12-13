package com.library.springboot.service;


import com.library.springboot.entity.CatalogueEntity;
import com.library.springboot.repository.CatalogueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CatalogueService {

    @Autowired
    private CatalogueRepository catalogueRepository;

    public List<CatalogueEntity> getAllCatalogues() {
        return catalogueRepository.findAll();
    }

    public CatalogueEntity addCatalogue(CatalogueEntity catalogueEntity) {
        return catalogueRepository.save(catalogueEntity);
    }

    public void deleteCatalogue(String id) {
        catalogueRepository.deleteById(id);
    }

    public CatalogueEntity updateCatalogue(String id, CatalogueEntity updateCatalogue){
        updateCatalogue.setId(id);
        return catalogueRepository.save(updateCatalogue);
    };

    public CatalogueEntity getCatalogueById(String id) {
        return catalogueRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Match not found with id: " + id));
    }

    public List<CatalogueEntity> seachCatalogues(String title){
        return catalogueRepository.findByNameContainingIgnoreCase(title);
    }


}
