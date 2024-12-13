package com.library.springboot.controller;


import com.library.springboot.entity.ReviewEntity;
import com.library.springboot.repository.ReviewRepository;
import com.library.springboot.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/reviews")
@CrossOrigin(origins = "http://localhost:4200")

public class ReviewController {
    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private ReviewService reviewService;

    @GetMapping
    public List<ReviewEntity> getReviews() {
        return reviewRepository.findAll();
    }

    // Submit the review
    @PostMapping
    public ReviewEntity addReview(@RequestBody ReviewEntity review) {
        return reviewRepository.save(review);
    }

    @DeleteMapping("{id}")
    public void deleteReview(@PathVariable String id){
        reviewService.deleteReview(id);
    }
}
