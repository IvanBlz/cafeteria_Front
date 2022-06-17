import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Modal } from '../../interfaces/modal.interface';





@Component({
  selector: 'app-ordenes-dialog',
  templateUrl: './ordenes-dialog.component.html',
  styleUrls: ['./ordenes-dialog.component.scss']
})
export class OrdenesDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Modal) { }

  ngOnInit(): void {

    console.log("data",this.data);
    
    // this.data.buttons.forEach(element => {
    //   console.log(element.text);
      
    // });

  }

  onChange(termino:any) {
    console.log(termino)
  }

}
