package com.example.controller;

import com.example.model.Animal;
import com.example.service.IAnimalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@org.springframework.web.bind.annotation.RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("animal")
public class RestController {
    @Autowired
    private IAnimalService animalService;

    @GetMapping(value = "/list")
    public ResponseEntity<?> getAll(){
       return new ResponseEntity<>(animalService.findAll(), HttpStatus.OK);
    }

    @PostMapping(value = "/create")
    public ResponseEntity<?> create(@RequestBody Animal animal){
        this.animalService.create(animal);
        return new ResponseEntity<>(animal,HttpStatus.CREATED);
    }
}
