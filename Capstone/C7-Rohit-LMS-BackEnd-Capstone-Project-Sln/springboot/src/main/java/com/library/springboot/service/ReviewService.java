package com.library.springboot.service;

import com.library.springboot.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;


    public void deleteReview(String id){
        reviewRepository.deleteById(id);
    }

}
