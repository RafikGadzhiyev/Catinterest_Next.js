import React, { Dispatch, MutableRefObject, SetStateAction, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { INIT } from '../assets/redux/actions/Init.action';
import { MainContentContainer } from '../assets/components/StyledComponents';
import CircularProgress from '@mui/material/CircularProgress';

import type { NextPage } from 'next'
import { CatsList } from '../assets/components/CatsListComponent';
import { ReduxMainStore } from '../assets/types/Data.type';
import { LoadNewCats } from '../assets/redux/actions/LoadExtra.action';

const Home: NextPage = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const store: ReduxMainStore = useSelector((store: ReduxMainStore) => store);
  const [isLoadingMainContent, setIsLoadingMainContent]: [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(false);
  const [currentPageOffset, setCurrentPageOffset]: [number, Dispatch<SetStateAction<number>>] = useState<number>(1);
  const [isExtraLoading, setIsExtraLoading]: [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(false);
  const is: MutableRefObject<boolean> = React.useRef(false);

  const ScrollEventCallBack = useCallback(() => {
    const HTML = document.documentElement;
    const scrollData = {
      fullHeight: HTML.scrollHeight,
      currentHeight: HTML.clientHeight + HTML.scrollTop,
      startSearch: 400
    }
    // console.log(isExtraLoading, is.current);
    if (is.current) {
      return;
    }
    if (scrollData.fullHeight - scrollData.startSearch <= scrollData.currentHeight) {
      setIsExtraLoading(() => true);
      is.current = true;
      const getData = async () => {
        await dispatch(LoadNewCats(20, currentPageOffset));
        setCurrentPageOffset((prev: number) => prev + 1);
        setIsExtraLoading(() => false);
        is.current = false;
      }

      getData();
    }

  }, [])

  useEffect(() => {
    let getData = async () => {
      setIsLoadingMainContent(() => true);
      await dispatch(INIT());
      setIsLoadingMainContent(() => false);
    }
    if (store.cats.length === 0) {
      getData();
    }

    window.addEventListener('scroll', ScrollEventCallBack, { passive: true })

    return () => window.removeEventListener('scroll', ScrollEventCallBack);

  }, [])

  return (
    <MainContentContainer>
      {
        isLoadingMainContent &&
        <CircularProgress
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
        />
      }
      {
        !isLoadingMainContent &&
        <CatsList isFav={false} />
      }
      {
        isExtraLoading &&
        <p style={{ marginTop: '1rem' }} >...Загружаем еще котиков...</p>
      }
    </MainContentContainer >
  )
}

export default Home
