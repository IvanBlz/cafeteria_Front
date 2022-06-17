import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';

import {MaterialExampleModule} from '../../../material.module';


import { InventarioComponent } from './pages/inventario/inventario.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MesasComponent } from './pages/mesas/mesas.component';
import { OrdenesComponent } from './pages/ordenes/ordenes.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ModalComponent } from './components/modal/modal.component';
import { SearchComponent } from './components/search/search.component';
import { TableComponent } from './components/table/table.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { OrdenesDialogComponent } from './components/ordenes-dialog/ordenes-dialog.component';
import { PlatillosComponent } from './pages/platillos/platillos.component';
import { OrdenesListComponent } from './components/ordenes-list/ordenes-list.component';



@NgModule({
  declarations: [
    InventarioComponent,
    MenuComponent,
    MesasComponent,
    OrdenesComponent,
    PersonalComponent,
    DashboardComponent,
    ModalComponent,
    SearchComponent,
    TableComponent,
    ButtonsComponent,
    OrdenesDialogComponent,
    PlatillosComponent,
    OrdenesListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MaterialExampleModule
  ],
  exports: [
    InventarioComponent,
    MenuComponent,
    MesasComponent,
    OrdenesComponent,
    PersonalComponent
  ]
})
export class CafeteriaModule { }
