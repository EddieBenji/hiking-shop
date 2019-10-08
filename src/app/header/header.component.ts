import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HikingArticle } from '../models/hiking-article.model';
import { select, Store } from '@ngrx/store';
import { AppState } from '../reducers';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    items$: Observable<HikingArticle[]>;

    constructor(private store$: Store<AppState>) {
    }

    ngOnInit() {
        this.items$ = this.store$.pipe(
            select(state => state.hiking.articlesInShoppingCart)
        );
    }

}
