package com.swierzowski.movieapp.controller;

import com.swierzowski.movieapp.model.Movie;
import com.swierzowski.movieapp.model.User;
import com.swierzowski.movieapp.repository.UserRepository;
import com.swierzowski.movieapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    UserService userService;
    @Autowired
    UserRepository userRepository;


    @GetMapping()
    ResponseEntity<List<User>> getAllUsers(){
        System.out.println("xxx");
        return ResponseEntity.ok()
                .body(userRepository.findAll());
    }

    @GetMapping("/{id}")
    ResponseEntity<User> getAUser(@PathVariable("id") Long id){
        Optional<User> optionalUser = userRepository.findById(id);
        User user = optionalUser.orElseThrow(()-> new EntityNotFoundException("User not found"));
        return ResponseEntity.ok()
                .body(user);
    }

    @GetMapping("/favorites/{userId}")
    ResponseEntity<List<Long>> getFavoritesByUser(@PathVariable("userId") Long id){
        Optional<User> optionalUser = userRepository.findById(id);
        List<Long> resultList = new ArrayList<>();
        List<Movie> tempList = new ArrayList<>();
        if(optionalUser.isPresent()){
            tempList = optionalUser.get().getFavoritesList();
            resultList = tempList.stream()
                    .map(m->m.getId()).collect(Collectors.toList());
            System.out.println(resultList);
            return ResponseEntity.ok()
                    .body(resultList);
        }else {
            return ResponseEntity.ok()
                    .body(resultList);
        }




    }

    @PostMapping("") // dodanie do bazy
    ResponseEntity<User> create(@RequestBody User user){
        User created = userService.save(user);

        return ResponseEntity.ok()
                .body(created);
    }



}
