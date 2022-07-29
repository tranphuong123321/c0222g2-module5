import {Component, OnInit} from '@angular/core';
import {NhaxeService} from '../../service/nhaxe.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-nhaxe-edit',
  templateUrl: './nhaxe-edit.component.html',
  styleUrls: ['./nhaxe-edit.component.css']
})
export class NhaxeEditComponent implements OnInit {
  nhaxeForm: FormGroup;
  id: number;

  constructor(private nhaxeService: NhaxeService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private toast: ToastrService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getNhaxe(this.id);
    });
  }

  ngOnInit(): void {
  }

  getNhaxe(id: number) {
    return this.nhaxeService.findById(id).subscribe(nhaxe => {
      this.nhaxeForm = new FormGroup({
        tenNhaXe: new FormControl(nhaxe.tenNhaXe),
      });
    });
  }

  updateNhaxe(id: number) {
    const nhaxe = this.nhaxeForm.value;
    this.nhaxeService.updateNhaxe(id, nhaxe).subscribe(() => {
      this.router.navigate(['/nhaxe/list']);
      this.toast.success('Cập nhật thành công');
    });
  }
}
