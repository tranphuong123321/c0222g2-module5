import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NhaxeService} from '../../service/nhaxe.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-nhaxe-create',
  templateUrl: './nhaxe-create.component.html',
  styleUrls: ['./nhaxe-create.component.css']
})
export class NhaxeCreateComponent implements OnInit {
  nhaxeForm: FormGroup = new FormGroup({
    tenNhaXe: new FormControl('', [Validators.required]),
  });

  constructor(private nhaxeService: NhaxeService,
              private router: Router,
              private toast: ToastrService) { }

  ngOnInit(): void {
  }
  submit() {
    const nhaxe = this.nhaxeForm.value;
    this.nhaxeService.saveNhaxe(nhaxe).subscribe(() => {
      this.nhaxeForm.reset();
      this.router.navigateByUrl('/nhaxe/list');
      this.toast.success('Thêm mới thành công');
    }, e => console.log(e));
  }
}
