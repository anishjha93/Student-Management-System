package com.example.student;

import java.util.List;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RestController;
@RestController
public interface StudentRepository extends CrudRepository<Student,Long> {
	Student findBySection(String section);

}
