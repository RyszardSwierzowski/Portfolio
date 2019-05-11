package pl.swierzowski.projekt.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.swierzowski.projekt.Entity.Movie;
import pl.swierzowski.projekt.Entity.User;
import pl.swierzowski.projekt.repository.UserRepository;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping("/all")
    ResponseEntity<List<User>> getAllUsers(){
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

    @PostMapping("") // dodanie do bazy
    ResponseEntity<User> create(@RequestBody User user){
        User created = userRepository.save(user);

        return ResponseEntity.ok()
                .body(created);
    }

    @DeleteMapping("{id}")
    void deleteMovie(@PathVariable Long id) {
        userRepository.deleteById(id);
    }







}
