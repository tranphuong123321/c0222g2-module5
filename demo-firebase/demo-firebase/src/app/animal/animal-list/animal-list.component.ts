import {Component, OnInit} from '@angular/core';
import {Animal} from "../../model/animal";
import {AnimalService} from "../../service/animal.service";

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  animals: Animal[] = [];

  constructor(private animalService: AnimalService) {
  }

  ngOnInit(): void {
    this.getAnimal();
  }

  getAnimal() {
    this.animalService.getAnimal().subscribe(animals => {
      this.animals = animals;
    });
  }
}
