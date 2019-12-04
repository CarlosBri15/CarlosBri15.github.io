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
    return this.http.get(`http://localhost:3000/book/${data}`);
  }

  getBookByISBN(data){
    return this.http.get(`http://localhost:3000/book/${data}`);
  }

  getBookByDescription(data){
    return this.http.get(`http://localhost:3000/book/${data}`);
  }

  getBookByAuthor(data){
    return this.http.get(`http://localhost:3000/book/${data}`);
  }

  getBookByPublishDate(data){
    return this.http.get(`http://localhost:3000/book/${data}`);
  }

  getBookByPrice(data){
    return this.http.get(`http://localhost:3000/book/${data}`);
  }

  getBookByPublisher(data){
    return this.http.get(`http://localhost:3000/book/publisher${data}`);
  }
}
