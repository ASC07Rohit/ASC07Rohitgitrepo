package com.library.springboot.controller;


import com.library.springboot.entity.CatalogueEntity;
import com.library.springboot.repository.CatalogueRepository;
import com.library.springboot.service.CatalogueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/catalogue")
@CrossOrigin(origins = "http://localhost:4200")
public class CatalogueController {
    @Autowired
    private CatalogueService catalogueService;

    @Autowired
    private CatalogueRepository catalogueRepository;

    @GetMapping
    public List<CatalogueEntity> getAllCatalogues() {
        return catalogueService.getAllCatalogues();
    }

    // Endpoint to add a new catalogue
    @PostMapping
    public CatalogueEntity addCatalogue(@RequestBody CatalogueEntity catalogueEntity) {
        return catalogueService.addCatalogue(catalogueEntity);
    }

    @GetMapping("/count")
    public Long getTotalCatalogues() {
        return catalogueRepository.count();
    }

    @DeleteMapping("{id}")
    public void deleteCatalogue(@PathVariable String id) {
        catalogueService.deleteCatalogue(id);
    }

    @PutMapping("{id}")
    public CatalogueEntity updateCatalogue(@PathVariable String id, @RequestBody CatalogueEntity updateCatalogue){
        return catalogueService.updateCatalogue(id, updateCatalogue);
    }

    @GetMapping("{id}")
    public  CatalogueEntity getCatalogueById(@PathVariable String id){
        return  catalogueService.getCatalogueById(id);
    }

    @GetMapping("/search")
    public List<CatalogueEntity> searchCatalogues(@RequestParam String title){
        return catalogueService.seachCatalogues(title);
    }

}
