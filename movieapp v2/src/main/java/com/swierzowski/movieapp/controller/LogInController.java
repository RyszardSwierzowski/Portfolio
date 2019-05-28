package com.swierzowski.movieapp.controller;


import com.swierzowski.movieapp.model.User;
import com.swierzowski.movieapp.repository.UserRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.Optional;

@RestController
@RequestMapping("/api/login")
public class LogInController {
    @Autowired
    UserRepository userRepository;





    @CrossOrigin
    @GetMapping()
    public ResponseEntity<String> logInGet(@RequestBody User user) {
        System.out.println("proba logowania");
        Optional<User> userFromDatabase = userRepository.findByNameAndPassword(user.getName(), user.getPassword());
        if (!userFromDatabase.isPresent())// throw new EntityNotFoundException(" not found");
            return new ResponseEntity<>("brak autoryzacji", HttpStatus.FORBIDDEN);
        //throw new EntityNotFoundException("User not found");


        long currentTimeMillis = System.currentTimeMillis();

        String responseToken = Jwts.builder()
                .setSubject(user.getName()) // ustawiam kto jest userem i kto dostaje ten klucz
                .setHeaderParam("typ", "JWT")
                .claim("role", userFromDatabase.get().getRole())
                .claim("name", userFromDatabase.get().getName())
                .claim("userID", userFromDatabase.get().getId())
                .setIssuedAt(new Date(currentTimeMillis))   // czas ważności tokenu
                .setExpiration(new Date(currentTimeMillis + (1000 * 2000))) // czas przez jaki token jest żywy
                .signWith(SignatureAlgorithm.HS512, "aaa".getBytes())
                .compact();  // compact zwraca bulidera jako stringa
        System.out.println("token\n" + responseToken);

        return ResponseEntity.ok()
                .body(responseToken);
    }


}
