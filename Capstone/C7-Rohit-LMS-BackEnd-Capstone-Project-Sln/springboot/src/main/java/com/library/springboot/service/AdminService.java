package com.library.springboot.service;

import com.library.springboot.entity.AdminEntity;
import com.library.springboot.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;


    public List<AdminEntity> getAllAdmin(){
        return adminRepository.findAll();
    }

    public AdminEntity addAdmin(AdminEntity adminEntity){
        return adminRepository.save(adminEntity);
    }

    public void deleteAdmin(String id){
        adminRepository.deleteById(id);
    }
}
