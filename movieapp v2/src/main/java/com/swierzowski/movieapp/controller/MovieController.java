package com.swierzowski.movieapp.controller;

import com.swierzowski.movieapp.model.Movie;
import com.swierzowski.movieapp.repository.MovieRepository;
import com.swierzowski.movieapp.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/movie/")
public class MovieController {
    @Autowired
    MovieRepository movieRepository;
    @Autowired
    MovieService movieService;


    @GetMapping("")
    ResponseEntity<List<Movie>> getAllMovies(){
        return ResponseEntity.ok()
                .body(movieRepository.findAll());
    }

    @GetMapping("/{id}")
    ResponseEntity<Movie> getMovie(@PathVariable("id") Long id){
        Optional<Movie> optionalMovie = movieRepository.findById(id);
        Movie resulMovie = new Movie();
        if(optionalMovie.isPresent())
            resulMovie = optionalMovie.get();
        else
            resulMovie.setId(-1L);
        return ResponseEntity.ok()
                .body(resulMovie);

    }

    @PostMapping("")
    ResponseEntity<Movie> addNewMovie(@RequestBody Movie movie){
        movieService.save(movie);
        return  ResponseEntity.ok()
                .body(movie);
    }

}
