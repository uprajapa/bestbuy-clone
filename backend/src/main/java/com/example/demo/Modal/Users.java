package com.example.demo.Modal;

import jakarta.persistence.*;

@Entity
@Table(name="users")
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="fname")
    private String fname;

    @Column(name="lname")
    private String lname;

}
