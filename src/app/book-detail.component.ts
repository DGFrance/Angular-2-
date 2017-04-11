import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { BookService } from './book.service';

import { Book } from './book';

@Component({
    selector: 'book-detail',
    providers: [ BookService ],
    templateUrl: './book-detail.component.html',
    styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

    book: Book;
    bookUrl: string;
    title;

    constructor(private bookService: BookService,
        private route: ActivatedRoute,
        private location: Location) { }

    ngOnInit():void {
        this.route.params
            .switchMap((params:Params) => this.bookService.getBookByID(params['id']))
            .subscribe(bk => {
                this.book = bk
                this.bookUrl = bk.imgurl;
            });
        
         
    }

    setVideo(vid:Book) {
        this.book = vid;
    }
}