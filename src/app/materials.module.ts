import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';

const MODULES = [ MatCardModule, MatToolbarModule, MatInputModule,
  MatFormFieldModule, MatListModule, MatIconModule, MatButtonModule, MatSliderModule,
MatMenuModule ]

@NgModule({
  imports: MODULES,
  exports: MODULES,
  declarations: []
})
export class MaterialsModule { }
