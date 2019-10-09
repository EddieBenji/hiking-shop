import { createAction, props } from '@ngrx/store';


import { HikingArticle } from '../models/hiking-article.model';


export const GET_ITEMS_REQUEST = '[Shopping Cart Component] GET_ITEMS_REQUEST';
const GET_ITEMS_SUCCESS = '[Shopping Cart Component] GET_ITEMS_SUCCESS';
const SELECT_ITEM_FOR_SHOPPING = '[Shopping Cart Component] SELECT_ITEM_FOR_SHOPPING';
const ADD_ITEM_TO_SHOPPING_CART = '[Shopping Cart Component] ADD_ITEM_TO_SHOPPING_CART';
const SAVE_ITEM_FOR_LATER = '[Shopping Cart Component] SAVE_ITEM_FOR_LATER';


export const getItemsRequest = createAction(GET_ITEMS_REQUEST);
export const getItemsSuccess = createAction(GET_ITEMS_SUCCESS, props<{ items: HikingArticle[] }>());
export const addItemToShoppingCart = createAction(ADD_ITEM_TO_SHOPPING_CART, props<{ item: HikingArticle }>());
export const selectItemForShopping = createAction(SELECT_ITEM_FOR_SHOPPING, props<{ item: HikingArticle }>());

