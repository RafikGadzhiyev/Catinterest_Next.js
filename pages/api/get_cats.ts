import type { NextApiRequest, NextApiResponse } from 'next';
import { ICat } from '../../assets/types/Data.type';
import type { GetCatsResponseType } from '../../assets/types/Response.type';

export default async function handler(req: NextApiRequest, res: NextApiResponse<GetCatsResponseType>) {
    try {
        const API_KEY = process.env.API_KEY;
        const API_URL = 'https://api.thecatapi.com/v1/images/search';
        const { limit, pageOffset } = req.body;

        let response: Response = await fetch(`${API_URL}?limit=${limit}&page=${pageOffset}`, {
            headers: {
                'X-Api-Key': API_KEY + ''
            }
        }),
            result: Array<ICat> = await response.json();

        res.status(200).json({
            cats: result
        })

    } catch (e: any) {
        res.status(400).json({
            cats: null,
            error: e,
        })
    }
}   