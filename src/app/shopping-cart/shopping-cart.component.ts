import { Component, OnInit } from '@angular/core';
import { HikingArticle } from '../models/hiking-article.model';
import { select, Store } from '@ngrx/store';
import { AppState } from '../reducers';

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
    items: HikingArticle[];

    constructor(private store$: Store<AppState>) {
    }

    ngOnInit() {
        this.store$.pipe(
            select(state => state.hiking.articlesInShoppingCart)
        ).subscribe((articles) => this.items = articles);
    }

}
