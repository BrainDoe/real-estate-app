import { ApiService } from './../../Services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }
  id!: string;;
  propertyDetails: any;

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.id = param['id'];
    });

    this.apiService.propertyDetails(this.id).subscribe((data: any) => {
      this.propertyDetails = data
    })
  }

}
