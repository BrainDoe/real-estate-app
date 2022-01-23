import { ApiService } from './../../Services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchFilters: boolean = false;
  properties: any[] = []

  purpose!: string;
  rentFrequency!: string;
  minPrice!: any;
  maxPrice!: any;
  rooomsMin!: any;
  bathsMin!: any;
  sort!: any;
  areaMax!: any;
  locationExternalIDs!: any;
  categoryExternalID!: any;


  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((param) => {
      this.purpose = param['purpose'] || 'for-rent';
      this.rentFrequency = param['rentFrequency'] || 'yearly';
      this.minPrice = param['minPrice'] || '0';
      this.maxPrice = param['maxPrice'] || '1000000';
      this.rooomsMin = param['roomsMin'] || '0';
      this.bathsMin = param['bathsMin'] || '0';
      this.sort = param['sort'] || 'price-desc';
      this.areaMax = param['areaMax'] || '35000';
      this.locationExternalIDs = param['locationExternalIDs'] || '5002';
      this.categoryExternalID = param['categoryExternalID'] || '4';
    });

    this.apiService.fiterProperties(this.locationExternalIDs, this.purpose, this.categoryExternalID, this.bathsMin, this.rentFrequency, this.minPrice, this.maxPrice, this.rooomsMin, this.sort, this.areaMax).subscribe((data: any) => {
      this.properties = data.hits;
      console.log(this.properties);
    })
  }

  setSearchFilters() {
    this.searchFilters = !this.searchFilters;
  }

}
