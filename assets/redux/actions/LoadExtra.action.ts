import type { GetCatsResponseType } from './../../types/Response.type'

export const LoadNewCats = (limit: number, pageOffset: number) => {
    return async (dispatch: any) => {
        let response: Response = await fetch('api/get_cats', {
            method: "POST",
            body: JSON.stringify({
                limit,
                pageOffset
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }),
            result: GetCatsResponseType = await response.json();

        dispatch({
            type: "ADD_NEW_CATS",
            payload: {
                new_cats: result.cats
            }
        })
    }
}