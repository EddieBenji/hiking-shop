import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { AppState } from '../reducers/app.reducers';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

    // AppState
    constructor(private store$: Store<AppState>) {
    }

    ngOnInit() {
        this.store$.pipe(
            select((state: any) => state.appReducer)
        ).subscribe((state) => console.log('state: ', state));
    }

}
