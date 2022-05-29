import { CircularProgress } from '@mui/material';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CatsList } from "../../assets/components/CatsListComponent";
import { MainContentContainer } from "../../assets/components/StyledComponents";
import { GetData } from '../../assets/redux/actions/GetData.action';
import { INIT } from '../../assets/redux/actions/Init.action';
import { ReduxMainStore } from '../../assets/types/Data.type';

export default function FavoriteCats(): JSX.Element {
    const [isLoading, setIsLoading]: [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(false);
    const dispatch: Dispatch<any> = useDispatch();

    useEffect(() => {
        dispatch(GetData());
    }, [])

    return (<MainContentContainer>
        {
            isLoading &&
            <CircularProgress
                sx={{
                    position: "absolute",
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
            />
        }
        {
            !isLoading &&
            <CatsList isFav={true} />
        }
    </MainContentContainer>)
}