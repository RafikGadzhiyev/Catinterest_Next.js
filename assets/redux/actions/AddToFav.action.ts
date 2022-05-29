import { Action } from "redux"
import { ICat } from "../../types/Data.type"

interface AddToFavAction extends Action {
    payload: {
        cat: ICat
    }
}

export const AddToFav = (cat: ICat): AddToFavAction => {
    return {
        type: "ADD_TO_FAVORITES",
        payload: {
            cat
        }
    }
}