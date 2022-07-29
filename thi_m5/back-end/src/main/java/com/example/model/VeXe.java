package com.example.model;

import javax.persistence.*;

@Entity
@Table(name = "vexe")
public class VeXe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String giaVe;
    private String diemDi;
    private String diemDen;
    private String ngayDi;
    private String gioDi;
    private String nhaxe;
    private String soLuong;

    @ManyToOne
    @JoinColumn(name = "nha_xe_id", referencedColumnName = "id")
    private NhaXe nhaXe;

    public VeXe() {
    }

    public VeXe(int id, String giaVe, String diemDi, String diemDen, String ngayDi, String gioDi, String nhaxe, String soLuong, NhaXe nhaXe) {
        this.id = id;
        this.giaVe = giaVe;
        this.diemDi = diemDi;
        this.diemDen = diemDen;
        this.ngayDi = ngayDi;
        this.gioDi = gioDi;
        this.nhaxe = nhaxe;
        this.soLuong = soLuong;
        this.nhaXe = nhaXe;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getGiaVe() {
        return giaVe;
    }

    public void setGiaVe(String giaVe) {
        this.giaVe = giaVe;
    }

    public String getDiemDi() {
        return diemDi;
    }

    public void setDiemDi(String diemDi) {
        this.diemDi = diemDi;
    }

    public String getDiemDen() {
        return diemDen;
    }

    public void setDiemDen(String diemDen) {
        this.diemDen = diemDen;
    }

    public String getNgayDi() {
        return ngayDi;
    }

    public void setNgayDi(String ngayDi) {
        this.ngayDi = ngayDi;
    }

    public String getGioDi() {
        return gioDi;
    }

    public void setGioDi(String gioDi) {
        this.gioDi = gioDi;
    }

    public String getNhaxe() {
        return nhaxe;
    }

    public void setNhaxe(String nhaxe) {
        this.nhaxe = nhaxe;
    }

    public String getSoLuong() {
        return soLuong;
    }

    public void setSoLuong(String soLuong) {
        this.soLuong = soLuong;
    }

    public NhaXe getNhaXe() {
        return nhaXe;
    }

    public void setNhaXe(NhaXe nhaXe) {
        this.nhaXe = nhaXe;
    }
}
