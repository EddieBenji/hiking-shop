import { createReducer, on } from '@ngrx/store';
import * as appActions from './app.actions';
import { HikingArticle } from '../models/hiking-article.model';

export interface HikingState {
    hikingArticles: HikingArticle[];
    itemsToBuy: HikingArticle[];
}

export const initialState: HikingState = {
    hikingArticles: [],
    itemsToBuy: []
};

const hikingReducer = createReducer(initialState,
    on(appActions.getItemsSuccess, (state: HikingState, { items }) => {
        return {
            ...state,
            hikingArticles: [ ...items ]
        };
    }),
    on(appActions.addItemToShoppingCart, (state: HikingState, { item }) => {
        const articlesInShoppingCart = [ ...state.itemsToBuy ];
        // verify if the items is already added:
        const foundArticle = articlesInShoppingCart.find((art: HikingArticle) => art.id === item.id);
        if (foundArticle !== undefined) {
            // no change in the state then.
            return state;
        }
        // then add it to the array:
        articlesInShoppingCart.push(item);
        return {
            ...state,
            itemsToBuy: [ ...articlesInShoppingCart ]
        };
    }),
    on(appActions.selectItemForShopping, (state: HikingState, { item }) => {
        const selectedArticleIndex = state.hikingArticles.findIndex((a) => a.id === item.id);
        const articleUpdated = {
            ...state.hikingArticles[selectedArticleIndex],
            isAddedToTheCart: true
        };
        const articles = [
            ...state.hikingArticles.slice(0, selectedArticleIndex),
            articleUpdated,
            ...state.hikingArticles.slice(selectedArticleIndex + 1)
        ];
        return {
            ...state,
            hikingArticles: [ ...articles ]
        };
    })
);

export function HikingReducer(state: HikingState, action) {
    return hikingReducer(state, action);
}
