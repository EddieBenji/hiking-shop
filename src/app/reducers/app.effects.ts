import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as actions from '../reducers/app.actions';
import { HikingArticle } from '../models/hiking-article.model';
import { map, mergeMap } from 'rxjs/operators';

@Injectable()
export class AppEffects {

    private articlesFromBackend = [
        new HikingArticle('POIEMD855SIUHSFH',
            'LUXUR Retro Duffel Cylinder Bag Canvas Travel Backpack Hiking Shoulder Handbag',
            'Padded and adjustable shoulder straps with breathable mesh back more comfortable',
            990.00, 'Bags',
            'https://www.trekkinn.com/f/13639/136390382/osprey-aether-ag-70l.jpg'),
        new HikingArticle('OIIJD909SDJJSKD',
            'Timotech Binoculares Prismáticos',
            '¡Vívelo de cerca! Los lentes Binoculares Prismáticos 10x25 Zoom BAK4 de Timotech poseen un lente prismático de 25 mm' +
            ' que proporciona un amplio campo de visión de 114M a una distancia de 1,000M incluso con luz verde.',
            549.00, 'Binoculares',
            'https://http2.mlstatic.com/50x-ejercito-militar-zoom-potente-prismaticos-hd-caza-campin-D_NQ_NP_847997-MLM31770616535_082019-F.webp'),
        new HikingArticle('BVDSKKSN75121SD8',
            'LNYF-OV Chaqueta Impermeable',
            'Chaqueta Soft Shell superficies están mejor protegidos contra el frío',
            1204.08, 'Jackets',
            'https://images.pexels.com/photos/2567960/pexels-photo-2567960.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
        new HikingArticle('IIMDJJSDHJVM784D',
            'YAH Bastones de Senderismo, multifuncionales, con luz LED\n',
            'Especificaciones: 5 secciones de tubos más un mango y otras herramientas (un juego); Peso: alrededor de 1,3 kg; Tamaño: 41 x 1,1 pulgadas (103 cm x 2,8 cm);',
            1480.00, 'Misc',
            'https://cdn.pixabay.com/photo/2017/09/14/17/10/mountain-2749711_960_720.jpg')
    ];

    loadArticles$ = createEffect(() => this.actions$.pipe(
        ofType(actions.GET_ITEMS_REQUEST),
        map(() => {
            return actions.getItemsSuccess({ items: this.articlesFromBackend });
        })
        )
    );

    constructor(private actions$: Actions) {
    }
}
