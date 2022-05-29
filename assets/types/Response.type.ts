import { ICat } from "./Data.type"

export type GetCatsResponseType = {
    cats: Array<ICat> | null,
    error?: any
}
