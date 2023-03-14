import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { TransactionComponent } from './components/pages/transaction/transaction.component';
import { TransactionCrudComponent } from './components/pages/transaction-crud/transaction-crud.component';
import { TransactionAreaComponent } from './components/pages/transaction-area/transaction-area.component';
import { TransactionItemsComponent } from './components/pages/transaction-items/transaction-items.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

import localePT from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

registerLocaleData(localePT);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TransactionComponent,
    TransactionCrudComponent,
    TransactionAreaComponent,
    TransactionItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
