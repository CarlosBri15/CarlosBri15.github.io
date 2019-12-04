import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service'
import { Router } from '@angular/router';
import { Book } from '../interfaces/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor( private bookService: BookService, private router: Router ) { }

  ngOnInit() {
  }

  books: Book[];
  book: Book;

  getBooks(){
    this.bookService.getBooks().subscribe((response: Book[]) => {
      this.books = response;
      console.log(response);
    }, (err) => {
      alert('No books');
      console.log(err);
    })
  }

  getBookByTitle(data){
    this.bookService.getBookByTitle(data.value.title).subscribe((response: Book) => {
      this.book = response;
      console.log(response);
    }, (err) => {
      alert('Book not found');
      console.log(err);
    })
  }

  getBookByISBN(data){
    this.bookService.getBookByISBN(data.value.ISBN).subscribe((response: Book) => {
      this.book = response;
      console.log(response);
    }, (err) => {
      alert('Book not found');
      console.log(err);
    })
  }

  getBookByDescription(data){
    this.bookService.getBookByDescription(data.value.description).subscribe( (response: Book) => {
      this.book = response;
      console.log(response);
    }, (err) => {
      alert('Book not found');
      console.log(err);
    })
  }

  getBookByAuthor(data){
    this.bookService.getBookByAuthor(data.value.author).subscribe( (response: Book) => {
      this.book = response;
      console.log(response);
    }, (err) => {
      alert('Book not found');
      console.log(err);
    })
  }

  getBookByPublishDate(data){
    this.bookService.getBookByPublishDate(data.value.publishDate).subscribe( (response: Book) => {
      this.book = response;
      console.log(response);
    }, (err) => {
      alert('Book not found');
      console.log(err);
    })
  }

  getBookByPrice(data){
    this.bookService.getBookByPrice(data.value.price).subscribe( (response: Book) => {
      this.book = response;
      console.log(response);
    }, (err) => {
      alert('Book not found');
      console.log(err);
    })
  }

  getBookByPublisher(data){
    this.bookService.getBookByPublisher(data.value.publisher).subscribe( (response: Book) => {
      this.book = response;
      console.log(response);
    }, (err) => {
      alert('Book not found');
      console.log(err);
    });
  }
}
