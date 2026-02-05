package com.example.demo.Controller;

import com.example.demo.Modal.Users;
import com.example.demo.Repository.UserRepository;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class UserController {

    UserRepository userRepository;

    @GetMapping("/")
    private List<Users> getAll() {
        return userRepository.findAll();
    }
}
