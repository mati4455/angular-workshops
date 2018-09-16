import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-datetime',
  template: `<div class="datetime">Today is: {{ currDateTime }}</div>`,
  styles: [`
    .datetime {
      text-align: center;
    }
  `]
})
export class CurrentDatetimeComponent implements OnInit {

  currDateTime: string;

  constructor() { }

  ngOnInit() {
    const currDate = new Date();
    this.currDateTime = `${currDate.toLocaleDateString()} ${currDate.toLocaleTimeString()}`;
  }

}
