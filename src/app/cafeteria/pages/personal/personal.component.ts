import { Component, OnInit } from '@angular/core';
import { Modal } from '../../interfaces/modal.interface';
import { Personal } from '../../interfaces/personal.interface';
import { CafeteriaService } from '../../services/cafeteria.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  dataModal: Modal =  this.generateModal();

  dataPersonal: Personal[] = this.getPersonal();


  constructor( private _cafeteriaService:CafeteriaService  ) { }

  ngOnInit(): void {

   this.getPersonal();

   console.log(this.dataPersonal);
   

  }

  
  getPersonal() {
    return this._cafeteriaService.getItems('Personal');
  }

  generateModal() {
    return {
      title: "Personal",
      subtitle: "Nueva Persona",
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
          placeholder: "Juan Alfonso Díaz",
          options: [
            { value: '', text: '' },
          ]
        },
        {
          text: 'Cargo:',
          element: 'input',
          type: 'text',
          name: 'cargo',
          value: '',
          placeholder: "Cocinero",
          options: [
            { value: '', text: '' },
          ]
        },
        {
          text: 'Teléfono:',
          element: 'input',
          type: 'text',
          name: 'telefono',
          value: '',
          placeholder: "55555555",
          options: [
            { value: '', text: '' },
          ]
        },
        {
          text: 'Correo:',
          element: 'input',
          type: 'text',
          name: 'correo',
          value: '',
          placeholder: "ejemplo@ejemplo.com",
          options: [
            { value: '', text: '' },
          ]
        },
        {
          text: 'Dirección:',
          element: 'input',
          type: 'text',
          name: 'direccion',
          value: '',
          placeholder: "Calle 123 #123",
          options: [
            { value: '', text: '' },
          ]
        },
        {
          text: 'Fecha de nacimiento:',
          element: 'input',
          type: 'date',
          name: 'fecha_nacimiento',
          value: '',
          placeholder: "",
          options: [
            { value: '', text: '' },
          ]
        },
        {
          text: 'Fecha de ingreso:',
          element: 'input',
          type: 'date',
          name: 'fecha_ingreso',
          value: '',
          placeholder: "",
          options: [
            { value: '', text: '' },
          ]
        },
        {
          text: 'Fecha de salida:',
          element: 'input',
          type: 'date',
          name: 'fecha_salida',
          value: '',
          placeholder: "",
          options: [
            { value: '', text: '' },
          ]
        },
        {
          text: 'Estado:',
          element: 'select',
          type: 'text',
          name: 'estado',
          value: '',
          placeholder: "",
          options: [
            { value: 'AGS', text: 'Aguascalientes' },
            { value: 'BCN', text: 'Baja California Norte' },
            { value: 'BCS', text: 'Baja California Sur' },
            { value: 'CAM', text: 'Campeche' },
            { value: 'CHP', text: 'Chiapas' },
            { value: 'CHI', text: 'Chihuahua' },
            { value: 'COA', text: 'Coahuila' },
            { value: 'COL', text: 'Colima' },
            { value: 'DUR', text: 'Durango' },
            { value: 'GTO', text: 'Guanajuato' },
            { value: 'GRO', text: 'Guerrero' },
            { value: 'HGO', text: 'Hidalgo' },
            { value: 'JAL', text: 'Jalisco' },
            { value: 'MEX', text: 'México' },
            { value: 'MIC', text: 'Michoacán' },
            { value: 'MOR', text: 'Morelos' },
            { value: 'NAY', text: 'Nayarit' },
            { value: 'NLE', text: 'Nuevo León' },
            { value: 'OAX', text: 'Oaxaca' },
            { value: 'PUE', text: 'Puebla' },
            { value: 'QRO', text: 'Querétaro' },
            { value: 'QROO', text: 'Quintana Roo' },
            { value: 'SLP', text: 'San Luis Potosí' },
            { value: 'SIN', text: 'Sinaloa' },
            { value: 'SON', text: 'Sonora' },
            { value: 'TAB', text: 'Tabasco' },
            { value: 'TAM', text: 'Tamaulipas' },
            { value: 'TLA', text: 'Tlaxcala' },
            { value: 'VER', text: 'Veracruz' },
            { value: 'YUC', text: 'Yucatán' },
            { value: 'ZAC', text: 'Zacatecas' },
          ]
        },
        { 
          text: 'Foto:',
          element: 'input',
          type: 'file',
          name: 'foto',
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
