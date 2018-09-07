import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ListEmployeesComponent } from '../employees/list-employees.component';
import { CreateEmployeeComponent } from '../employees/create-employee.component';

import { MaterialsModule } from '../materials.module';

 // Import RouterModule
 import { RouterModule,Routes } from '@angular/router';

  // Each route maps a URL path to a component
// The 3rd route specifies the route to redirect to if the path
// is empty. In our case we are redirecting to /list
 
// pathMatch property value can be full or prefix. For now we 
// will set it to full as we want to do a full match
const appRoutes: Routes = [
  { path: 'list', component: ListEmployeesComponent },
  { path: 'create', component: CreateEmployeeComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [LayoutComponent, 
    HeaderComponent, 
    FooterComponent,
    MainContentComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent],
  exports: [LayoutComponent]
})
export class UiModule { }
