package com.example.backend.controller;

import com.example.backend.service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;
@RestController
@Controller
@CrossOrigin
public class StudentController {
    @Autowired
    private IStudentService iStudentService;

    @GetMapping(value = "/student/list")
    public String showList(Model model,
                           @PageableDefault(value = 2) Pageable pageable,
                           @RequestParam Optional<String> name) {
        if (name.isPresent()) {
            String nameVal = name.orElse("");
            model.addAttribute("studentList", iStudentService.findAllByNameContaining(nameVal, pageable));
            return "/student/list";
        } else {
            model.addAttribute("studentList", iStudentService.findAll());
            return "/student/list";
        }
    }
}
