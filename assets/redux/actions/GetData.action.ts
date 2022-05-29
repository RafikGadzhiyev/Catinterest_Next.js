import { Action } from 'redux';

export const GetData = (): Action => {
    return {
        type: "GET_DATA_FROM_STORAGE"
    }
}