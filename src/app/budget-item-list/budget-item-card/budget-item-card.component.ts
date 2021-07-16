import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { BudgetItemListComponent } from '../budget-item-list.component';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

  @Input()
  item!: BudgetItem;

  @Input() isPos: boolean = true;

  mobile: boolean = false;

  @Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();
  
  constructor(private _budgetItemList: BudgetItemListComponent) { }

  ngOnInit() {

    if(window.screen.width <= 850) {
      this.mobile = true;
    }

  }

  onXButtonClick() {
    this.xButtonClick.emit();
  }

  onCardClick() {
    this.cardClick.emit();
  }

  deleteBtnClicked() {
    this._budgetItemList.onDeleteButtonClicked(this.item);
  }

  editBtnClicked() {
    this._budgetItemList.onCardClicked(this.item);
  }

}
