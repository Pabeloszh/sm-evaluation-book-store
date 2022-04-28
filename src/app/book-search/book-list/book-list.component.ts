import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/services/book.interface';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  providers: [BooksService]
})
export class BookListComponent implements OnInit {
  @Input() books: Book[] = [];

  constructor(public booksService: BooksService) { }

  ngOnInit(): void {
  }

  splitWithComma(payload: string[] | number[]): string{
    return payload.join(', ') || ''
  }
}
