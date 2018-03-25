import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IBook } from '../model/book'
import { HttpClient } from '@angular/common/http';
import { Constant } from '../utils/constant'
@Injectable()
export class BookService {
  booksSubject = new BehaviorSubject<IBook[]>([]);
  books : IBook[];
  constructor(private http: HttpClient) {
    // this.http.get<IBook[]>(Constant.API_GET_DATA).subscribe( data => {
    //   console.log(data)
    //   this.booksSubject.next(data);
    //   this.books = data;
    // })
    this.books = Constant.DATA;
    this.booksSubject.next(this.books);
  }
  edit(item : IBook) {
    let index = this.books.findIndex( book => book.id === item.id);
    this.books[index] = item;
    this.booksSubject.next(this.books)
    console.log(item)
  }
  remove(item: IBook) {
    this.books = this.books.filter( book => book !== item)
    this.booksSubject.next(this.books)
  }
  add(item : IBook) {
    this.books.push(item)
    this.booksSubject.next(this.books)
  }
}
