import { Component, OnInit } from '@angular/core';
import { Modal, Option } from '../../interfaces/modal.interface';
import { CafeteriaService } from '../../services/cafeteria.service';
import { Ordenes } from '../../interfaces/ordenes.interfeace';
import { Articulo } from '../../interfaces/articulo.interface';
import { Mesa } from '../../interfaces/mesa.interface';
import { Platillo } from '../../interfaces/platillo.interface';
@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.scss']
})
export class OrdenesComponent implements OnInit {

  
  dataOptions: Option[] = this.getOptions();
  dataOptionsMesa: Option[] = this.getMesas();

  dataModal: Modal =  this.generateModal();

  dataOrdenes: Ordenes[] = this.getOrdenes();

    


  constructor( private _cafeteriaService:CafeteriaService  ) { }

  ngOnInit(): void {

   this.getOrdenes();

   

  }

  getMesas(){
    
    const data:Mesa[] = this._cafeteriaService.getItems('Mesa');
    let options: Option[] = [];
    
     data.forEach((element) => {
       options.push({ value: `${element.id}`, text: element.nombre });

  });

    return options;
  
  }


  getOptions(){
    const data:Articulo[] = this._cafeteriaService.getItems('Platillo');
    let options: Option[] = [];
    
     data.forEach((element) => {
       options.push({ value: `${element.id}`,id:`${element.id}`  , text: element.nombre });

  });

    return options;
  }

  getOrdenes(){
    return this._cafeteriaService.getItems('Ordenes');
  }
  
  generateModal() {
    return {
      title: "Ordenes",
      subtitle: "Nueva Orden",
      value: "",
      width: "650px",
      height: "",
      content: [
        {
          text: 'Mesa:',
          element: 'select',
          type: '',
          name: 'mesa',
          value: '',
          options: this.dataOptionsMesa,
        },
        {
          text: 'Plato',
          element: 'checkbox',
          type: '',
          name: 'platillo',
          value: 'false',
          options: this.dataOptions,
        },
        {
          text: 'Total:',
          element: 'input',
          type: 'number',
          name: 'total',
          value: '',
          placeholder: "Total $",
          options: [
            { value: '', text: '' },
          ]
        },

      ],
      buttons: [
        {
          text: 'Cancelar',
          color: 'bg-red'
        },
        {
          text: 'Crear',
          color: 'bg-green'
        }
      ]
    }
  }

}
