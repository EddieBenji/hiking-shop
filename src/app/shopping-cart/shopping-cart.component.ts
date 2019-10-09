import { Component, OnInit } from '@angular/core';
import { HikingArticle } from '../models/hiking-article.model';
import { select, Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { emptyShoppingCart } from '../reducers/app.actions';
import { Router } from '@angular/router';

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: [ './shopping-cart.component.scss' ]
})
export class ShoppingCartComponent implements OnInit {
    items: HikingArticle[];

    constructor(private store$: Store<AppState>,
                private router: Router) {
    }

    ngOnInit() {
        this.store$.pipe(
            select(state => state.hiking.itemsToBuy)
        ).subscribe((articles) => this.items = articles);
    }

    emptyCart() {
        this.store$.dispatch(emptyShoppingCart());
        this.router.navigateByUrl('/articles');
    }

}
