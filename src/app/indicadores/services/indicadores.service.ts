import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Indicadores {
  data:   Data[];
  status: string;
}

export interface Data {
  uf:         string;
  ivp:        string;
  dollar:     string;
  euro:       string;
  itcnm:      string;
  ozt_silver: string;
  ozt_gold:   string;
  lb_copper:  string;
}

@Injectable({
  providedIn: 'root'
})
export class IndicadoresService {

  constructor(public http: HttpClient) { }

  getIndicadores(): Observable<Indicadores[]>{
    return this.http.get<Indicadores[]>(environment.indicadoresUrl + `indicators`)
  }

}
