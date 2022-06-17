import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './cafeteria/pages/dashboard/dashboard.component';
import { OrdenesComponent } from './cafeteria/pages/ordenes/ordenes.component';
import { PersonalComponent } from './cafeteria/pages/personal/personal.component';
import { InventarioComponent } from './cafeteria/pages/inventario/inventario.component';
import { MenuComponent } from './cafeteria/pages/menu/menu.component';
import { MesasComponent } from './cafeteria/pages/mesas/mesas.component';
import { PlatillosComponent } from './cafeteria/pages/platillos/platillos.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'full'
},
{
  path: 'ordenes',
  component: OrdenesComponent,
},
{
  path: 'personal',
  component: PersonalComponent,
},
{
  path: 'inventario',
  component: InventarioComponent,
},
{
  path: 'platillo',
  component: PlatillosComponent,
},
{
  path: 'menu',
  component: MenuComponent,
},
{
  path: 'mesas',
  component: MesasComponent,
},
{
  path: '**',
  redirectTo: '',
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
