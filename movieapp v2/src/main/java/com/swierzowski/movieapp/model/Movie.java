package com.swierzowski.movieapp.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@ToString

@Entity
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private LocalDate releaseDate;
    private String description;
    private String director;

    private String trailerUrl;
    private String imgUrl;
    @OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "movie_id",referencedColumnName="id")
    List<Comment> commentList;
    //List<Integer> gradeList;
}
