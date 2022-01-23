import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  @Input() saleData!: any[]
  @Input() rentData!: any[]

  salesProps: any;

  constructor() { }

  ngOnInit(): void {
    // this.saleData.map((data: any) => {
    //   this.salesProps = data
    //   console.log(this.salesProps);
    // })
  }

}
