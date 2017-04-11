import { Component, OnInit } from '@angular/core';

import { BookService } from './book.service';

import { Book } from './book';

@Component({
    selector: 'home',
    providers: [ BookService ],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
    books: Book[];
    category: string;

    constructor(private bookService: BookService) { }

    ngOnInit(): void {
        // throw new Error('Method not implemented.');
        this.category = 'all';
        this.getBooksList();
    }

    getBooksList() {
        this.bookService.getBooksList().then(books => this.books = books);
    }

    getBooksListByCategory(cat) {
        this.category = cat;
        this.bookService.getBooksListByCategory(cat).then(books => this.books = books);
    }
}