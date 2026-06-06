package com.cidapp.aep.dto;

import com.cidapp.aep.model.user.Role;

public record LoginResponse(
        String token,
        String nome,
        String email,
        Role role
) {
}