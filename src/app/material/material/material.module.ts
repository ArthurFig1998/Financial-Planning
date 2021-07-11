import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule
  ],
  exports: [
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule
  ]
})
export class MaterialModule { }
