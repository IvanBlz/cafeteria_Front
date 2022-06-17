
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { OrdenesDialogComponent } from '../../components/ordenes-dialog/ordenes-dialog.component';
import { Menu } from '../../interfaces/menu.interface';
import { Mesa } from '../../interfaces/mesa.interface';
import { Modal, Option } from '../../interfaces/modal.interface';
import { Personal } from '../../interfaces/personal.interface';
import { Articulo } from '../../interfaces/articulo.interface';
import { Ordenes } from '../../interfaces/ordenes.interfeace';
import { CafeteriaService } from '../../services/cafeteria.service';
import { Platillo } from '../../interfaces/platillo.interface';





@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  @Input()
  dataModal!: Modal;
  @Input() data: Mesa[]| Menu[]| Personal[]| Articulo[]| Ordenes[]| Platillo[] = [] ;
   newItem: Mesa[]| Menu[]| Personal[]| Articulo[]| Ordenes[]| Platillo[] = [];

  constructor(
    public dialog: MatDialog,
    private _cafeteriaServiceCreate: CafeteriaService
    ) { }

  ngOnInit(): void {
  }

  
  openDialog() {
    const dialogRef = this.dialog.open(OrdenesDialogComponent, {
      width: this.dataModal.width,
      height: this.dataModal.height,
      data: {
        title: this.dataModal.title,
        subtitle: this.dataModal.subtitle,
        content: this.dataModal.content,
        buttons: this.dataModal.buttons
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      
      
      
      result.find((element: any) => {
        if (element.element != 'checkbox') {
          
          this.newItem[element.name] = element.value;


        }else{
          
          this.newItem[element.name] = element.options.filter((element: Option) => element.value === true);
          
          
        }
          
        
   
        
      }
      );
      const newData  = {
        'id': this.data.length + 1,
        ...this.newItem
      };

      console.log(newData);
      this._cafeteriaServiceCreate.createItems(this.data, newData, this.dataModal.title);

      }
    
    );


  }

}
