package com.example.service;

import com.example.model.VeXe;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IVexeService {
    Page<VeXe> findAll(Pageable pageable);

    List<VeXe> findAll();

    VeXe findVexeById(Integer id);

    void Create(VeXe veXe);

    void update( VeXe veXe);
}
