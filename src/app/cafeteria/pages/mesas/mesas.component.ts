import { Component, OnInit } from '@angular/core';
import { Mesa } from '../../interfaces/mesa.interface';
import { Modal } from '../../interfaces/modal.interface';
import { CafeteriaService } from '../../services/cafeteria.service';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.scss']
})
export class MesasComponent implements OnInit {

  dataModal: Modal =  this.generateModal();
  dataMesas:Mesa[] = this.getMesas();





  constructor( 
    private _cafeteriaService:CafeteriaService
      ) { 

        

      }

  ngOnInit(): void {

    this.getMesas();

   console.log(this.dataMesas);
    

  }

  getMesas(){
    return this._cafeteriaService.getItems('Mesa');
  }

  generateModal() {
    return {
      title: "Mesa",
      subtitle: "Nueva Mesa",
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
          placeholder: "Mesa 1",
          options: [
            { value: '', text: '...' },
            { value: '1', text: 'Mesa 1' },
            { value: '2', text: 'Mesa 2' }
          ]
        },
        {
          text: 'Capacidad:',
          element: 'input',
          type: 'number',
          name: 'capacidad',
          value: '',
          placeholder: "Capacidad",
          options: [
            { value: '', text: '...' },
          ]
          },
        {
          text: 'Estado:',
          element: 'select',
          type: '',
          name: 'estado',
          value: 'Libre',
          placeholder: "",
          options: [
            { value: '', text: '...' },
            { value: 'Libre', text: 'Libre' },
            { value: 'Ocupado', text: 'Ocupado' }
          ]
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
