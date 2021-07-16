import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})


export class NavigationComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  public constructor(private titleService: Title) { }

  ngOnInit(): void {
  }

  public onToggleSidenav = () => { 
    this.sidenavToggle.emit();
  }
  
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

}