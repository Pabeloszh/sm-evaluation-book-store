import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/services/book.interface';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.scss']
})
export class BookListItemComponent implements OnInit {
  @Input() book!: Book;
  @Input() i!: number;
  
  constructor() { }

  ngOnInit(): void {
  }

  separateWithComma(payload: string[] | number[] = []): string{
    return payload.join(', ')
  }
}
