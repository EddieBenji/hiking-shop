import { Component, Input } from '@angular/core';
import { HikingArticle } from '../../models/hiking-article.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { addItemToShoppingCart } from '../../reducers/app.actions';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
    @Input()
    item: HikingArticle;

    constructor(private store$: Store<AppState>) {
    }

    addItemToShoppingList() {
        this.store$.dispatch(addItemToShoppingCart({ item: this.item }));
    }
}
