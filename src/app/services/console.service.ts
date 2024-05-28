import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {

  private baseUrl = "https://localhost:7122/Console"
  constructor(private http: HttpClient) { }

  getConsoles() : Observable<Object>{
    return this.http.get(this.baseUrl + "/GetConsoles")
  }
}
