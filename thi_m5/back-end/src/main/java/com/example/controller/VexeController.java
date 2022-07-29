package com.example.controller;

import com.example.model.VeXe;
import com.example.service.IVexeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("vexe")
public class VexeController {
    @Autowired
    private IVexeService iVexeService;


    @GetMapping("/list")
    public ResponseEntity<List<VeXe>> getVexe() {
        return new ResponseEntity<>(iVexeService.findAll(), HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<VeXe> saveVexe(@RequestBody VeXe veXe) {
        iVexeService.Create(veXe);
        return new ResponseEntity<>( HttpStatus.OK);
    }
    @PatchMapping("/update")
    public ResponseEntity<VeXe> update (@RequestBody VeXe veXe) {
        iVexeService.update(veXe);
        return new ResponseEntity<>(veXe, HttpStatus.OK);
    }
}
