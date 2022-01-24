import { Component, OnInit } from '@angular/core';

const data = [
  {id: 1, type: 'test'},
  {id: 2, type: 'test'},
  {id: 3, type: 'test'},
  {id: 4, type: 'test'},
]

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  data: any = data

  constructor() { }

  ngOnInit(): void {
  }

}
