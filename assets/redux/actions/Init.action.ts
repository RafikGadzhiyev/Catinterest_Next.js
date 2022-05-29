import { GetCatsResponseType } from "../../types/Response.type";

export const INIT = () => {
    return async (dispatch: any) => {
        let response: Response = await fetch('api/get_cats', {
            method: "POST",
            body: JSON.stringify({
                limit: 30,
                pageOffset: 0
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }),
            result: GetCatsResponseType = await response.json();
        dispatch({
            type: '__INIT__',
            payload: {
                cats: result.cats || []
            }
        })
    }
}