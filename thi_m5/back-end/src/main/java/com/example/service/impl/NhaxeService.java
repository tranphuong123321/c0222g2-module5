package com.example.service.impl;

import com.example.model.NhaXe;
import com.example.repository.INhaxeRepository;
import com.example.repository.IVexeRepository;
import com.example.service.INhaxeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class NhaxeService implements INhaxeService {
    @Autowired
    private INhaxeRepository iNhaxeRepository;
    @Override
    public List<NhaXe> findAll() {
        return iNhaxeRepository.findAll();
    }
}
