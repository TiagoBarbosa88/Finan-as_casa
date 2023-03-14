import { Component, OnInit } from '@angular/core';
import { TransactionModel } from '../transaction-model';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-items',
  templateUrl: './transaction-items.component.html',
  styleUrls: ['./transaction-items.component.css']
})
export class TransactionItemsComponent implements OnInit{
  transactions: TransactionModel[] = [];
  displayedColumns =  ['id', 'date','category','title', 'value', 'actions'];

  constructor(private transactionService: TransactionService ){}

  ngOnInit(): void {
  this.transactionService.read().subscribe(transactions => {
    this.transactions = transactions

  })
  }

}


