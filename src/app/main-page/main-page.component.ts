import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  
  public constructor(private titleService: Title) { }

  ngOnInit(): void {
  }
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }


}
