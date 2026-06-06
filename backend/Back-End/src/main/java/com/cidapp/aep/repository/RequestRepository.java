package com.cidapp.aep.repository;

import com.cidapp.aep.model.request.Request;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RequestRepository extends JpaRepository<Request, Long> {

    Optional<Request> findByProtocol(String protocol);

}