import { stringify } from '@angular/compiler/src/util';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { isBudgetClass } from '../budget-calculator/budget-calculator.component';
import { EditItemComponent } from '../edit-item/edit-item.component';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})

export class BudgetItemListComponent implements OnInit {


  @Input() budgetItems: BudgetItem[] = new Array<BudgetItem>();
  @Input() networthItems: BudgetItem[] = new Array<BudgetItem>();

  totalBudget: number = 0;
  totalNetworth: number = 0;

  @Input() isBudget: boolean = true;
  isPos: boolean = true;

  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    if(this.isBudget == true) {
      this.budgetItems = JSON.parse(localStorage.getItem('Budget Items') || '[]');
      this.totalBudget = Number(JSON.parse(localStorage.getItem('Total Amount') || '[]'));
    } else if(this.isBudget == false) {
      this.networthItems = JSON.parse(localStorage.getItem('Networth Items') || '[]');
      this.totalNetworth = Number(JSON.parse(localStorage.getItem('Total Networth') || '[]'));
    }
  }

  addItemPos(newItem: BudgetItem) {
    if(this.isBudget == true) {
      if(newItem.amount >= 0) {
        this.budgetItems.push(newItem);
        this.totalBudget += newItem.amount;
      }
      localStorage.setItem('Budget Items', JSON.stringify(this.budgetItems));
      localStorage.setItem('Total Amount', JSON.stringify(this.totalBudget));
    } else if (this.isBudget == false) {
      if(newItem.amount >= 0) {
        this.networthItems.push(newItem);
        this.totalNetworth += newItem.amount;
      }
      localStorage.setItem('Networth Items', JSON.stringify(this.networthItems));
      localStorage.setItem('Total Networth', JSON.stringify(this.totalNetworth));
    }
    
  }

  addItemNeg(newItem: BudgetItem) {

    newItem.amount = newItem.amount * -1;
    if(this.isBudget == true) {
      if(newItem.amount < 0) {
        this.budgetItems.push(newItem);
        this.totalBudget += newItem.amount;
      }

      localStorage.setItem('Budget Items', JSON.stringify(this.budgetItems));
      localStorage.setItem('Total Amount', JSON.stringify(this.totalBudget));
    } else if (this.isBudget == false) {
      if(newItem.amount < 0) {
        this.networthItems.push(newItem);
        this.totalNetworth += newItem.amount;
      }
      localStorage.setItem('Networth Items', JSON.stringify(this.networthItems));
      localStorage.setItem('Total Networth', JSON.stringify(this.totalNetworth));
    }
    
    
  }

  onDeleteButtonClicked(item: BudgetItem) {    
    if(this.isBudget == true) {
      let index = this.budgetItems.indexOf(item);
      this.budgetItems.splice(index, 1);
      this.totalBudget -= item.amount;

      localStorage.setItem('Budget Items', JSON.stringify(this.budgetItems));
      localStorage.setItem('Total Amount', JSON.stringify(this.totalBudget));
    } else if (this.isBudget == false) {
      let index = this.networthItems.indexOf(item);
      this.networthItems.splice(index, 1);
      this.totalNetworth -= item.amount;
      localStorage.setItem('Networth Items', JSON.stringify(this.networthItems));
      localStorage.setItem('Total Networth', JSON.stringify(this.totalNetworth));
    }
    
  }

  onCardClicked(item: BudgetItem) {
    const dialogRef = this.dialog.open(EditItemComponent, {
      width: '540px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      if(this.isBudget == true) {
        if(result) {
          this.budgetItems[this.budgetItems.indexOf(item)] = result;
  
          this.totalBudget -= item.amount;
          this.totalBudget += result.amount;
        }
        
        localStorage.setItem('Budget Items', JSON.stringify(this.budgetItems));
        localStorage.setItem('Total Amount', JSON.stringify(this.totalBudget));
      } else if (this.isBudget == false) {
        if(result) {
          this.networthItems[this.networthItems.indexOf(item)] = result;
  
          this.totalNetworth -= item.amount;
          this.totalNetworth += result.amount;
        }

        localStorage.setItem('Networth Items', JSON.stringify(this.networthItems));
        localStorage.setItem('Total Networth', JSON.stringify(this.totalNetworth));
      }
    })
  }

}
