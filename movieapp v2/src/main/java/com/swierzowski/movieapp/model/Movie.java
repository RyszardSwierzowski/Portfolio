package com.swierzowski.movieapp.model;

import com.swierzowski.movieapp.model.movieEnums.MovieType;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@ToString

@Entity
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titlePl;
    private String titleEng;
    private String premiere;
    private String description;
    private String director;
    private String boxOffice;
    @Enumerated(EnumType.STRING)
    private MovieType movieType;
    private String production; //todo nazwa
    private String duration;


    private String trailerUrl;
    private String imgUrl;
    @OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "movie_id",referencedColumnName="id")
    List<Comment> commentList;
    //List<Integer> gradeList;
}
