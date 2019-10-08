import { Component, Input } from '@angular/core';
import { HikingArticle } from '../../models/hiking-article.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { addItemToShoppingCart, selectItemForShopping } from '../../reducers/app.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
    @Input()
    item: HikingArticle;
    @Input()
    isInCart = false;

    constructor(private store$: Store<AppState>,
                private _snackBar: MatSnackBar) {
    }

    addItemToShoppingList() {
        this.store$.dispatch(addItemToShoppingCart({ item: this.item }));
        this.store$.dispatch(selectItemForShopping({ item: this.item }));
        this._snackBar.open('Item added to the cart', '', {
            duration: 2000,
        });
    }
}
