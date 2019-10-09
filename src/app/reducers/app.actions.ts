import { createAction, props } from '@ngrx/store';

import { HikingArticle } from '../models/hiking-article.model';


export const GET_ITEMS_REQUEST = '[Shopping Cart Component] GET_ITEMS_REQUEST';
const GET_ITEMS_SUCCESS = '[Shopping Cart Component] GET_ITEMS_SUCCESS';

const ADD_ITEM_TO_SHOPPING_CART = '[Shopping Cart Component] ADD_ITEM_TO_SHOPPING_CART';
const REMOVE_ITEM_FROM_SHOPPING_CART = '[Shopping Cart Component] REMOVE_ITEM_FROM_SHOPPING_CART';
const EMPTY_SHOPPING_CART = '[Shopping Cart Component] EMPTY_SHOPPING_CART';

const SELECT_OR_DESELECT_ITEM_FOR_SHOPPING = '[Shopping Cart Component] SELECT_OR_DESELECT_ITEM_FOR_SHOPPING';


export const getItemsRequest = createAction(GET_ITEMS_REQUEST);
export const getItemsSuccess = createAction(GET_ITEMS_SUCCESS, props<{ items: HikingArticle[] }>());

export const addItemToShoppingCart = createAction(ADD_ITEM_TO_SHOPPING_CART, props<{ item: HikingArticle }>());
export const removeItemFromShoppingCart = createAction(REMOVE_ITEM_FROM_SHOPPING_CART, props<{ item: HikingArticle }>());
export const emptyShoppingCart = createAction(EMPTY_SHOPPING_CART);

export const selectOrDeselectItemForShopping = createAction(SELECT_OR_DESELECT_ITEM_FOR_SHOPPING, props<{ articleID: string, isSelected: boolean }>());

