import { Component, OnInit } from '@angular/core';
import { Modal, Option } from '../../interfaces/modal.interface';
import { Platillo } from '../../interfaces/platillo.interface';
import { CafeteriaService } from '../../services/cafeteria.service';
import { Articulo } from '../../interfaces/articulo.interface';

@Component({
  selector: 'app-platillos',
  templateUrl: './platillos.component.html',
  styleUrls: ['./platillos.component.scss']
})
export class PlatillosComponent implements OnInit {
  panelOpenState = false;

  dataOptions: Option[] = this.getInventario();
  dataModal: Modal =  this.generateModal();

  dataPlatillo: Platillo[] = this.getPlatillo();

  constructor(private _cafeteriaService: CafeteriaService) { }

  ngOnInit(): void {
  }

  getPlatillo() {
    return this._cafeteriaService.getItems('Platillo');
  }

   getInventario(){

    const data:Articulo[] = this._cafeteriaService.getItems('Inventario');
    let options: Option[] = [];
    
     data.forEach((element) => {
       options.push({ value: `${element.id}`,id:`${element.id}` , text: element.nombre });

    console.log("algo",options);
  });

    return options;
    
   }

  generateModal() {
    console.log("options",this.dataOptions);
    
    return {
      title: "Platillo",
      subtitle: "Nuevo Platillo",
      value: "",
      width: "650px",
      height: "500px",
      content: [
        {
          text: 'Nombre:',
          element: 'input',
          type: 'text',
          name: 'nombre',
          value: '',
          placeholder: "Tacos",
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
          placeholder: "10.00",
          options: [
            { value: '', text: '' },
          ]
        },
        {
          text: 'Descripción:',
          element: 'input',
          type: 'text',
          name: 'descripcion',
          value: '',
          placeholder: "Tacos de carne",
          options: [
            { value: '', text: '' },
          ]
        },
        {
          text: 'Categoria:',
          element: 'input',
          type: 'text',
          name: 'categoria',
          value: '',
          placeholder: "Entrante",
          options: [
            { value: '', text: '' },
          ]
        },
        {
          text: 'Imagen:',
          element: 'input',
          type: 'file',
          name: 'imagen',
          value: '',
          placeholder: "",
          options: [
            { value: '', text: '' },
          ],
        },
        {
          text: 'Ingredientes:',
          element: 'checkbox',
          type: '',
          name: 'ingredientes',
          value: '',
          placeholder: "",
          options: this.dataOptions,
        },
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
