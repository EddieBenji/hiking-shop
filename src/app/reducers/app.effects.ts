import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as actions from '../reducers/app.actions';
import { HikingArticle } from '../models/hiking-article.model';
import { map } from 'rxjs/operators';

@Injectable()
export class AppEffects {

    private articlesFromBackend = [
        new HikingArticle(
            'POIEMD855SIUHSFH',
            'LUXUR Retro Duffel Cylinder Bag Canvas Travel Backpack Hiking Shoulder Handbag',
            'Padded and adjustable shoulder straps with breathable mesh back more comfortable',
            990.00, 'Bags',
            'https://www.trekkinn.com/f/13639/136390382/osprey-aether-ag-70l.jpg'
        ),
        new HikingArticle(
            'OIIJD909SDJJSKD',
            'Timotech Binoculares Prismáticos',
            '¡Vívelo de cerca! Los lentes Binoculares Prismáticos 10x25 Zoom BAK4 de Timotech poseen un lente prismático de 25 mm' +
            ' que proporciona un amplio campo de visión de 114M a una distancia de 1,000M incluso con luz verde.',
            549.00, 'Binoculares',
            'https://http2.mlstatic.com/50x-ejercito-militar-zoom-potente-prismaticos-hd-caza-campin-D_NQ_NP_847997-MLM31770616535_082019-F.webp'
        ),
        new HikingArticle(
            'BVDSKKSN75121SD8',
            'LNYF-OV Chaqueta Impermeable',
            'Chaqueta Soft Shell superficies están mejor protegidos contra el frío',
            1204.08, 'Jackets',
            'https://images.pexels.com/photos/2567960/pexels-photo-2567960.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        ),
        new HikingArticle(
            'OKDH79DKJFHNDMHF',
            'Northside Pioneer',
            'Botas de Senderismo de Piel de Media Altura para Mujer',
            789.62, 'Boots',
            'https://bingua.com/images/cotizacion_images/20180418_123135_4683.jpg.jpg'
        ),
        new HikingArticle(
            'NNVYFYUYDAMPFIFY',
            'TETON Sports',
            'TrailRunner 2.0 Hydration Pack; Backpack for Hiking, Running and Cycling; Free 2-Liter Hydration Bladder',
            482.40, 'TrailRunner',
            'https://i5.walmartimages.com/asr/ac63ece5-bc5b-4d39-9eab-84f27d5f17ad_1.334e407ccd44493e5a59ef3ec063c520.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF'
        ),
        new HikingArticle(
            'SHFIUHSFIUNKSUFYN',
            'Cascade Mountain Tech Aluminio',
            'Cierre rápido Bastones de Senderismo con Mango de Corcho',
            539.00, 'Misc',
            'https://images-na.ssl-images-amazon.com/images/I/81DwvJ1yDAL._SX466_.jpg'
        ),
        new HikingArticle(
            'IIFNNSDUYHJ897DKN',
            'Suunto Core',
            'Beautiful watch, perfect for hiking.',
            4878.81, 'Watch',
            'https://media.runnerclick.com/wp-content/uploads/2018/07/Suunto-Core-Graph-slider1400x900.jpg'
        ),
        new HikingArticle(
            'YYFS,NV8534SPOFNNG',
            'FILA Men\'s F-13',
            'Weather Tech Hiking Boot, Castlerock/Black/Dark Silver, 6.5 M US',
            581.69, 'Boots',
            'https://images-na.ssl-images-amazon.com/images/I/6190hxNGBrL._UX569_.jpg'
        ),
        new HikingArticle(
            'UUSNVMYD79SHNFLSOD',
            'X-nego Outdoor Equipment',
            'LED 5000 Lumens Headlamp Flashlight by USB Rechargeable, Waterproof Helmet Light for Camping, Mining, Running,Hiking and Reading',
            330.00, 'Misc',
            'https://images-na.ssl-images-amazon.com/images/I/41vntwIW4LL._SY450_.jpg'
        ),
        new HikingArticle(
            'IIMDJJSDHJVM784D',
            'YAH Bastones de Senderismo, multifuncionales, con luz LED\n',
            'Especificaciones: 5 secciones de tubos más un mango y otras herramientas (un juego); Peso: alrededor de 1,3 kg; Tamaño: 41 x 1,1 pulgadas (103 cm x 2,8 cm);',
            1480.00, 'Misc',
            'https://cdn.pixabay.com/photo/2017/09/14/17/10/mountain-2749711_960_720.jpg'
        )
    ];

    loadArticles$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.GET_ITEMS_REQUEST),
            map(() => {
                // let's sort the array randomly, so all items will appear in different positions:
                const itemsSorted = this.articlesFromBackend.sort(() => 0.5 - Math.random());
                return actions.getItemsSuccess({ items: itemsSorted });
            })
        )
    );

    constructor(private actions$: Actions) {
    }
}
