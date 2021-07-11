import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-networth',
  templateUrl: './networth.component.html',
  styleUrls: ['./networth.component.scss']
})
export class NetworthComponent implements OnInit {

  isBudget: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
