package com.swierzowski.movieapp.service;

import com.swierzowski.movieapp.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import com.swierzowski.movieapp.repository.UserRepository;
import org.springframework.stereotype.Service;

import javax.persistence.EntityExistsException;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    private UserService userService;

    public User save(User user) {
        if (userRepository.findAll().contains(user))
            throw new EntityExistsException("Podany użytkownik już istnieje");
        else {
            return userRepository.save(user);
        }
    }

    public boolean isExist(User user) {
        if ( userRepository.findByName(user.getName()).isPresent() ||
                userRepository.findByEmail(user.getEmail()).isPresent()) {
            return true;
        }
        return false;
    }


}
