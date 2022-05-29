import { Action } from 'redux';
import { ICat } from '../../types/Data.type';

interface RemoveFavoriteAction extends Action {
    payload: {
        cat: ICat
    }
}

export const RemoveFavorite = (cat: ICat): RemoveFavoriteAction => {
    return {
        type: 'REMOVE_FAVORITE_CAT',
        payload: {
            cat
        }
    }
}

export const RemoveFavoriteFromStorage = (cat: ICat): RemoveFavoriteAction => {
    return {
        type: "REMOVE_FAVORITE_CAT_FROM_STORAGE",
        payload: {
            cat
        }
    }
}