package com.example.service.impl;

import com.example.model.VeXe;
import com.example.repository.IVexeRepository;
import com.example.service.IVexeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public class VexeService implements IVexeService {
    @Autowired
    private IVexeRepository iVexeRepository;
    @Override
    public Page<VeXe> findAll(Pageable pageable) {
        return iVexeRepository.findAll(pageable);
    }
}
