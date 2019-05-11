package pl.swierzowski.projekt.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.swierzowski.projekt.Entity.Comment;
import pl.swierzowski.projekt.Entity.User;
import pl.swierzowski.projekt.repository.CommentRepository;
import pl.swierzowski.projekt.repository.UserRepository;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserRepository userRepository;
    @Autowired
    CommentRepository commentRepository;

    @GetMapping("/all")
    ResponseEntity<List<User>> getAllUsers(){
        return ResponseEntity.ok()
                .body(userRepository.findAll());
    }

    @GetMapping("/comments/{id}")
    ResponseEntity<List<Comment>> getUserComments(@PathVariable("id") Integer id){
        List<Comment> commentsList = commentRepository.findAllByOwnerId(id);
                return ResponseEntity.ok()
                .body(commentsList);
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

    @PutMapping("/{id}")
    User replaceUser(@RequestBody User newUser, @PathVariable Long id) {

        return userRepository.findById(id)
                .map(user -> {
                    user.setUserName(newUser.getUserName());
                    user.setPassword(newUser.getPassword());
                    user.setUserType(newUser.getUserType());
                    user.setEmail(newUser.getEmail());
                    user.setFavoriteMovieList(newUser.getFavoriteMovieList());
                    return userRepository.save(user);
                })
                .orElseGet(() -> {
                    newUser.setId(id);
                    return userRepository.save(newUser);
                });
    }

    @DeleteMapping("{id}")
    void deleteMovie(@PathVariable Long id) {
        userRepository.deleteById(id);
    }







}
