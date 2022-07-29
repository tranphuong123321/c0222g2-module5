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
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    private ResponseEntity<VeXe> findById(@PathVariable int id) {
        return new ResponseEntity<>(iVexeService.findVexeById(id), HttpStatus.OK);
    }

    @PatchMapping("/update/{id}")
    private ResponseEntity<?> update(@PathVariable int id) {
//        VeXe veXe = iVexeService.findVexeById(id);
//        veXe.setSoLuong(veXe.getSoLuong() - 1);
//        iVexeService.save(veXe);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @DeleteMapping("/delete/{id}")
    private ResponseEntity<?> delete(@PathVariable Integer id) {
        System.out.println(id);
        iVexeService.delete(iVexeService.findVexeById(id));
        return new ResponseEntity<>( HttpStatus.OK);
    }
}
