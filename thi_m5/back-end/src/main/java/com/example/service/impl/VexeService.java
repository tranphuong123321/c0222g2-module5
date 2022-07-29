package com.example.service.impl;

import com.example.model.VeXe;
import com.example.repository.IVexeRepository;
import com.example.service.IVexeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VexeService implements IVexeService {
    @Autowired
    private IVexeRepository iVexeRepository;

    @Override
    public Page<VeXe> findAll(Pageable pageable) {
        return iVexeRepository.findAll(pageable);
    }

    @Override
    public List<VeXe> findAll() {
        return iVexeRepository.findAll();
    }


    @Override
    public void Create(VeXe veXe) {
        iVexeRepository.save(veXe);
    }

    @Override
    public VeXe findVexeById(Integer id) {
        return iVexeRepository.findById(id).get();
    }

    @Override
    public void update(VeXe veXe) {
        iVexeRepository.save(veXe);
    }
}
