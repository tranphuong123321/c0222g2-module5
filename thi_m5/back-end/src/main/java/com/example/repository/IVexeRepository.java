package com.example.repository;

import com.example.model.VeXe;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IVexeRepository extends JpaRepository<VeXe,Integer> {
    Page<VeXe> findAll(Pageable pageable);
}
