import { Component, OnInit } from '@angular/core';
import { Indicadores, IndicadoresService } from './services/indicadores.service';

@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.page.html',
  styleUrls: ['./indicadores.page.scss'],
})
export class IndicadoresPage implements OnInit {

  indicadores?: any;
  dolar?: string;
  uf?: string;
  euro?: string;

  constructor(private readonly indicadoresService: IndicadoresService) { }

  ngOnInit() {
    this.getIndicadoresValores();
  }

  getIndicadoresValores(){
    this.indicadoresService.getIndicadores().subscribe(response => {
      this.indicadores = response;
      this.dolar = this.indicadores.data.dollar;
      this.uf = this.indicadores.data.uf;
      this.euro = this.indicadores.data.euro;
      console.log("this.indicadores: ", this.indicadores)
    })
    
  }

}
