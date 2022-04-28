import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { MdbFormsModule } from "mdb-angular-ui-kit/forms";
import { BookListComponent } from './book-search/book-list/book-list.component';
import { BookCountComponent } from './book-search/book-count/book-count.component';
import { BookListItemComponent } from './book-search/book-list/book-list-item/book-list-item.component';
import { BookListHeaderComponent } from './book-search/book-list/book-list-header/book-list-header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BookSearchComponent,
    BookListComponent,
    BookCountComponent,
    BookListItemComponent,
    BookListHeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MdbFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }