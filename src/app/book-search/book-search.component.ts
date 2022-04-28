import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
import { FormBuilder } from "@angular/forms"
@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {
  searchForm = this.formBuilder.group({
    searchInput: 'Jack Reacher'
  });

  constructor(public booksService: BooksService, public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.booksService.fetchData(this.titleConverter(this.searchForm.value.searchInput))
  }

  titleConverter(payload: string): string{
    return payload.replace(/\s+/g, '+')
  }

  onSubmit(e:Event): void{
    e.preventDefault()
    this.booksService.fetchData(this.titleConverter(this.searchForm.value.searchInput))
  }

}