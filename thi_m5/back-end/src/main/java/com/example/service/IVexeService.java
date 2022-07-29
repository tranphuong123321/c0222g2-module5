package com.example.service;

import com.example.model.VeXe;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IVexeService {
    Page<VeXe> findAll(Pageable pageable);
}
