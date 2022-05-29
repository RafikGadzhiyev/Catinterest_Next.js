export type MenuItemProps = {
    name: string,
    path: string,
    id: number
}

export type CatItemProps = {
    id: string,
    imageData: {
        URL: string,
        width: number,
        height: number
    },
    isFav: boolean
}