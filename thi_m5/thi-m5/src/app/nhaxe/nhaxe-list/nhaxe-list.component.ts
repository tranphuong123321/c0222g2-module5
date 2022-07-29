import {Component, OnInit} from '@angular/core';
import {NhaxeService} from '../../service/nhaxe.service';
import {Nhaxe} from '../../model/nhaxe';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-nhaxe-list',
  templateUrl: './nhaxe-list.component.html',
  styleUrls: ['./nhaxe-list.component.css']
})
export class NhaxeListComponent implements OnInit {
  nhaxes: Nhaxe[] = [];
  idToDelete: number;
  constructor(private nhaxeService: NhaxeService,
              private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.getNhaxe();
  }

  getNhaxe() {
    this.nhaxeService.getNhaxe().subscribe(nhaxes => {
      this.nhaxes = nhaxes;
    });
  }
  deleteNhaxe() {
    this.nhaxeService.deleteNhaxe(this.idToDelete).subscribe((data) => {
      this.toast.success('Xóa thành công');
      this.getNhaxe();
    });
  }

  showMess(id: any) {
    this.idToDelete = id;
  }
}
