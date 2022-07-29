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
    return this.http.get<Vexe[]>(API_URL + '/vexes');
  }

  public saveVexe(vexe): Observable<Vexe> {
    return this.http.post<Vexe>(API_URL + '/vexes', vexe);
  }
  public findById(id: number): Observable<Vexe> {
    return this.http.get<Vexe>(`${API_URL}/vexes/${id}`);
  }
  public updateVexe(id: number, product: Vexe): Observable<Vexe> {
    return this.http.put<Vexe>(`${API_URL}/vexes/${id}`, product);
  }
  public deleteVexe(id: number): Observable<Vexe> {
    return this.http.delete<Vexe>(`${API_URL}/vexes/${id}`);
  }
}
