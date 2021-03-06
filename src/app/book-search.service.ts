import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Book } from './book';

@Injectable()
export class BookSearchService {
    constructor(private http:Http) {}

    search(term:string):Observable<Book[]> {
        return this.http.get('api/books').map(response => 
            (response.json().data as Book[]).filter(bk => (bk.title).toLowerCase().search(term.toLowerCase()) >= 0)
        );
    }
}