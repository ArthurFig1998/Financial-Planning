import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BudgetCalculatorComponent } from './budget-calculator/budget-calculator.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NetworthComponent } from './networth/networth.component';
import { CreditCardsComponent } from './credit-cards/credit-cards.component';
import { BankAccountsComponent } from './bank-accounts/bank-accounts.component';

const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'budget', component: BudgetCalculatorComponent},
  { path: 'networth', component: NetworthComponent},
  { path: 'credit-cards', component: CreditCardsComponent},
  { path: 'bank-accounts', component: BankAccountsComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
