package com.cidapp.aep.service;

import com.cidapp.aep.model.report.Report;
import com.cidapp.aep.repository.ReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReportService {
    @Autowired
    private ReportRepository repository;

    public Report save(Report report) {
        return repository.save(report);
    }

    public List<Report> findAll() {
        return repository.findAll();
    }

    public Report findById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
