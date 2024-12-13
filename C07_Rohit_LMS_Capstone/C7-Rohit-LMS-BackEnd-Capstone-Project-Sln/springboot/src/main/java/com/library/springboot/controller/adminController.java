package com.library.springboot.controller;


import com.library.springboot.entity.AdminEntity;
import com.library.springboot.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:4200")

public class adminController {

    @Autowired
    private AdminService adminService;

    @GetMapping
    public List<AdminEntity> getAllAdmin(){
        return adminService.getAllAdmin();
    }

    @PostMapping
    public AdminEntity addAdmin(@RequestBody AdminEntity adminEntity){
        return adminService.addAdmin(adminEntity);
    }

    @DeleteMapping("/{id}")
    public void deleteAdmin(@PathVariable String id){
        adminService.deleteAdmin(id);
    }

}
