import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Input() purpose1!: string;
  @Input() purpose2!: string;
  @Input() title1!: string;
  @Input() title2!: string;
  @Input() desc1!: string ;
  @Input() desc2!: string
  @Input() buttonText!: string;
  @Input() linkName!: string;
  @Input() imageUrl!: string;

  @Input() purpose11!: string;
  @Input() purpose22!: string;
  @Input() title11!: string;
  @Input() title22!: string;
  @Input() desc11!: string ;
  @Input() desc22!: string
  @Input() buttonText2!: string;
  @Input() linkName2!: string;
  @Input() imageUrl2!: string;

  @Input() saleData!: any[]
  @Input() rentData!: any[]

  
  constructor() { }

  ngOnInit(): void {
  }

}
