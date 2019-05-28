package com.swierzowski.movieapp;

import com.swierzowski.movieapp.model.Comment;
import com.swierzowski.movieapp.model.Movie;
import com.swierzowski.movieapp.model.User;
import com.swierzowski.movieapp.repository.CommentRepository;
import com.swierzowski.movieapp.repository.MovieRepository;
import com.swierzowski.movieapp.repository.UserRepository;
import com.swierzowski.movieapp.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@SpringBootApplication
public class Application implements CommandLineRunner {

    @Autowired
    private UserService userService;

    @Autowired
    MovieRepository movieRepository;
    @Autowired
    CommentRepository commentRepository;
    @Autowired
    UserRepository userRepository;

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }


    @Override
    public void run(String... args) throws Exception {
        User user1 = new User();
        User user2 = new User();

        user1.setName("user1");
        user1.setPassword("root");
        user1.setEmail("xxx@x.com");

        user2.setName("user2");
        user2.setPassword("root");
        user2.setEmail("xxx2@x.com");
        userService.save(user1);
        userService.save(user2);

        Movie movie1 = new Movie();
            movie1.setTitle("Titanic");
            movie1.setDescription("Tonąca łajba");
            movie1.setDirector("Nagrywajacy patykiem");
        Movie movie2 = new Movie();
            movie2.setTitle("King Kong");
            movie2.setDescription("Małpa na sterydach");
            movie2.setDirector("Antoni");

        movieRepository.save(movie1);
        movieRepository.save(movie2);
        Comment comment = new Comment();
        comment.setUserID(user1);
        comment.setContent("taki tam komentarz");
        commentRepository.save(comment);
        List list = new ArrayList<>();
        list.add(comment);
        Optional<Movie> movieWithComment = movieRepository.findById(2L);
                if(movieWithComment.isPresent())
                {
                    Movie movie =  movieWithComment.get();
                   movie.setCommentList(list);
                    movieRepository.save(movie);
                }

    }
}

























