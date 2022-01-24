import { Component, OnInit } from '@angular/core';
const data = [
  {id: 1, type: 'test 2'},
  {id: 2, type: 'test 2'},
  {id: 3, type: 'test 2'},
  {id: 4, type: 'test 2'},
]

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  data: any = data

  constructor() { }

  ngOnInit(): void {
  }

}
