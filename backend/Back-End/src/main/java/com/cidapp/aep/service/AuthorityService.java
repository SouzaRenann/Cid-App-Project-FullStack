package com.cidapp.aep.service;

import com.cidapp.aep.model.report.Authority;
import com.cidapp.aep.repository.AuthorityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthorityService {

    @Autowired
    private AuthorityRepository repository;

    public Authority save(Authority authority) {
        return repository.save(authority);
    }

    public List<Authority> findAll() {
        return repository.findAll();
    }

    public Authority findById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}