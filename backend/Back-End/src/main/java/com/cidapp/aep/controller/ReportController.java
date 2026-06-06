package com.cidapp.aep.controller;

import com.cidapp.aep.model.report.Report;
import com.cidapp.aep.service.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reports")
public class ReportController {

    @Autowired
    private ReportService service;

    @GetMapping
    public List<Report> findAll() {
        return service.findAll();
    }

    @PostMapping
    public Report save(@RequestBody Report report) {
        return service.save(report);
    }

    @GetMapping("/{id}")
    public Report findById(@PathVariable Long id) {
        return service.findById(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}