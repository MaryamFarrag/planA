import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { wedding } from  './wedding';
import { Observable, observable } from  'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  PHP_API_SERVER = "http://127.0.0.1:8080";
  readWeddings(): Observable<wedding[]>{
    return this.httpClient.get<wedding[]>(`${this.PHP_API_SERVER}/api/readW.php`);
  }
  readVacations(): Observable<wedding[]>{
    return this.httpClient.get<wedding[]>(`${this.PHP_API_SERVER}/api/readV.php`);
  }
  readWork(): Observable<wedding[]>{
    return this.httpClient.get<wedding[]>(`${this.PHP_API_SERVER}/api/readWo.php`);
  }

  constructor(private httpClient: HttpClient) { }
}
