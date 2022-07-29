import {Component, OnInit} from '@angular/core';
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

  vexeForm = new FormGroup({
    id: new FormControl(0),
    giaVe: new FormControl(''),
    diemDi: new FormControl(''),
    diemDen: new FormControl(''),
    ngayDi: new FormControl(''),
    gioDi: new FormControl(''),
    nhaXe: new FormGroup({
      id: new FormControl('')
    }),
    soLuong: new FormControl(''),
  });
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
      console.log(this.id);
      this.getVexe(this.id);
    });
  }

  ngOnInit(): void {
    this.getNhaxe();
  }

  getVexe(id: number) {
    this.vexeService.findById(id).subscribe(vexe => {
      console.log(vexe);
      this.vexeForm.patchValue(vexe);
    });
  }

  updateVexe(id: number) {
    const vexe = this.vexeForm.value;
    console.log(vexe);
    this.vexeService.saveVexe(vexe).subscribe(data => {
        alert('cap nhat thanh cong');
        this.router.navigate(['/vexe/list']);
      }
    );
  }

  getNhaxe() {
    this.nhaxeService.getNhaxe().subscribe(nhaxes => {
      this.nhaxes = nhaxes;
    });
  }
}
