import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Book } from './book';

@Injectable()
export class BookService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private listBooksURL = 'api/books';

    listBk: Book[];

    constructor(private http: Http) { }

    getBookByID(id): Promise<Book> {

        return this.http.get(this.listBooksURL).toPromise()
            .then(response => {
                console.log('responseJson', response.json().data);
                this.listBk = response.json().data as Book[];
                return response.json().data as Book[];
            }).then(bks => {
                return bks.find(bk => bk.id == id);
            });
    }

    getBooksList(): Promise<Book[]> {
        return this.http.get(this.listBooksURL).toPromise()
            .then(response => {
                console.log('responseJson', response.json().data);
                this.listBk = response.json().data as Book[];
                return response.json().data as Book[];
            })
            .catch(this.handleError);
    }

    getBooksListByCategory(cat): Promise<Book[]> {
        if(cat == '' || cat == 'all') {
            return this.getBooksList();
        } else {
            return this.getBooksList().then(videos => videos.filter(vid => vid.category == cat));
        }
    }

    private handleError(error: any): Promise<any> {
        console.error('Error \(>.<\')', error);
        return Promise.reject(error.message || error);
    }
}