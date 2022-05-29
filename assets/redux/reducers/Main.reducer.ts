import { Action } from "redux";
import { ICat, ReduxMainStore } from "../../types/Data.type";

interface ActionWithPayload extends Action {
    payload: {
        cats?: Array<ICat>,
        cat?: ICat,
        new_cats?: Array<ICat>
    }
}

export const MainReducer = (store: ReduxMainStore | undefined, action: ActionWithPayload): ReduxMainStore => {
    switch (action.type) {
        case "__INIT__":
            if (action.payload.cats) {
                return {
                    cats: action.payload.cats,
                    favoriteCats: JSON.parse(localStorage.getItem('favCats') + '') || []
                }
            }
        case "GET_DATA_FROM_STORAGE":
            if (store) {
                let data: Array<ICat> = JSON.parse(localStorage.getItem('favCats') + '');
                return {
                    cats: store.cats,
                    favoriteCats: data
                }
            }
        case "ADD_TO_FAVORITES":
            if (store && action.payload.cat) {
                const updatedData: Array<ICat> = Array.from(new Set([...(store.favoriteCats || []), action.payload.cat]));
                localStorage.setItem('favCats', JSON.stringify(updatedData))
                store.favoriteCats = updatedData;
                return store;
            }
        case "REMOVE_FAVORITE_CAT_FROM_STORAGE":
            if (store && action.payload.cat) {
                const updatedData: Array<ICat> = (store.favoriteCats && store.favoriteCats.filter((e: ICat) => e.id !== action.payload.cat?.id)) || [];
                localStorage.setItem('favCats', JSON.stringify(updatedData))
                store.favoriteCats = updatedData;
                return store;
            }
        case "REMOVE_FAVORITE_CAT":
            if (store && action.payload.cat) {
                const updatedData: Array<ICat> = (store.favoriteCats && store.favoriteCats.filter((e: ICat) => e.id !== action.payload.cat?.id)) || [];
                localStorage.setItem('favCats', JSON.stringify(updatedData))
                return {
                    cats: store.cats,
                    favoriteCats: updatedData
                }
            }
        case "ADD_NEW_CATS":
            if (store && action.payload.new_cats) {
                store.cats = [...store.cats, ...action.payload.new_cats];
                return {
                    cats: [...store.cats, ...action.payload.new_cats],
                    favoriteCats: store.favoriteCats
                }
            }
        default:
            return store || {
                cats: [],
                favoriteCats: []
            }
    }
}