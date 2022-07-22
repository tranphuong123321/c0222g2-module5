import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Student} from "../model/student";
import {environment} from "../../environments/environment";

import {Observable} from "rxjs";


const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {}


  getStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(API_URL + '/students')
  }
}
