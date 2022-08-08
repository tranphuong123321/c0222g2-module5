import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Animal} from "../model/animal";
import {environment} from "../../environments/environment";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) { }
  public getAnimal(): Observable<Animal[]> {
    return this.http.get<Animal[]>(API_URL + '/animal/list');
  }

  public saveAnimal(animal: Animal): Observable<Animal> {
    return this.http.post<Animal>(API_URL + '/animal/create', animal);
  }
}
