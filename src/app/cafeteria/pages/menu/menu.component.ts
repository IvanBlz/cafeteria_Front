import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../interfaces/articulo.interface';
import { Menu } from '../../interfaces/menu.interface';
import { Modal, Option } from '../../interfaces/modal.interface';
import { CafeteriaService } from '../../services/cafeteria.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  dataOptions: Option[] = this.getPlatillo();

  dataModal: Modal =  this.generateModal();

  dataMenu:Menu[] = this.getMenu();


  constructor( private _cafeteriaService:CafeteriaService  ) { }

  ngOnInit(): void {

    this.getMenu();

   console.log(this.dataMenu);
   

  }

  getPlatillo(){
    const data:Articulo[] = this._cafeteriaService.getItems('Platillo');
    let options: Option[] = [];
    
     data.forEach((element) => {
       options.push({ value: `${element.id}`, text: element.nombre });

    console.log("algo",options);
  });

    return options;
  }

  getMenu(){
    return this._cafeteriaService.getItems('Menu');
  }
  
  generateModal() {
    return {
      title: "Menu",
      subtitle: "Nuevo Menu",
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
          placeholder: "Menu 1",
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
          placeholder: "Descripcion del menu",
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
          placeholder: "Precio de venta $",
          options: [
            { value: '', text: '' },
          ]
        },
        {
          text: 'Platillos',
          element: 'checkbox',
          type: '',
          name: 'platillos',
          value: '',
          placeholder: "Platillos",
          options: this.dataOptions
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
