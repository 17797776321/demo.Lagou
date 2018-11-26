import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.less']
})
export class StartComponent implements OnInit {
  @Input()
  private rating:number = 0;

  constructor() { }

  ngOnInit() {
  }

}
