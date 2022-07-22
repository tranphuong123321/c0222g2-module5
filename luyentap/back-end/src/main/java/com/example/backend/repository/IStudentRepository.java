package com.example.backend.repository;

import com.example.backend.model.Student;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IStudentRepository extends JpaRepository<Student, Integer> {
    Page<Student> findAllByNameContaining(String name, Pageable pageable);

    List<Student> findAll();
}
