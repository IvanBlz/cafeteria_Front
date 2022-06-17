import { Component, Input, OnInit } from '@angular/core';
import { Platillo } from '../../interfaces/platillo.interface';
import { CafeteriaService } from '../../services/cafeteria.service';

@Component({
  selector: 'app-ordenes-list',
  templateUrl: './ordenes-list.component.html',
  styleUrls: ['./ordenes-list.component.scss']
})
export class OrdenesListComponent implements OnInit {

  @Input() id!: string|undefined;

  dataPlatillos : Platillo = {
    id: 1,
    nombre: '',
    precio: 0,
    descripcion: '',
    imagen: '',
    categoria: '', 
    ingredientes: []
  } ;


  constructor(private _cafeteriaService:CafeteriaService) { }

  ngOnInit(): void {
    
    this.getPlatillo();
    
  }

  getPlatillo(){
    
    
  
    let Platillo = this._cafeteriaService.getItems('Platillo');
    let filtered:Platillo[] = Platillo.filter((element:any) => {


      return element.id == this.id;

    });

    
    this.dataPlatillos = filtered[0];
    
    
    


  }

}
