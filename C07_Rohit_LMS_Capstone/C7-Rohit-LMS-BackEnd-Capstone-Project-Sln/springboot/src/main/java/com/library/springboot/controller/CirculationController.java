package com.library.springboot.controller;


import com.library.springboot.entity.CirculationEntity;
import com.library.springboot.repository.CirculationRepository;
import com.library.springboot.service.CirculationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("api/circulations")
@CrossOrigin(origins = "http://localhost:4200")

public class CirculationController {
    @Autowired
    private CirculationService circulationService;

    @Autowired
    private CirculationRepository circulationRepository;

    @GetMapping
    public List<CirculationEntity> getAllCirculations() {
        return circulationService.getAllCirculations();
    }

    @GetMapping("/{id}")
    public ResponseEntity<CirculationEntity> getCirculationById(@PathVariable String id) {
        return circulationService.getCirculationById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public CirculationEntity addCirculation(@RequestBody CirculationEntity circulation) {
        return circulationService.saveCirculation(circulation);
    }

    @PutMapping()
    public CirculationEntity updateReturnDate( @RequestBody CirculationEntity circulationEntity) {
        return circulationService.saveCirculation(circulationEntity);
    }

    @GetMapping("/count")
    public Long getTotalCirculations(){
        return circulationRepository.count();
    }

    @GetMapping("/borrowed-book")
    public Long getTotalBorrowedBook(){
        return circulationRepository.countBorrowedBooks();
    }

    @GetMapping("/returned-book")
    public Long getTotalReturnedBook(){
        return circulationRepository.countReturnedBooks();
    }

    @DeleteMapping("{id}")
    public void deleteCirculation(@PathVariable String id){
        circulationService.deleteCirculation(id);
    }
}
