package com.swierzowski.movieapp.controller;

import com.swierzowski.movieapp.model.Comment;
import com.swierzowski.movieapp.model.Movie;
import com.swierzowski.movieapp.repository.MovieRepository;
import com.swierzowski.movieapp.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
@RequestMapping("/api/movie/")
public class MovieController {
    @Autowired
    MovieRepository movieRepository;
    @Autowired
    MovieService movieService;

    @CrossOrigin
    @GetMapping("all")
    ResponseEntity<List<Movie>> getAllMovies(){
        return ResponseEntity.ok()
                .body(movieRepository.findAll());
    }
    @CrossOrigin
    @GetMapping("/{id}")
    ResponseEntity<Movie> getMovie(@PathVariable("id") Long id){
        Optional<Movie> optionalMovie = movieRepository.findById(id);
        Movie resulMovie = new Movie();
        if(optionalMovie.isPresent()){
            resulMovie = optionalMovie.get();
            List<Comment> commentList=optionalMovie.get().getCommentList();
            commentList = commentList.stream()
                    .sorted(Comparator.comparing(Comment::getId))
                    .collect(Collectors.toList());
            resulMovie.setCommentList(commentList);

        }

        else
            resulMovie.setId(-1L);
        return ResponseEntity.ok()
                .body(resulMovie);

    }
    @CrossOrigin
    @PostMapping("")
    ResponseEntity<Movie> addNewMovie(@RequestBody Movie movie){
        movieService.save(movie);
        return  ResponseEntity.ok()
                .body(movie);
    }

}
