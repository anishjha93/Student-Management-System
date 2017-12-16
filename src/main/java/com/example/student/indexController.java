package com.example.student;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.student.Student;
import com.example.student.StudentRepository;

@Controller
public class indexController {
	
	@Autowired
	StudentRepository repository;

	@RequestMapping("/")
	public String getName()
	{
		return "index";
	}
	
	@RequestMapping("/home")
	public String getHome()
	{
		return "home";
	}
	@RequestMapping("/load")
	public String getLoad()
	{
		return "load";
	}
	@RequestMapping("/update")
	public String getSearch()
	{
		return "update";
	}
		
}
