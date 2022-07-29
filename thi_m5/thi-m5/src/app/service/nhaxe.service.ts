import { Injectable } from '@angular/core';
import {Nhaxe} from '../model/nhaxe';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Vexe} from '../model/vexe';
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class NhaxeService {

  constructor(private http: HttpClient) { }
  public getNhaxe(): Observable<Nhaxe[]> {
    return this.http.get<Nhaxe[]>(API_URL + '/nhaxes');
  }
  public deleteNhaxe(id: number): Observable<Nhaxe> {
    return this.http.delete<Nhaxe>(`${API_URL}/nhaxes/${id}`);
  }
  public saveNhaxe(nhaxe): Observable<Nhaxe> {
    return this.http.post<Nhaxe>(API_URL + '/nhaxes', nhaxe);
  }
  public findById(id: number): Observable<Nhaxe> {
    return this.http.get<Nhaxe>(`${API_URL}/nhaxes/${id}`);
  }
  public updateNhaxe(id: number, nhaxe: Nhaxe): Observable<Nhaxe> {
    return this.http.put<Nhaxe>(`${API_URL}/nhaxes/${id}`, nhaxe);
  }
}
