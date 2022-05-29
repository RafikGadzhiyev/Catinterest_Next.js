export interface ILink {
    name: string,
    path: string
}

export interface ICat {
    id: string,
    url: string,
    width: number,
    height: number
}

export type ReduxMainStore = {
    cats: Array<ICat>,
    favoriteCats: Array<ICat>
}
