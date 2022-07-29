import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Nhaxe} from '../../model/nhaxe';
import {VexeService} from '../../service/vexe.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {NhaxeService} from '../../service/nhaxe.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-vexe-edit',
  templateUrl: './vexe-edit.component.html',
  styleUrls: ['./vexe-edit.component.css']
})
export class VexeEditComponent implements OnInit {

  vexeForm: FormGroup;
  id: number;
  nhaxes: Nhaxe[] = [];

  equals(i1, i2) {
    return i1 && i2 && i1.id === i2.id;
  }

  constructor(private vexeService: VexeService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private nhaxeService: NhaxeService,
              private toast: ToastrService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getVexe(this.id);
    });
  }

  ngOnInit(): void {
    this.getNhaxe();
  }

  getVexe(id: number) {
    return this.vexeService.findById(id).subscribe(vexe => {
      this.vexeForm = new FormGroup({
        giaVe: new FormControl(vexe.giaVe),
        diemDi: new FormControl(vexe.diemDi),
        diemDen: new FormControl(vexe.diemDen),
        ngayDi: new FormControl(vexe.ngayDi),
        gioDi: new FormControl(vexe.gioDi),
        nhaxe: new FormControl(vexe.nhaXe),
        soLuong: new FormControl(vexe.soLuong),

      });
    });
  }

  updateVexe(id: number) {
    const vexe = this.vexeForm.value;
    this.vexeService.updateVexe(id, vexe).subscribe(() => {
      this.router.navigate(['/vexe/list']);
      this.toast.success('Cập nhật thành công');
    });
  }
  getNhaxe() {
    this.nhaxeService.getNhaxe().subscribe(nhaxes => {
      this.nhaxes = nhaxes;
    });
  }
}
