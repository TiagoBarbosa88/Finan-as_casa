import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionModel } from './transaction-model';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  baseUrl = 'http://localhost:3001/items';



  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    })
  }

  getTransactions(): Observable <TransactionModel[]> {
    return this.http.get<TransactionModel[]>(this.baseUrl)
  }

  create(transaction: TransactionModel): Observable<TransactionModel> {
    return this.http.post<TransactionModel>(this.baseUrl, transaction)
  }

  read(): Observable<TransactionModel[]> {
    return this.http.get<TransactionModel[]>(this.baseUrl)
  }

  update(transactions: TransactionModel) {
    const id = transactions.id;
    const url = `${this.baseUrl}/${id}`;
    return this.http.put(url, transactions)
  }

/*   delete(id: number): Observable<TransactionModel[]>{
      return this.http.delete<TransactionModel[]>(`${this.baseUrl}/${id}`;);
  }

 */
}
