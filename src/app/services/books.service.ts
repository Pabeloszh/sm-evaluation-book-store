import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Book } from './book.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private books: Book[] = [];
  private count: number = 0;
  private loading: boolean = false;
  
  constructor(private httpClient: HttpClient) { }

  async fetchData(title: string): Promise<void>{
    this.loading = true;
    await this.httpClient.get(`http://openlibrary.org/search.json?title=${title}`)
      .subscribe(
        (res: any) => {
          this.count = res.docs.length;
          this.books = res.docs;
          this.loading = false;
        }, 
        (error: any) => {
          console.log(error)
        }
      )
  }
  getBooks(): Book[]{
    return this.books
  }
  getCount(): number{
    return this.count
  }
  getLoading(): boolean{
    return this.loading
  }
}
