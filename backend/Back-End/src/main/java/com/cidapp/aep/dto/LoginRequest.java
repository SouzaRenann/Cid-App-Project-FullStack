package com.cidapp.aep.dto;

public record LoginRequest(
        String email,
        String password
) {
}