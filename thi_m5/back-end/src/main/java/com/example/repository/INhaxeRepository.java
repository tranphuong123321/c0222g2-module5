package com.example.repository;

import com.example.model.NhaXe;
import com.example.model.VeXe;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface INhaxeRepository extends JpaRepository<NhaXe,Integer> {
}
