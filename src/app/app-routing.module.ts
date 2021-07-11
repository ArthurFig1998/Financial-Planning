import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BudgetCalculatorComponent } from './budget-calculator/budget-calculator.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NetworthComponent } from './networth/networth.component';

const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'budget', component: BudgetCalculatorComponent},
  { path: 'networth', component: NetworthComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
