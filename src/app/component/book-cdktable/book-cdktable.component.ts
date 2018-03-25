import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MatDialog } from '@angular/material';
import { BookService } from '../../service/book.service';
import { IBook } from '../../model/book';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { MyDialogReactiveFormComponent } from '../my-dialog-reactive-form/my-dialog-reactive-form.component';
import { CurrencyPipe } from '@angular/common';
import * as moment from 'moment';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-book-cdktable',
  templateUrl: './book-cdktable.component.html',
  styleUrls: ['./book-cdktable.component.scss']
})
export class BookCdktableComponent implements OnInit, OnDestroy {
  displayedColumns = ['id', 'name', 'author', 'price', 'releasedate', 'genre', 'actions'];
  dataSource : MyDataSource | null
  constructor(
    private bookService : BookService,
    private dialog: MatDialog
  ) { 
    this.dataSource = new MyDataSource(bookService)
  }
  // 1: add, 0: edit
  openDialog(type : number, payload?: IBook) {
    this.dialog.open(MyDialogReactiveFormComponent, {data: {type: type, book: payload ? payload : null}});
  }
  onRemove(item : IBook) {
    this.bookService.remove(item)
  }
  ngOnDestroy () {
  }
  ngOnInit() {
  }

}
export class MyDataSource extends DataSource<any> {
  constructor(private bookService : BookService) {
    super();
  }
  connect(): Observable<IBook[]> {
    return this.bookService.booksSubject;
  }

  disconnect() {}
}
