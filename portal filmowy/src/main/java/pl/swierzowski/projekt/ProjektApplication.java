package pl.swierzowski.projekt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import pl.swierzowski.projekt.Entity.Movie;
import pl.swierzowski.projekt.Entity.User;
import pl.swierzowski.projekt.Entity.enums.UserType;
import pl.swierzowski.projekt.repository.CommentRepository;
import pl.swierzowski.projekt.repository.MovieRepository;
import pl.swierzowski.projekt.repository.UserRepository;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;

@SpringBootApplication
public class ProjektApplication implements CommandLineRunner {

    @Autowired
    CommentRepository commentRepository;
    @Autowired
    MovieRepository movieRepository;
    @Autowired
    UserRepository userRepository;


    public static void main(String[] args) {
        SpringApplication.run(ProjektApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        initDatabase();
    }

    private void initDatabase() {

// USER  USER  USER  USER  USER  USER  USER  USER  USER  USER  USER  USER  USER  USER  USER  USER  USER  USER  USER  USER
        userRepository.save(new User("username", "pass", "xx@xx.com", UserType.STANDARD, new ArrayList<>()));
        userRepository.save(new User("username2", "pass", "xx@xx.com", UserType.STANDARD, new ArrayList<>()));
        userRepository.save(new User("admin", "pass", "xx@xx.com", UserType.ADMIN, new ArrayList<>()));
// COMMENT  COMMENT  COMMENT  COMMENT  COMMENT  COMMENT  COMMENT  COMMENT  COMMENT  COMMENT  COMMENT  COMMENT  COMMENT

// MOVIE  MOVIE  MOVIE  MOVIE  MOVIE  MOVIE  MOVIE  MOVIE  MOVIE  MOVIE  MOVIE  MOVIE  MOVIE  MOVIE  MOVIE  MOVIE  MOVIE
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

        movieRepository.save( new Movie("name", LocalDate.parse("2015-01-01", formatter), "opis", "youtube.com", new ArrayList<>() ));


    }


}
