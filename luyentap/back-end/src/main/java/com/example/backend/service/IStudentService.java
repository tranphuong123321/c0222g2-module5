package com.example.backend.service;

import com.example.backend.model.Student;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IStudentService {
    Page<Student> findAllByNameContaining(String name, Pageable pageable);

    List<Student> findAll();
}
