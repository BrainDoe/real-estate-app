import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  @Input() rentProperty: any;
  @Input() saleProperties: any;

  @Input() filterProperty: any;

  constructor() { }

  ngOnInit(): void {
  }

}
