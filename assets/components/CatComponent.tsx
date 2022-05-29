import React, { Dispatch, memo, useCallback } from "react"
import { useSelector, useDispatch } from 'react-redux';
import Image from "next/image"
import { CatItem, OptionsContainer, LikeButton } from "./StyledComponents"

import type { CatItemProps } from "../types/Props.type"
import { ICat, ReduxMainStore } from "../types/Data.type";
import { AddToFav } from "../redux/actions/AddToFav.action";
import { RemoveFavorite, RemoveFavoriteFromStorage } from "../redux/actions/RemoveFavorite.action";

export const Cat: React.FC<CatItemProps> = memo((props) => {
    const store: ReduxMainStore = useSelector((store: ReduxMainStore) => store);
    const dispatch: Dispatch<any> = useDispatch();

    const ChangeIconState = (e: React.SyntheticEvent, newState: string, catId: string) => {
        if (store.favoriteCats.some((e: ICat) => e.id === catId)) return;
        let element: HTMLElement = e.target as HTMLElement;
        if (element.tagName !== "BUTTON") {
            element = element.closest('button') as HTMLElement;
        }

        const { children } = element;

        for (let childIndex in children) {
            let child = children[childIndex];
            if (child.tagName === 'I') {
                child.className = newState;
                break;
            }
        }
    }


    const AddToFavorites = useCallback((e: React.SyntheticEvent, cat: ICat) => {
        const IDS = store.favoriteCats.map((e: ICat) => e.id);
        if (IDS.includes(cat.id)) {
            ChangeIconState(e, 'bi bi-heart', cat.id);
            if (props.isFav) {
                dispatch(RemoveFavorite(cat));
            } else {
                dispatch(RemoveFavoriteFromStorage(cat));
            }
        } else {
            ChangeIconState(e, 'bi bi-heart-fill active', cat.id);
            dispatch(AddToFav(cat));
        }
    }, []);

    return <CatItem>
        <Image
            src={props.imageData.URL + ''}
            alt="Cat picture"
            width={225}
            height={225}
            objectFit="cover"
        />
        <OptionsContainer className="options-container">
            <LikeButton
                onMouseEnter={(e: React.SyntheticEvent) => ChangeIconState(e, "bi bi-heart-fill", props.id)}
                onMouseLeave={(e: React.SyntheticEvent) => ChangeIconState(e, "bi bi-heart", props.id)}
                onClick={(e: React.SyntheticEvent) => AddToFavorites(e, {
                    id: props.id,
                    url: props.imageData.URL,
                    width: props.imageData.width,
                    height: props.imageData.height
                })}
            >
                {
                    !store.favoriteCats.some((e: ICat) => e.id === props.id) &&
                    <i className="bi bi-heart"></i>
                }
                {
                    store.favoriteCats.some((e: ICat) => e.id === props.id) &&
                    <i className="bi bi-heart-fill active"></i>
                }
            </LikeButton>
        </OptionsContainer>
    </CatItem>
})

Cat.displayName = 'Cat';