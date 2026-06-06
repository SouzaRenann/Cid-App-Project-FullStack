package com.cidapp.aep.controller;

import com.cidapp.aep.model.report.Authority;
import com.cidapp.aep.service.AuthorityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/authorities")
public class AuthorityController {

    @Autowired
    private AuthorityService service;

    @GetMapping
    public List<Authority> findAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public Authority findById(@PathVariable Long id) {
        return service.findById(id);
    }

    @PostMapping
    public Authority save(@RequestBody Authority authority) {
        return service.save(authority);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}