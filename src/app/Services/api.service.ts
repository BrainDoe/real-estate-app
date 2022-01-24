import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'



const options = {
  headers: new HttpHeaders({
    'x-rapidapi-host': 'bayut.p.rapidapi.com',
    'x-rapidapi-key': '6cadf07479msh7ba01f0746630f1p1ee583jsn0673dbe2db47'
  }),
  // params: {query: 'abu dhabi', hitsPerPage: '8', page: '0', lang: 'en'},
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  /*
    var axios = require("axios").default;

    var options = {
      method: 'GET',
      url: 'https://bayut.p.rapidapi.com/auto-complete',
      params: {query: 'abu dhabi', hitsPerPage: '25', page: '0', lang: 'en'},
      headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': '6cadf07479msh7ba01f0746630f1p1ee583jsn0673dbe2db47'
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  */
  baseUrl: string = 'https://bayut.p.rapidapi.com';

  constructor(private http: HttpClient) { }

  getHouseType(purpose: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/properties/list?locationExternalIDs=5002&purpose=${purpose}&hitsPerPage=8`, options).pipe(map((data: any) => data));
  }

  fiterProperties(locationIDs: string, purpose: string, categoryExternalID: string, bathsMin: string, rentFrequency: string, priceMin: string, maxPrice: string, roomsMin: string, sort: string, areaMax: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/properties/list?locationExternalIDs=${locationIDs}&${purpose}&${categoryExternalID}&${bathsMin}&${rentFrequency}&${priceMin}&${maxPrice}&${roomsMin}&${sort}&${areaMax}`, options).pipe(map((data) => data));
  }

  propertyDetails(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/properties/detail?externalID=${id}`, options).pipe(map((data: any) => data));
  }


}
