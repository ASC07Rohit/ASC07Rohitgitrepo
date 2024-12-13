package com.library.springboot.service;


import com.library.springboot.entity.CirculationEntity;
import com.library.springboot.repository.CirculationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class CirculationService {
    @Autowired
    private CirculationRepository circulationRepository;

    public List<CirculationEntity> getAllCirculations() {
        return circulationRepository.findAll();
    }

    public Optional<CirculationEntity> getCirculationById(String id) {
        return circulationRepository.findById(id);
    }

    public CirculationEntity saveCirculation(CirculationEntity circulation) {
        return circulationRepository.save(circulation);
    }

    public Optional<CirculationEntity> updateReturnDate(String id, LocalDate returnDate) {
        Optional<CirculationEntity> circulation = circulationRepository.findById(id);
        if (circulation.isPresent()) {
            CirculationEntity circulationEntity = circulation.get();
            circulationEntity.setReturnDate(returnDate);
            circulationRepository.save(circulationEntity);
            return Optional.of(circulationEntity);
        }
        return Optional.empty();
    }

    public void deleteCirculation(String id) {
        circulationRepository.deleteById(id);
    }

}
