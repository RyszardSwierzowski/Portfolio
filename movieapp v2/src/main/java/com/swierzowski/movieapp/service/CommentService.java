package com.swierzowski.movieapp.service;

import com.swierzowski.movieapp.model.Comment;
import com.swierzowski.movieapp.model.Movie;
import com.swierzowski.movieapp.repository.CommentRepository;
import com.swierzowski.movieapp.repository.MovieRepository;
import com.swierzowski.movieapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class CommentService {

    @Autowired
    UserRepository userRepository;
    @Autowired
    MovieRepository movieRepository;
    @Autowired
    CommentRepository commentRepository;

    public void addComment(long movieId, Comment comment){
        comment.setCreationDate(LocalDateTime.now());
        Movie movie;
        List<Comment> commentList;
        Optional<Movie> optionalMovie = movieRepository.findById(movieId);
        if(optionalMovie.isPresent()){
            commentRepository.save(comment);
            movie = optionalMovie.get();
            commentList = movie.getCommentList();
            commentList.add(comment);
            movie.setCommentList(commentList);
            movieRepository.save(movie);

        }
    }


}
