package com.library.springboot.service;


import com.library.springboot.entity.MemberEntity;
import com.library.springboot.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MemberService {

    @Autowired
    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository){
        this.memberRepository = memberRepository;
    }

    public List<MemberEntity> getAllMembers() {
        return memberRepository.findAll();
    }

    public Optional<MemberEntity> getMemberById(String id) {
        return memberRepository.findById(id);
    }

    public MemberEntity saveMember(MemberEntity member) {
        return memberRepository.save(member);
    }

    public void deleteMember(String id) {
        memberRepository.deleteById(id);
    }
}
