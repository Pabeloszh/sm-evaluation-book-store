import { Component, Input, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-count',
  templateUrl: './book-count.component.html',
  styleUrls: ['./book-count.component.scss']
})
export class BookCountComponent implements OnInit {
  constructor(public booksService: BooksService) { }

  ngOnInit(): void {
  }

}
