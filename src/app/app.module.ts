import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BudgetCalculatorComponent } from './budget-calculator/budget-calculator.component';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { BudgetItemListComponent } from './budget-item-list/budget-item-list.component';
import { BudgetItemCardComponent } from './budget-item-list/budget-item-card/budget-item-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterContentComponent } from './footer-content/footer-content.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { NetworthComponent } from './networth/networth.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { CreditCardsComponent } from './credit-cards/credit-cards.component';
import { BankAccountsComponent } from './bank-accounts/bank-accounts.component';
// import { RoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    BudgetCalculatorComponent,
    AddItemFormComponent,
    BudgetItemListComponent,
    BudgetItemCardComponent,
    NavigationComponent,
    FooterContentComponent,
    SidenavListComponent,
    NetworthComponent,
    EditItemComponent,
    CreditCardsComponent,
    BankAccountsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatToolbarModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule
  ],
  providers: [Title],
  entryComponents: [EditItemComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
