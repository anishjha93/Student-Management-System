package com.example.student;

import java.util.List;
import java.util.function.Consumer;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Service
public class StudentService {
	
	
	@Autowired
	StudentRepository studentrepository;
	public Model getForm(Model model) {
	        return model.addAttribute("student", new Student());
		}
	
    public List<Student> getAllDetail() {
    	//return model.addAttribute("student", studentrepository.findAll());
    	return (List<Student>) studentrepository.findAll();
    	
    }
    public void addDetails(Student st) {
    	studentrepository.save(st);
    }
    
    public Student getOneDetail(long id) {
    	return studentrepository.findOne(id);
    }
    public Student getDatailByName(String id) {
    	return studentrepository.findBySection(id);
    }
    public Student updateDetails(Student student) {
    	Student update=studentrepository.findOne(student.getId());
    	update.setName(student.getName());
    	update.setSection(student.getSection());
    	update.setAddress(student.getAddress());
    	update.setCity(student.getCity());
    	return studentrepository.save(update);
    }
    public void deleteDetails(long id) {
    	Student dlt=studentrepository.findOne(id);
    	studentrepository.delete(dlt);
    }
}
