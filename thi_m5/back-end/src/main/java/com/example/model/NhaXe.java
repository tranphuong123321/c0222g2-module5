package com.example.model;




import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "nhaxe")
@JsonIgnoreProperties({"veXes"})
public class NhaXe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String tenNhaXe;

    @OneToMany(mappedBy ="nhaXe")
    private List<VeXe> veXes;

    public NhaXe() {
    }


    public NhaXe(int id, String tenNhaXe, List<VeXe> veXes) {
        this.id = id;
        this.tenNhaXe = tenNhaXe;
        this.veXes = veXes;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTenNhaXe() {
        return tenNhaXe;
    }

    public void setTenNhaXe(String tenNhaXe) {
        this.tenNhaXe = tenNhaXe;
    }

    public List<VeXe> getVeXes() {
        return veXes;
    }

    public void setVeXes(List<VeXe> veXes) {
        this.veXes = veXes;
    }
}
