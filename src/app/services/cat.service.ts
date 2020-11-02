import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cat } from '../models/Cat';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  url:string = 'http://localhost:3000/cats';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Cat[]>{
    return this.http.get<Cat[]>(this.url);
  }

  getById(id:number): Observable<Cat> {
    return this.http.get<Cat>(`http://localhost:3000/cats/${id}`);
  }

  // update()

  create(cat: Cat): Observable<Cat>  {
    return this.http.post<Cat>(this.url, cat);
  }

  // delete(id: number): Promise<any>{
  //   return fetch(`http://localhost:3000/cats/${id}`, {
  //     method: 'DELETE'
  //   });

  click() {
    console.log('click!');
  }
}