package pl.swierzowski.projekt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.swierzowski.projekt.Entity.Movie;
import pl.swierzowski.projekt.repository.MovieRepository;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/movies")
public class MovieController {
    @Autowired
    MovieRepository movieRepository;

    @GetMapping("")
    ResponseEntity<List<Movie>> getAllUsers() {
        return ResponseEntity.ok()
                .body(movieRepository.findAll());
    }

    @GetMapping("/{id}")
    ResponseEntity<Movie> getAllMovies(@PathVariable("id") Long id) {
        Optional<Movie> optionalUser = movieRepository.findById(id);
        Movie movie = optionalUser.orElseThrow(() -> new EntityNotFoundException("Movie not found"));
        return ResponseEntity.ok()
                .body(movie);
    }

    @PostMapping("") // dodanie do bazy
    ResponseEntity<Movie> create(@RequestBody Movie movie){
        Movie created = movieRepository.save(movie);

        return ResponseEntity.ok()
                .body(created);
    }

    @DeleteMapping("{id}")
    void deleteMovie(@PathVariable Long id) {
        movieRepository.deleteById(id);
    }



}
