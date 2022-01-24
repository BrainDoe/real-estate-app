import { ApiService } from './../../Services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  purpose1: string = 'RENT A HOME'
  title1: string = 'Rental Homes for ';
  title2: string = 'Everyone';
  desc1: string = 'Explore Apartments, Villas, Homes ';
  desc2: string = 'and more';
  buttonText: string = 'Explore Renting';
  linkName: string = '/search?purpose=for-rent';
  imageUrl: string = '';
  rentPurpose: string = 'for-rent'
  rentData: any[] = [];

  purpose2: string = 'BUY A HOME';
  title11: string = 'Find, Buy & Own Your ';
  title22: string = 'Dream Home';
  desc11: string = 'Explore Apartments, Villas, Homes ';
  desc22: string = 'and more';
  buttonText2: string = 'Explore Buying';
  linkName2: string = '/search?purpose=for-sale';
  imageUrl2: string = '';
  salePurpose: string = 'for-sale'
  saleData: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getHouseType(this.rentPurpose).subscribe((data) => {
      //@ts-ignore
      this.rentData = data.hits
      console.log(this.rentData);
    })

    this.apiService.getHouseType(this.salePurpose).subscribe((data) => {
      //@ts-ignore
      this.saleData = data.hits
      console.log(this.saleData);
    })
  }

}
