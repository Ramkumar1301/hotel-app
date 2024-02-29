import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationListComponent } from '../reservation-list/reservation-list.component';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [
    ReservationListComponent,
    ReservationFormComponent,
   
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule,HomeModule],
})
export class ReservationModule {}
