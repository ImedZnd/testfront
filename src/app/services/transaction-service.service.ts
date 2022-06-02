import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TransactionServiceService {

  constructor(private httpClient: HttpClient) { }

  countAllCurrency() {
    return this.httpClient.get<number>("http://localhost:8081/currency/countCurrencies");
  }

  countAllTransactions() {
    return this.httpClient.get<number>("http://localhost:8081/transactions/countAll");
  }

  countAllTransactionsByState(state: string) {
    return this.httpClient.get<number>("http://localhost:8081/transactions/countState/" + state);
  }

  countAllTransactionsByType(type: string) {
    return this.httpClient.get<number>("http://localhost:8081/transactions/countType/" + type);
  }

  countAllTransactionsSource(source: string) {
    return this.httpClient.get<number>("http://localhost:8081/transactions/countSource/" + source);
  }

  countAllTransactionsMerchantCategory(merchantCategory: string) {
    return this.httpClient.get<number>("http://localhost:8081/transactions/countMerchantCategory/" + merchantCategory);
  }

  countAllTransactionsMerchantCountry(merchantCountry: string) {
    return this.httpClient.get<number>("http://localhost:8081/transactions/countMerchantCountry/" + merchantCountry);
  }

  countAllTransactionsEntryMethod(entryMethod: string) {
    return this.httpClient.get<number>("http://localhost:8081/transactions/countEntryMethod/" + entryMethod);
  }

  countAllTransactionsUserId(userId: string) {
    return this.httpClient.get<number>("http://localhost:8081/transactions/countUserId/" + userId);
  }

  countAllTransactionsFlag(flag: string) {
    return this.httpClient.get<number>("http://localhost:8081/transactions/countIsFlaged/" + flag);
  }

  countAllTransactionsYear(year: string) {
    return this.httpClient.get<number>("http://localhost:8081/transactions/countAllInYear/" + year);
  }

}
