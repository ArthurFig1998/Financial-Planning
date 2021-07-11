import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-budget-calculator',
  templateUrl: './budget-calculator.component.html',
  styleUrls: ['./budget-calculator.component.scss']
})
export class BudgetCalculatorComponent implements OnInit {

  budgetItems: BudgetItem[] = new Array<BudgetItem>();

  totalBudget: number = 0;

  isBudget: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem(item: BudgetItem) {
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    this.totalBudget -= item.amount;
  }

}

export class isBudgetClass {
  isBudget: boolean = true;
}