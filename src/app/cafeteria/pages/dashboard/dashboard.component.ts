import { Component, OnInit } from '@angular/core';
import { Chart, registerables, LineElement, PointElement, LinearScale, Title  } from 'chart.js';
import { Ordenes, Personal, Mesa, Inventario, Platillo } from '../../interfaces/datas';
import { Ordenes as OrdenesData } from '../../interfaces/ordenes.interfeace';
import { Platillo as PlatillosData } from '../../interfaces/platillo.interface';
import { CafeteriaService } from '../../services/cafeteria.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dataOrdenes: OrdenesData[] = this.getOrdenes();
  dataPlatillos: PlatillosData[] = this.getPlatillos();

  

  constructor( private _cafeteriaService:CafeteriaService) {
  Chart.register(...registerables);
  

  if(!localStorage.getItem('Personal') ){
    localStorage.setItem('Personal', JSON.stringify(Personal));

  }
  if(!localStorage.getItem('Mesa') ){
    localStorage.setItem('Mesa', JSON.stringify(Mesa));

  }  if(!localStorage.getItem('Inventario') ){
    localStorage.setItem('Inventario', JSON.stringify(Inventario));

  }  if(!localStorage.getItem('Platillo') ){
    localStorage.setItem('Platillo', JSON.stringify(Platillo));

  }  if(!localStorage.getItem('Ordenes') ){
    localStorage.setItem('Ordenes', JSON.stringify(Ordenes));

  } 




   }

  
  ngOnInit(): void {
    this.generateGraph();
    this.getOrdenes();
    console.log("Ordenes - ",this.dataOrdenes, "Platillos - " ,this.dataPlatillos);
    
     
  }

  getOrdenes(){
    return this._cafeteriaService.getItems('Ordenes');
  }

  
  getPlatillos(){
    return this._cafeteriaService.getItems('Platillo');
  }

  generateGraph() {
    var ctx: any = document.getElementById('myChart');
    
    const myChart:any = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Tacos', 'Filete de pescado'],
          datasets: [{
              label: 'Ventas',
              data: [12, 19],
              backgroundColor: [
                  'rgba(50, 202, 50, 1)'
              ],
              borderColor: [
                  'rgba(50, 202, 50, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });


}
}
