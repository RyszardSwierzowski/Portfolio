package pl.swierzowski.projekt.Entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pl.swierzowski.projekt.Entity.enums.UserType;

import javax.persistence.*;
import java.util.List;

@Entity
@Setter
@Getter
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String userName;
    private String password;
    private String email;
    @Enumerated(EnumType.STRING)
    private UserType userType;
    @OneToMany
    @JoinColumn( name = "movie_id" )
    private List<Movie> favoriteMovieList;

    public User(String userName, String password, String email,UserType userType, List<Movie> favoriteMovieList) {
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.userType = userType;
        this.favoriteMovieList = favoriteMovieList;
    }
}
