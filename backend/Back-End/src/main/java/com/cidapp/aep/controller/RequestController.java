package com.cidapp.aep.controller;

import com.cidapp.aep.model.request.Request;
import com.cidapp.aep.service.RequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/requests")
public class RequestController {

    @Autowired
    private RequestService service;

    @GetMapping
    public List<Request> findAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public Request findById(@PathVariable Long id) {
        return service.findById(id);
    }

    @PostMapping
    public Request save(@RequestBody Request request) {
        return service.save(request);
    }

    @GetMapping("/protocol/{protocol}")
    public Request findByProtocol(@PathVariable String protocol) {
        return service.findByProtocol(protocol);
    }

    @PatchMapping("/{id}/status")
    public Request updateStatus(
            @PathVariable Long id,
            @RequestBody Request request
    ) {
        return service.updateStatus(id, request.getStatus());
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}