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
    @PostMapping()
    public ResponseEntity<User> registration(@RequestBody User user) {

        if (userService.isExist(user) == false){
            userRepository.save(user);
            return ResponseEntity.ok()
                    .body(user);
        }
        User invalidUser = new User();
        invalidUser.setId(-1L);
        if(userRepository.findByName(user.getName()).isPresent())
            invalidUser.setName(user.getName());
        if(userRepository.findByEmail(user.getEmail()).isPresent())
            invalidUser.setEmail(user.getEmail());
//        System.out.println(invalidUser);
        return ResponseEntity.ok()
                .body(invalidUser);
    }

}
