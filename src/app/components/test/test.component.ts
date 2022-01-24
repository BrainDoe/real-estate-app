import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input() data: any;
  @Input() data2: any;
  

  constructor() { }

  ngOnInit(): void {
  }

}
