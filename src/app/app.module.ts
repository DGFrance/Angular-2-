import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api'; // built-in
import { InMemoryDataService } from './in-memory-data.service'; // custom

// router
import { AppRoutingModule } from './app-routing.module';

// pipe
import { SafePipe } from './safe.pipe';

// component
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { BookDetailComponent } from './book-detail.component';
import { BookSearchComponent } from './book-search.component';

// service
import { BookService } from './book.service';
import { BookSearchService } from './book-search.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SafePipe,
    BookDetailComponent,
    BookSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
