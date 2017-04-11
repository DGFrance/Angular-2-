import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import { AsyncPipe } from '@angular/common';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { BookSearchService } from './book-search.service';
import { Book } from './book';

@Component({
    selector: 'book-search',
    providers: [ BookSearchService ],
    templateUrl: './book-search.component.html',
    styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {
    books: Observable<Book[]>;
    private searchTerms = new Subject<string>();

    constructor(private bookSearchService:BookSearchService, private router:Router) {}

    search(term: string) {
        this.searchTerms.next(term);
    }

    ngOnInit() { 
        this.books = this.searchTerms
                            .debounceTime(300)
                            .distinctUntilChanged()
                            .switchMap(term => term ? this.bookSearchService.search(term) : Observable.of<Book[]>([]))
                            .catch(error => {
                                console.log('error search', error);
                                return Observable.of<Book[]>([]);
                            });
    }

    detail(book:Book) {
        let link = ['/detail', book.id];
        this.router.navigate(link);
    }
}