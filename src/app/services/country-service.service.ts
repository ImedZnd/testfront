import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {

  constructor(private httpClient: HttpClient) { }

  getAllCountry() {
    return this.httpClient.get<any[]>("http://localhost:8082/country/all");
  }

  getAllPersonInAllCountry() {
    return this.httpClient.get<any[]>("http://localhost:8082/county/allPersonInAllCountry");
  }

  getCountyByCode(code: string) {
    return this.httpClient.get<any[]>("http://localhost:8082/county/code/" + code);
  }

  fraudPerCountryCode(code: string) {
    return this.httpClient.get<any[]>("http://localhost:8082/county/fraudPerCountry/" + code);
  }

  personPerCountry() {
    return this.httpClient.get<any[]>("http://localhost:8082/county/personPerCountry");
  }

}
