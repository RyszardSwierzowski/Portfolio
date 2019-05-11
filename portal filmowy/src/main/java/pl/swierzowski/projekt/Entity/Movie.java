package pl.swierzowski.projekt.Entity;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private LocalDate releaseDate;
    private String description;
    private String promoUrl;
    @OneToMany
    @JoinColumn( name = "comment_id" )
    private List<Comment> commentList;

    public Movie(String name, LocalDate releaseDate, String description, String promoUrl, List<Comment> commentList) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.description = description;
        this.promoUrl = promoUrl;
        this.commentList = commentList;
    }
}
