import { Component } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TransactionModel } from '../transaction-model';

@Component({
  selector: 'app-transaction-crud',
  templateUrl: './transaction-crud.component.html',
  styleUrls: ['./transaction-crud.component.css']
})
export class TransactionCrudComponent {
  transactions?: TransactionModel[]

  form = new FormGroup({
    date: new FormControl("", Validators.required),
    select: new FormControl("", Validators.required),
    title: new FormControl("", Validators.required),
    value: new FormControl("", Validators.required),

  });

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {

  }

  readAll(): void{
    this.transactionService.read().subscribe((transactions) => {
      this.transactions = transactions;
    })
  }

  createTransaction(): void {
    const data: any = this.form.value
    if (this.form.valid == true) {
      this.transactionService.create(data).subscribe(() => {
        this.transactionService.showMessage('Operação executada com sucesso !')
      })
      location.reload()
    } else {
      this.transactionService.showMessage('Campos obrigatórios !')
    }

  }

  updateTransactions(transactions: TransactionModel): void {
    this.transactionService.update(transactions).subscribe();
  }
/*
  deleteTransactions(transactions: TransactionModel): void{
    this.transactionService.delete(transactions.id?).subscribe(() => {
      this.readAll();
    })
  } */
}
