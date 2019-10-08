import { createAction, props } from '@ngrx/store';


import { HikingArticle } from '../models/hiking-article.model';


const ADD_ITEM_TO_SHOPPING_CART = '[Shopping Cart Component] ADD_ITEM_TO_SHOPPING_CART';
const SAVE_ITEM_FOR_LATER = '[Shopping Cart Component] SAVE_ITEM_FOR_LATER';


export const addItemToShoppingCart = createAction(ADD_ITEM_TO_SHOPPING_CART, props<{ item: HikingArticle }>());
