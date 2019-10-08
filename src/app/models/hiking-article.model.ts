// export interface HikingArticle {
//     id: string;
//     name: string;
//     description: string;
//     price: number;
// }

export class HikingArticle {
    constructor(public id: string, public name: string, public description: string, public price: number, public category: string,
                public photoURI: string) {
    }
}
