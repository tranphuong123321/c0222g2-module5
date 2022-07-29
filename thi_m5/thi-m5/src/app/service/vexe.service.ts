import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Vexe} from '../model/vexe';
import {environment} from '../../environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class VexeService {

  constructor(private http: HttpClient) {
  }

  public getVexe(): Observable<Vexe[]> {
    return this.http.get<Vexe[]>(API_URL + '/vexe/list');
  }

  public saveVexe(vexe): Observable<Vexe> {
    return this.http.post<Vexe>(API_URL + '/vexe/create', vexe);
  }
  public findById(id: number): Observable<Vexe> {
    return this.http.get<Vexe>(`${API_URL}/vexe/${id}`);
  }
  public deleteVexe(id: number): Observable<Vexe> {
    return this.http.delete<Vexe>(`${API_URL}/vexe/delete/${id}`);
  }
}
