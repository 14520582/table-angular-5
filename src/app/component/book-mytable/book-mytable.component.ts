import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { BookService } from '../../service/book.service';
import { IBook } from '../../model/book';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { MatDialog } from '@angular/material';
import { CurrencyPipe } from '@angular/common';
import * as moment from 'moment';
import { DatePipe } from '@angular/common';
import { MyDialogReactiveFormComponent } from '../my-dialog-reactive-form/my-dialog-reactive-form.component';

@Component({
  selector: 'app-book-mytable',
  templateUrl: './book-mytable.component.html',
  styleUrls: ['./book-mytable.component.scss']
})
export class BookMytableComponent implements OnInit {
  books : IBook[]
  constructor(
    private bookService: BookService,
    private dialog: MatDialog
  ) { 
    this.bookService.booksSubject.subscribe( data => {
      this.books = data;
    })
  }
  // 1: add, 0: edit
  openDialog(type : number, payload?: IBook) {
    this.dialog.open(MyDialogReactiveFormComponent, {data: {type: type, book: payload ? payload : null}});
  }
  onRemove(item : IBook) {
    this.bookService.remove(item)
  }
  ngOnInit() {
  }

}
