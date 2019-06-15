package com.swierzowski.movieapp;

import com.swierzowski.movieapp.model.Comment;
import com.swierzowski.movieapp.model.Movie;
import com.swierzowski.movieapp.model.User;
import com.swierzowski.movieapp.model.movieEnums.MovieType;
import com.swierzowski.movieapp.repository.CommentRepository;
import com.swierzowski.movieapp.repository.MovieRepository;
import com.swierzowski.movieapp.repository.UserRepository;
import com.swierzowski.movieapp.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.time.LocalDateTime;
import java.util.*;

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
    @Autowired
    CommentService commentService;

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }


    @Override
    public void run(String... args) throws Exception {
        User user1 = new User();
        User user2 = new User();

        Movie movie1 = new Movie();
        movie1.setTitlePl("Titanic");
        movie1.setDescription("Tonąca łajba");
        movie1.setDirector("Nagrywajacy patykiem");

        Movie movie2 = new Movie();
        movie2.setTitlePl("King Kong");
        movie2.setDescription("Małpa na sterydach");
        movie2.setDirector("Antoni");

        Movie movie3 = new Movie();
        movie3.setTitlePl("Zielona mila");
        movie3.setTitleEng("The Green Mile");
        movie3.setDescription("Emerytowany strażnik więzienny opowiada przyjaciółce o niezwykłym mężczyźnie, którego skazano na śmierć za zabójstwo dwóch 9-letnich dziewczynek.");
        movie3.setDirector("Frank Darabont");
        movie3.setImgUrl("https://ssl-gfx.filmweb.pl/po/08/62/862/7517878.2.jpg");
        movie3.setPremiere("20 marca 2000");
        movie3.setTrailerUrl("https://www.youtube.com/embed/kRPhuj8f_3U");
        movie3.setBoxOffice("$ 286 801 374");
        movie3.setProduction("USA");
        movie3.setMovieType(MovieType.DRAMAT);
        movie3.setDuration("3 godz. 8 min");


        movieRepository.save(movie1);
        movieRepository.save(movie2);
        movieRepository.save(movie3);

        user1.setName("user1");
        user1.setPassword("root");
        user1.setEmail("xxx@x.com");
        Set<Movie> listaUlubionych = new HashSet<>();
        listaUlubionych.add(movie1);
        listaUlubionych.add(movie2);

        user1.setFavoritesList(listaUlubionych);

        user2.setName("user2");
        user2.setPassword("root");
        user2.setEmail("xxx2@x.com");
        userService.save(user1);
        userService.save(user2);


        Comment comment1 = new Comment();
        Comment comment2 = new Comment();

        comment1.setUserID(user1);
        comment1.setContent("taki tam komentarz 1");
        commentService.addComment(3,comment1);

        comment2.setUserID(user2);
        comment2.setContent("taki tam komentarz 2");
        commentService.addComment(3,comment2);


    }
}

























