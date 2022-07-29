import {Component, OnInit} from '@angular/core';
import {Nhaxe} from '../../model/nhaxe';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NhaxeService} from '../../service/nhaxe.service';
import {VexeService} from '../../service/vexe.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-vexe-create',
  templateUrl: './vexe-create.component.html',
  styleUrls: ['./vexe-create.component.css']
})
export class VexeCreateComponent implements OnInit {
  vexeForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    giaVe: new FormControl('', [Validators.required, Validators.pattern('[+]?\\d+')]),
    diemDi: new FormControl('', [Validators.required]),
    diemDen: new FormControl('', [Validators.required]),
    ngayDi: new FormControl('', [Validators.required]),
    gioDi: new FormControl('', [Validators.required]),
    nhaxe: new FormControl('', [Validators.required]),
    soLuong: new FormControl('', [Validators.required, Validators.pattern('[+]?\\d+')]),
  });
  nhaxes: Nhaxe[] = [];

  constructor(private nhaxeService: NhaxeService,
              private vexeService: VexeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getNhaxe();
  }

  getNhaxe() {
    this.nhaxeService.getNhaxe().subscribe(nhaxes => {
      this.nhaxes = nhaxes;
    });
  }

  submit() {
    const vexe = this.vexeForm.value;
    this.vexeService.saveVexe(vexe).subscribe(() => {
      this.vexeForm.reset();
      this.router.navigateByUrl('/vexe/list');
      // this.toast.success('Thêm mới thành công');
    }, e => console.log(e));
  }
}
