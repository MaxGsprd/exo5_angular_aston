import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cat } from '../models/Cat';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Cat[]>{
    return this.http.get<Cat[]>('http://localhost:3000/cats');
  }

  create(cat: Cat): Observable<Cat>  {
    return this.http.post<Cat>('http://localhost:3000/cats', cat);
  }
}