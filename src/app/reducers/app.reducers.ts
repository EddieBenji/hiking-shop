import { createReducer, on } from '@ngrx/store';
import * as appActions from './app.actions';
import { HikingArticle } from '../models/hiking-article.model';

export interface AppState {
    hikingArticles: HikingArticle[];
    articlesInShoppingCart: HikingArticle[];
}

export const initialState: AppState = {
    hikingArticles: [
        new HikingArticle('POIEMD855SIUHSFH',
            'LUXUR Retro Duffel Cylinder Bag Canvas Travel Backpack Hiking Shoulder Handbag',
            'Padded and adjustable shoulder straps with breathable mesh back more comfortable',
            990.00),
        new HikingArticle('OIIJD909SDJJSKD',
            'Timotech Binoculares Prismáticos',
            '¡Vívelo de cerca! Los lentes Binoculares Prismáticos 10x25 Zoom BAK4 de Timotech poseen un lente prismático de 25 mm' +
            ' que proporciona un amplio campo de visión de 114M a una distancia de 1,000M incluso con luz verde.',
            549.00),
        new HikingArticle('BVDSKKSN75121SD8',
            'LNYF-OV Chaqueta Impermeable para Hombres',
            'Chaqueta Soft Shell superficies están mejor protegidos contra el frío',
            1204.08),
        new HikingArticle('BVDSKKSN75121SD8',
            'YAH Bastones de Senderismo, multifuncionales, con luz LED\n',
            'Especificaciones: 5 secciones de tubos más un mango y otras herramientas (un juego); Peso: alrededor de 1,3 kg; Tamaño: 41 x 1,1 pulgadas (103 cm x 2,8 cm);',
            1480.00)
    ],
    articlesInShoppingCart: []
};

const appReducer = createReducer(initialState,
    on(appActions.addItemToShoppingCart, (state: AppState, { item }) => {
        const articlesInShoppingCart = state.articlesInShoppingCart;
        articlesInShoppingCart.push(item);
        return {
            ...state,
            articlesInShoppingCart: [...articlesInShoppingCart]
        };
    })
);

export function AppReducer(state: AppState, action) {
    return appReducer(state, action);
}
