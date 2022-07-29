import {Component, OnInit} from '@angular/core';
import {VexeService} from '../../service/vexe.service';
import {Vexe} from '../../model/vexe';
import {subscribeOn} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-vexe-list',
  templateUrl: './vexe-list.component.html',
  styleUrls: ['./vexe-list.component.css']
})
export class VexeListComponent implements OnInit {
  vexes: Vexe[] = [];
  p = 1;
  idToDelete: number;
  vexe: Vexe;
  diemDen: string;
  diemDi: string;

  constructor(private vexeService: VexeService,
              private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.getVexe();
  }

  getDiemDen(value: string) {
    this.vexeService.getVexe().subscribe(data => {
      this.vexes = data;
      console.log(data);
      this.diemDen = value.toLocaleLowerCase();
      const arr: Vexe[] = [];
      this.vexes.forEach(temp => {
        if (temp.diemDen.toLocaleLowerCase().includes(this.diemDen)) {
          arr.push(temp);
        }
      });
      this.vexes = arr;
    });
  }

  getDiemDi(value: string) {
    this.vexeService.getVexe().subscribe(data => {
      this.vexes = data;
      this.diemDi = value.toLocaleLowerCase();
      const arr: Vexe[] = [];
      this.vexes.forEach(temp => {
        if (temp.diemDi.toLocaleLowerCase().includes(this.diemDi)) {
          arr.push(temp);
        }
      });
      this.vexes = arr;
    });
  }

  getVexe() {
    this.vexeService.getVexe().subscribe(vexes => {
      this.vexes = vexes;
      console.log(vexes);
    });
  }

  deleteVexe() {
    this.vexeService.deleteVexe(this.idToDelete).subscribe((data) => {
      this.toast.success('Xóa thành công');
      this.getVexe();
    });
  }

  showMess(id: any) {
    this.idToDelete = id;
  }
}
