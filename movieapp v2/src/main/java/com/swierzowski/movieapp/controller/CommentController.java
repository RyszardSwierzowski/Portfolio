package com.swierzowski.movieapp.controller;

import com.fasterxml.jackson.databind.util.JSONPObject;
import com.swierzowski.movieapp.model.Comment;
import com.swierzowski.movieapp.model.User;
import com.swierzowski.movieapp.repository.UserRepository;
import com.swierzowski.movieapp.service.CommentService;
import jdk.nashorn.internal.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/comment")
public class CommentController {
    @Autowired
    CommentService commentService;
    @Autowired
    UserRepository userRepository;

    @PostMapping()
    public void addNewComment(@RequestBody String list){
        Comment comment = new Comment();
        long movieId=-1;
        long userId=-1;
        list = list.replace("[","");
        list = list.replace("]","");
        list = list.replace("\"","");
        list = list.replace("{","");
        list = list.replace("}","");
        list = list.replace(" ","");
        list = list.replace("\n","");
        System.out.println(list);
        String[] test = list.split(",");
        for(int i =0;i<test.length; i++)
        {
            if(test[i].contains("userID")==true){
                test[i]=test[i].replace("userID:","");
                userId = Long.parseLong(test[i]);
            }
            if(test[i].contains("content")==true){
                test[i]=test[i].replace("content:","");
                comment.setContent(test[i]);
            }
            if(test[i].contains("movieId")==true){
                test[i]=test[i].replace("movieId:","");
                movieId=Long.parseLong(test[i]);
            }
        }
        Optional<User>optionalUser  = userRepository.findById(userId);
        if(optionalUser.isPresent()){
            comment.setUserID(optionalUser.get());
            commentService.addComment(movieId,comment);
        }
        System.out.println("MiD"+ movieId);
        System.out.println(comment);


    }



}
