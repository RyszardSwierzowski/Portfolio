package com.swierzowski.movieapp.controller;

import com.swierzowski.movieapp.model.Comment;
import com.swierzowski.movieapp.model.Movie;
import com.swierzowski.movieapp.model.User;
import com.swierzowski.movieapp.model.movieEnums.MovieType;
import com.swierzowski.movieapp.repository.MovieRepository;
import com.swierzowski.movieapp.repository.UserRepository;
import com.swierzowski.movieapp.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.util.*;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
@RequestMapping("/api/movie/")
public class MovieController {
    @Autowired
    MovieRepository movieRepository;
    @Autowired
    MovieService movieService;
    @Autowired
    UserRepository userRepository;

    @CrossOrigin
    @GetMapping("all")
    ResponseEntity<List<Movie>> getAllMovies() {
        return ResponseEntity.ok()
                .body(movieRepository.findAll());
    }

    @CrossOrigin
    @GetMapping("/{id}")
    ResponseEntity<Movie> getMovie(@PathVariable("id") Long id) {
        Optional<Movie> optionalMovie = movieRepository.findById(id);
        Movie resulMovie = new Movie();
        if (optionalMovie.isPresent()) {
            resulMovie = optionalMovie.get();
            List<Comment> commentList = optionalMovie.get().getCommentList();
            commentList = commentList.stream()
                    .sorted(Comparator.comparing(Comment::getId))
                    .collect(Collectors.toList());
            resulMovie.setCommentList(commentList);

        } else
            resulMovie.setId(-1L);
        return ResponseEntity.ok()
                .body(resulMovie);

    }

    @CrossOrigin
    @PostMapping("")
    ResponseEntity<Movie> addNewMovie(@RequestBody Movie movie) {
        movieService.save(movie);
        return ResponseEntity.ok()
                .body(movie);
    }

    @GetMapping("howManyLike/{movieId}")
    ResponseEntity<Integer> addToMyFavorites(@PathVariable("movieId") Long movieId) {
        List<Integer> resultList = new ArrayList<>();
        try {

            List<User> allUsersList = userRepository.findAll();

            allUsersList.forEach(user -> {
                Set<Movie> movieSet = user.getFavoritesList();
                Set<Long> idSet = movieSet.stream()
                        .map(m -> m.getId()).collect(Collectors.toSet());
                if (idSet.contains(movieId))
                    resultList.add(1);
            });


        } catch (Exception e) {
            System.out.println(e);
        }
        return ResponseEntity.ok().body(resultList.size());


    }

    @CrossOrigin
    @GetMapping("getFiltered/{g}")
    ResponseEntity<List<Movie>> getAllMoviesFilter(@PathVariable("g") String gatunek) {
        System.out.println(MovieType.DRAMAT.toString().equals(gatunek.toUpperCase()));

        List<Movie> movieList = movieRepository.findAll();
        movieList =
                movieList.stream()
                        .filter(m -> m.getMovieType().toString().equals(gatunek.toUpperCase()))
                        .collect(Collectors.toList());

        return ResponseEntity.ok()
                .body(movieList);
    }


}
