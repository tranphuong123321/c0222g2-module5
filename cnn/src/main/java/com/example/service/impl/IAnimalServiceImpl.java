package com.example.service.impl;

import com.example.model.Animal;
import com.example.repository.IAnimalRepo;
import com.example.service.IAnimalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class IAnimalServiceImpl implements IAnimalService {
    @Autowired
    private IAnimalRepo animalRepo;

    @Override
    public List<Animal> findAll() {
        return animalRepo.findAll();
    }

    @Override
    public void create(Animal animal) {
        animalRepo.create(animal.getImg(), animal.getName());
    }
}
