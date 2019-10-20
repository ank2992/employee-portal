/**
 * This is custom compnent to display headers of application
 *
 */
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public title = 'Employee Portal';
  private user = 'Admin';

  constructor() { }

  ngOnInit() {
  }

}
