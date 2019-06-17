package com.swierzowski.movieapp.controller;

import com.swierzowski.movieapp.model.Movie;
import com.swierzowski.movieapp.model.User;
import com.swierzowski.movieapp.repository.MovieRepository;
import com.swierzowski.movieapp.repository.UserRepository;
import com.swierzowski.movieapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    UserService userService;
    @Autowired
    UserRepository userRepository;
    @Autowired
    MovieRepository movieRepository;


    @GetMapping()
    ResponseEntity<List<User>> getAllUsers() {

        return ResponseEntity.ok()
                .body(userRepository.findAll());
    }

    @GetMapping("/{id}")
    ResponseEntity<User> getAUser(@PathVariable("id") Long id) {
        Optional<User> optionalUser = userRepository.findById(id);
        User user = optionalUser.orElseThrow(() -> new EntityNotFoundException("User not found"));
        return ResponseEntity.ok()
                .body(user);
    }

    @GetMapping("/favorites/{userId}")
    ResponseEntity<List<Long>> getFavoritesByUser(@PathVariable("userId") Long id) {
        Optional<User> optionalUser = userRepository.findById(id);
        List<Long> resultList = new ArrayList<>();
        Set<Movie> tempList;
        if (optionalUser.isPresent()) {
            tempList = optionalUser.get().getFavoritesList();
            resultList = tempList.stream()
                    .map(m -> m.getId()).collect(Collectors.toList());

            return ResponseEntity.ok()
                    .body(resultList);
        } else {
            return ResponseEntity.ok()
                    .body(resultList);
        }
    }

//    @GetMapping("favorites/isMyFavorite/{userId}/{movieId}")
//    ResponseEntity<Boolean> isMyfavorite(@PathVariable("userId") Long userId, @PathVariable("movieId") Long movieId){
//        try{
//            Optional<User> optionalUser = userRepository.findById(userId);
//            if(optionalUser.isPresent()){
//
//
//                return ResponseEntity.ok().body(true);
//            }
//        } catch (Exception e) {
//            System.out.println(e);
//        }
//        return ResponseEntity.ok().body(false);
//    }


    @PostMapping("favorites/add/{userId}/{movieId}")
    ResponseEntity<Boolean> addToMyFavorites(@PathVariable("userId") Long userId, @PathVariable("movieId") Long movieId) {

        try {
            Optional<User> optionalUser = userRepository.findById(userId);
            User user = new User();
            if (optionalUser.isPresent()) {
                Optional<Movie> optionalMovie = movieRepository.findById(movieId);
                if (optionalMovie.isPresent()) {
                    Movie movie = optionalMovie.get();
                    user = optionalUser.get();
                    Set<Movie> favorites = user.getFavoritesList();
                    favorites.add(movie);
                    user.setFavoritesList(favorites);
                    userRepository.save(user);

                    return ResponseEntity.ok().body(true);
                }

            }

        } catch (Exception e) {
            System.out.println(e);
        }
        return ResponseEntity.ok().body(false);
    }

    @PostMapping("favorites/remove/{userId}/{movieId}")
    ResponseEntity<Boolean> removeFromMyFavorites(@PathVariable("userId") Long userId, @PathVariable("movieId") Long movieId) {

        try {
            Optional<User> optionalUser = userRepository.findById(userId);
            User user = new User();
            if (optionalUser.isPresent()) {
                Optional<Movie> optionalMovie = movieRepository.findById(movieId);
                if (optionalMovie.isPresent()) {
                    user = optionalUser.get();
                    Movie movie = optionalMovie.get();
                    Set<Movie> favorites = user.getFavoritesList();
                    favorites =
                            favorites.stream()
                                    .filter(x -> x.getId() != movieId)
                                    .collect(Collectors.toSet());
                    user.setFavoritesList(favorites);

//                    favorites.add(movie);
//                    user.setFavoritesList(favorites);
                    userRepository.save(user);

                    return ResponseEntity.ok().body(true);
                }

            }

        } catch (Exception e) {
            System.out.println(e);
        }
        return ResponseEntity.ok().body(false);
    }

    

    @PostMapping("")
        // dodanie do bazy
    ResponseEntity<User> create(@RequestBody User user) {
        User created = userService.save(user);

        return ResponseEntity.ok()
                .body(created);
    }


}
