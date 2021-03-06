import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { AppState } from '../reducers';
import { Observable } from 'rxjs';
import { HikingArticle } from '../models/hiking-article.model';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
    items$: Observable<HikingArticle[]>;

    constructor(private store$: Store<AppState>) {
    }

    ngOnInit() {
        this.items$ = this.store$.pipe(
            select(state => state.hiking.hikingArticles)
        );
    }
}
