package com.swierzowski.movieapp.controller;


import com.swierzowski.movieapp.model.User;
import com.swierzowski.movieapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/login")
public class LogInController {
    @Autowired
    UserRepository userRepository;





    @CrossOrigin
    @PostMapping()
    public ResponseEntity<User> logInGet(@RequestBody User user) {
        User resultUser =  new User();
//        System.out.println(user);
        Optional<User> userFromDatabase = userRepository.findByNameAndPassword(user.getName(), user.getPassword());

        if (!userFromDatabase.isPresent()){
            resultUser.setId(-1L);
            return ResponseEntity.ok().body(resultUser);
        }
        resultUser = userFromDatabase.get();
        return ResponseEntity.ok().body(resultUser);

    }


}
