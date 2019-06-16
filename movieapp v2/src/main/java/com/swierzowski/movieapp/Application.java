package com.swierzowski.movieapp;

import com.swierzowski.movieapp.model.Comment;
import com.swierzowski.movieapp.model.Movie;
import com.swierzowski.movieapp.model.User;
import com.swierzowski.movieapp.model.UserRole;
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
        initDataBase();


    }

    private void initDataBase() {
        User user1 = new User();
        User user2 = new User();
        User admin = new User();

        admin.setName("admin");
        admin.setPassword("root");
        admin.setEmail("admin@admin.com");
        admin.setRole(UserRole.ROLE_ADMIN);
        userService.save(admin);


        Movie movie1 = new Movie();
        movie1.setTitlePl("Titanic");
        movie1.setTitleEng("Titanic");
        movie1.setDescription("Rok 1912, brytyjski statek Titanic wyrusza w swój dziewiczy rejs do USA. Na pokładzie emigrant Jack przypadkowo spotyka arystokratkę Rose. ");
        movie1.setDirector("James Cameron");
        movie1.setImgUrl("https://images-na.ssl-images-amazon.com/images/I/51G13d3EwBL.jpg");
        movie1.setPremiere("01 listopad 1997");
        movie1.setTrailerUrl("https://www.youtube.com/embed/ezcvpLIyifU");
        movie1.setBoxOffice("$ 2 187 463 944");
        movie1.setProduction("USA");
        movie1.setMovieType(MovieType.KATASTROFICZNY);
        movie1.setDuration("3 godz. 14 min");


        Movie movie2 = new Movie();
        movie2.setTitlePl("King Kong");
        movie2.setDescription("Lata 30. XX wieku. Bankrutujący reżyser i głodująca aktorka wyruszają na tajemniczą Wyspę Czaszki, by nagrać film swojego życia, ponieważ w Nowym Jorku panuje wielki kryzys. ");
        movie2.setDirector("Peter Jackson");
        movie2.setImgUrl("http://www.impawards.com/2005/posters/king_kong_ver5.jpg");
        movie2.setPremiere("5 grudnia 2005");
        movie2.setTrailerUrl("https://www.youtube.com/embed/AYaTCPbYGdk");
        movie2.setBoxOffice("$ 550 517 357");
        movie2.setProduction("Niemcy");
        movie2.setMovieType(MovieType.FANTAZY);
        movie2.setDuration("3 godz. 7 min");


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

























