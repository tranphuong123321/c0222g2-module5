package com.example.controller;

import com.example.model.NhaXe;
import com.example.model.VeXe;
import com.example.service.INhaxeService;
import com.example.service.IVexeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("nhaxe")
public class NhaxeController {
    @Autowired
    private INhaxeService iNhaxeService;



    @GetMapping("/list")
    public ResponseEntity<List<NhaXe>> getNhaxe() {
        return new ResponseEntity<>(iNhaxeService.findAll(), HttpStatus.OK);
    }
}
