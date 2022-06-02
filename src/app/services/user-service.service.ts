import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {anySymbolName} from "@angular/core/schematics/migrations/typed-forms/util";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient: HttpClient) { }

  getAllPerson() {
    return this.httpClient.get<any[]>("http://localhost:8082/person/all");
  }

  kycAndNumber() {
    return this.httpClient.get<any[]>("http://localhost:8082/person/kycAndNumber");
  }

  stateAndCount() {
    let x: any[] = []
    this.httpClient.get<any[]>("http://localhost:8082/person/stateAndCount").subscribe(data=>{
      x.push(data);console.log(data)
    });
    return x
  }

  countAllPerson() {
    return this.httpClient.get<number>("http://localhost:8082/person/countAllPerson");
  }

  countAllPersonByState(state:string) {
    return this.httpClient.get<number>("http://localhost:8082/person/countAllPersonByState/"+state);
  }

  countAllUsersByIsFraud(isFraud:boolean) {
    return this.httpClient.get<number>("http://localhost:8082/person/countAllUsersByIsFraud/"+isFraud);
  }

  countAllUsersByCountry(countryCode:string) {
    return this.httpClient.get<number>("http://localhost:8082/person/countAllUsersByCountry/"+countryCode);
  }

  countAllUsersByKYC(KYC:string) {
    return this.httpClient.get<number>("http://localhost:8082/person/countByKYC/"+KYC);
  }

  countAllFlags() {
    return this.httpClient.get<number>("http://localhost:8082/person/countAllFlags");
  }

  countAllByHasEmail(b: boolean) {
    return this.httpClient.get<number>("http://localhost:8082/person/countAllUsersByHasEmail/"+b);
  }

  countAllUsersByYear(number: number) {
    return this.httpClient.get<number>("http://localhost:8082/person/countAllUsersByYear/"+number);
  }

}
