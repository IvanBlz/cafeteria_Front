import { Inventario } from './../../interfaces/datas';
import { Component, OnInit } from '@angular/core';
import { Modal } from '../../interfaces/modal.interface';
import { Articulo } from '../../interfaces/articulo.interface';
import { CafeteriaService } from '../../services/cafeteria.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent implements OnInit {


  
  dataModal: Modal =  this.generateModal();
  
  dataArticulo: Articulo[] = this.getInventario();


  constructor( private _cafeteriaService:CafeteriaService  ) { }

  ngOnInit(): void {

    this.getInventario();

   console.log(this.dataArticulo);
   

  }

  getInventario(){
    return this._cafeteriaService.getItems('Inventario');
  }

  generateModal() {
    return {
      title: "Inventario",
      subtitle: "Nuevo artículo",
      value: "",
      width: "500px",
      height: "",
      content: [
        {
          text: 'Nombre:',
          element: 'input',
          type: 'text',
          name: 'nombre',
          value: '',
          placeholder: "Filete de pescado",
          options: [
            { value: '', text: '' },
          ]
        },
        {
          text: 'Cantidad:',
          element: 'input',
          type: 'number',
          name: 'cantidad',
          value: '',
          placeholder: "250",
          options: [
            { value: '', text: '' },
          ]
        },
        {
          text: 'Precio:',
          element: 'input',
          type: 'number',
          name: 'precio',
          value: '',
          placeholder: "Precio de compra $",
          options: [
            { value: '', text: '' },
          ]
        },
        {
          text: 'Descripción:',
          element: 'textarea',
          type: '',
          name: 'descripcion',
          value: '',
          placeholder: "Descripcion del producto",
          options: [
            { value: '', text: '' },
          ]
        }

      ],
      buttons: [
        {
          text: 'Cancelar',
          color: 'bg-red'
        },
        {
          text: 'Agregar',
          color: 'bg-green'
        }
      ]
    }
  }
  

}
