import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor( private http: HttpClient ) { }

  getBooks(){
    return this.http.get('http://localhost:3000/book');
  }

  getBookByTitle(data){
    return this.http.get('http://localhost:3000/book/title', data);
  }

  getBookByISBN(data){
    return this.http.get('http://localhost:3000/book/ISBN', data);
  }

  getBookByDescription(data){
    return this.http.get('http://localhost:3000/book/description', data);
  }

  getBookByAuthor(data){
    return this.http.get('http://localhost:3000/book/author', data);
  }

  getBookByPublishDate(data){
    return this.http.get('http://localhost:3000/book/publishDate', data);
  }

  getBookByPrice(data){
    return this.http.get('http://localhost:3000/book/price', data);
  }

  getBookByPublisher(data){
    return this.http.get('http://localhost:3000/book/publisher', data);
  }
}
