package com.library.springboot.controller;

import com.library.springboot.entity.MemberEntity;
import com.library.springboot.repository.MemberRepository;
import com.library.springboot.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/members")
@RestController
public class MemberController {

    @Autowired
    private MemberRepository memberRepository;
    private final MemberService memberService;

    public MemberController(MemberService memberService)
    {
        this.memberService=memberService;
    }

    @GetMapping
    public ResponseEntity<List<MemberEntity>> getAll(){
        List<MemberEntity> member = memberService.getAllMembers();
        return new ResponseEntity<>(member, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<MemberEntity> addMember(@RequestBody MemberEntity newMember) {
        MemberEntity createdMember = memberService.saveMember(newMember);
        return new ResponseEntity<>(createdMember, HttpStatus.CREATED);
    }

    @GetMapping("/count")
    public Long getTotalMembers(){
        return memberRepository.count();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMember(@PathVariable String id) {
        memberService.deleteMember(id);
        return ResponseEntity.noContent().build();
    }


}
