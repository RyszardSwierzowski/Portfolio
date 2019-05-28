package com.swierzowski.movieapp.service;

import com.swierzowski.movieapp.model.Movie;
import com.swierzowski.movieapp.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityExistsException;

@Service
public class MovieService {
    @Autowired
    MovieRepository movieRepository;

    public Movie save(Movie movie) {
        if (movieRepository.findAll().contains(movie))
            throw new EntityExistsException("Podany film już istnieje");
        else {
            return movieRepository.save(movie);
        }
    }

}
