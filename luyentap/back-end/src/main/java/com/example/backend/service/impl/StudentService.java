package com.example.backend.service.impl;

import com.example.backend.model.Student;
import com.example.backend.repository.IStudentRepository;
import com.example.backend.service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService implements IStudentService {
    @Autowired
    private IStudentRepository iStudentRepository;

    @Override
    public Page<Student> findAllByNameContaining(String name, Pageable pageable) {
        return iStudentRepository.findAllByNameContaining(name,pageable);
    }

    @Override
    public List<Student> findAll() {
        return iStudentRepository.findAll();
    }
}
