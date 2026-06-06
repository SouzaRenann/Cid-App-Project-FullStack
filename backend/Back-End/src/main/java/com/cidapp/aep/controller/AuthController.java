package com.cidapp.aep.controller;

import com.cidapp.aep.dto.LoginRequest;
import com.cidapp.aep.dto.LoginResponse;
import com.cidapp.aep.dto.RegisterRequest;
import com.cidapp.aep.model.user.User;
import com.cidapp.aep.repository.UserRepository;
import com.cidapp.aep.security.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TokenService tokenService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public User register(@RequestBody RegisterRequest request) {
        User user = new User();

        user.setNome(request.nome());
        user.setEmail(request.email());
        user.setPassword(passwordEncoder.encode(request.password()));
        user.setRole(request.role());

        return userRepository.save(user);
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {
        User user = userRepository.findByEmail(request.email())
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        boolean passwordValid = passwordEncoder.matches(
                request.password(),
                user.getPassword()
        );

        if (!passwordValid) {
            throw new RuntimeException("Senha inválida");
        }

        String token = tokenService.generateToken(user.getEmail());

        return new LoginResponse(
                token,
                user.getNome(),
                user.getEmail(),
                user.getRole()
        );
    }
}