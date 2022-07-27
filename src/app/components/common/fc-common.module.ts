import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table/data-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab.component';



@NgModule({
  declarations: [DataTableComponent, TabsComponent, TabComponent],
  exports: [DataTableComponent, TabsComponent, TabComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ], schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FCCommonModule { }
