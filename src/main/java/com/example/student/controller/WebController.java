package com.example.student.controller;
import java.util.Arrays;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.student.Student;
import com.example.student.StudentRepository;
import com.example.student.StudentService;

@Controller
public class WebController {
	
	@Autowired
	StudentRepository studentrepository;
	
	@Autowired
	StudentService srvc;
	Logger log = LoggerFactory.getLogger(this.getClass());
	
	
	@RequestMapping(value="/form", method=RequestMethod.GET)
    public String customerForm(Model model) {
        srvc.getForm(model);
        return "form";
    }
 
	/* @RequestMapping(value="/formss", method=RequestMethod.POST)
    public String customerSubmit(@ModelAttribute Student student, Model model) {
    	
        model.addAttribute("student", student);
        String info = String.format("Student Submission: id = %d, Name = %s, Section = %s, Address = %s, City = %s", 
        					student.getId(), student.getName(), student.getSection(), student.getAddress(), student.getCity());
        log.info(info); 
        studentrepository.save(student);
                
        return "result";
    }
    
    @RequestMapping(value="/searchBySection", method=RequestMethod.GET)
   @ResponseBody
   public Student studentSubmit(@RequestParam("section") String id) {//@RequestParam("id") long id, 
   	
   	return srvc.getDatailByName(id);
      
   }
   
   @RequestMapping(value="/updateDetails", method=RequestMethod.PUT)
    public String updateStudentsss(@ModelAttribute Student student,@RequestParam("id") long id) {
        srvc.updateDetails(id, student);
         return "result";
     }
    */
	@RequestMapping(value="/formss", method=RequestMethod.POST)
    public String AddDetails(@RequestBody Student student) {
		student.setId(student.getId());
		student.setName(student.getName());
		student.setSection(student.getSection());
		student.setAddress(student.getAddress());
		student.setCity(student.getCity());
       srvc.addDetails(student);
        return "result";
    }
	
	
	@RequestMapping(value="/form", method=RequestMethod.POST)
    public String AddDetailsd(@ModelAttribute Student student) {
       srvc.addDetails(student);
        return "result";
    }
     
   @RequestMapping(value="/loadsss", method=RequestMethod.GET)
   @ResponseBody
    public List<Student> getDetail() {
    	return srvc.getAllDetail();
    }
    
   
  
    @RequestMapping(value="/loads", method=RequestMethod.GET)
    @ResponseBody
    public Student studentSubmit(@RequestParam("id") long id) {//@RequestParam("id") long id, 
    	
    	return srvc.getOneDetail(id);
       
    }
    @RequestMapping(value="/updateDetails", method=RequestMethod.PUT)
    public String updateStudents(@RequestBody Student student) {
        srvc.updateDetails(student);
         return "result";
     }
   @RequestMapping(value="/deleteDetails", method=RequestMethod.DELETE)
   public @ResponseBody String deleteStudents(@RequestParam("id") Long id) {
        srvc.deleteDetails(id);
         return "return";
     }
}
