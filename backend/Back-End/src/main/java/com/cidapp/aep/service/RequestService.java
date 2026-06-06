package com.cidapp.aep.service;

import com.cidapp.aep.model.request.Request;
import com.cidapp.aep.model.request.Status;
import com.cidapp.aep.repository.RequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class RequestService {

    @Autowired
    private RequestRepository repository;

    public Request save(Request request) {

        if (request.getDescription() == null ||
                request.getDescription().isBlank()) {
            throw new RuntimeException("Descrição obrigatória");
        }

        if (request.getCreatedAt() == null) {
            request.setCreatedAt(LocalDateTime.now());
        }

        if (request.getProtocol() == null ||
                request.getProtocol().isBlank()) {
            request.setProtocol(generateProtocol());
        }

        return repository.save(request);
    }

    public List<Request> findAll() {
        return repository.findAll();
    }

    public Request findById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
    public Request findByProtocol(String protocol) {
        return repository.findByProtocol(protocol)
                .orElse(null);
    }

    public Request updateStatus(Long id, Status status) {

        Request request = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Solicitação não encontrada"));

        request.setStatus(status);
        request.setUpdatedAt(LocalDateTime.now());

        return repository.save(request);
    }

    private String generateProtocol() {
        long nextNumber = repository.count() + 1;
        int year = LocalDateTime.now().getYear();

        return String.format("CID-%d-%05d", year, nextNumber);
    }
}