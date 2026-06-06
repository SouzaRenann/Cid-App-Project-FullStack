package com.cidapp.aep.dto;

import com.cidapp.aep.model.user.Role;

public record RegisterRequest(
        String nome,
        String email,
        String password,
        Role role
) {
}