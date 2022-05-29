import { useSelector } from 'react-redux'
import { CatsListContainer } from "./StyledComponents"
import { v4 as uuidv4 } from 'uuid'

import type { ICat, ReduxMainStore } from '../types/Data.type'
import { Cat } from './CatComponent'
import { memo, useEffect } from 'react'

export const CatsList: React.FC<{ isFav: boolean }> = memo(({ isFav }) => {
    const store: ReduxMainStore = useSelector((store: ReduxMainStore) => store);

    return <CatsListContainer>
        {!isFav &&
            store.cats.map((e: ICat) => <Cat
                key={uuidv4()}
                id={e.id}
                imageData={{
                    URL: e.url,
                    width: e.width,
                    height: e.height
                }}
                isFav={isFav}
            />)
        }
        {
            isFav && store.favoriteCats.length > 0 && store.favoriteCats.map((e: ICat) => {
                return <Cat
                    key={uuidv4()}
                    id={e.id}
                    imageData={{
                        URL: e.url,
                        width: e.width,
                        height: e.height
                    }}
                    isFav={isFav}
                />
            }
            )
        }
    </CatsListContainer>
})

CatsList.displayName = 'CatsList'
