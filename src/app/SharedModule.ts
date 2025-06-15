import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // NgChartsModule         
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // NgChartsModule
  ]
})
export class SharedModule { }
