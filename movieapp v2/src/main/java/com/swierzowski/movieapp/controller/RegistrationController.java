package com.swierzowski.movieapp.controller;

import com.swierzowski.movieapp.model.User;
import com.swierzowski.movieapp.repository.UserRepository;
import com.swierzowski.movieapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/register")
public class RegistrationController {
    @Autowired
    UserService userService;
    @Autowired
    UserRepository userRepository;

    @CrossOrigin
    @GetMapping()
    public ResponseEntity<String> registration(@RequestHeader User user) {

        if (userService.isExist(user) == false){
            userRepository.save(user);
            return ResponseEntity.ok()
                    .body("");
        }
        return ResponseEntity.status(HttpStatus.CONFLICT)
                .body("x");
    }

}
