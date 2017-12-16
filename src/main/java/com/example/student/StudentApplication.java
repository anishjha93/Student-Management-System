package com.example.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
//@ComponentScan({"com.example.controller","WebController"})
//@ComponentScan({"com.example.student","indexController"})

public class StudentApplication{
	public static void main(String[] args) {
		
		SpringApplication.run(StudentApplication.class, args);
		
	}
	
}
