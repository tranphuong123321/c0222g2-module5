import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AnimalService} from "../../service/animal.service";
import {Router} from "@angular/router";
import {formatDate} from "@angular/common";
import {finalize} from "rxjs/operators";
import {AngularFireStorage} from "@angular/fire/storage";

@Component({
  selector: 'app-animal-create',
  templateUrl: './animal-create.component.html',
  styleUrls: ['./animal-create.component.css']
})
export class AnimalCreateComponent implements OnInit {
  selectedImage: any ;
  url: string;
  animalForm: FormGroup = new FormGroup({
    img: new FormControl(''),
    name: new FormControl(''),
  });

  constructor(private animalService: AnimalService,
              private router: Router,
              @Inject(AngularFireStorage) private storage: AngularFireStorage) {
  }

  ngOnInit(): void {
  }


  save() {



    const nameImg = this.getCurrentDateTime() + this.selectedImage.name;
    const fileRef = this.storage.ref(nameImg);
    this.storage.upload(nameImg, this.selectedImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {

          this.animalForm.patchValue({img: url});
          console.log(url)
          // Call API to create animal
          this.animalService.saveAnimal(this.animalForm.value).subscribe(value => {
            console.log(value)
            console.log(this.animalForm.value)
            this.router.navigateByUrl('animal/list');

          })
        });
      })
    ).subscribe();
  }

  showPreview(event: any) {
    this.selectedImage = event.target.files[0];
  }

  getCurrentDateTime(): string {
    return formatDate(new Date(), 'dd-MM-yyyyhhmmssa', 'en-US');
  }
}
