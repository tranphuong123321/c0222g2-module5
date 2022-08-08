package com.example.service;

import com.example.model.Animal;

import java.util.List;

public interface IAnimalService {
    List<Animal> findAll();

    void create(Animal animal);
}
