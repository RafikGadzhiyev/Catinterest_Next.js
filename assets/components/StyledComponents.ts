import styled, { StyledComponent } from 'styled-components';

export const NavigationBarContainer: StyledComponent<'nav', any, {}> = styled.nav`
    background-color: #2196F3;
    padding: 0 2rem;
    color: #fff;
`;

export const NavigationMenu: StyledComponent<'ul', any, {}> = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    height: 100%;
`
export const NavigationMenuItem: StyledComponent<'li', any, {}> = styled.li`
    height: 100%;
`;

export const NavigationMenuItemButton: StyledComponent<'button', any, {}> = styled.button`
    all: unset;
    height: inherit;
    transition: 300ms ease;
    cursor: pointer;
    padding: 1rem;

    &:hover{
        background-color: #1E90E5
    }

    &.active,
    &:active{
        background-color: #1E88E5;
    }

`

export const MainContentContainer: StyledComponent<'div', any, {}> = styled.div`
    padding: 2rem;
    text-align: center;
`

export const CatsListContainer: StyledComponent<'ul', any, {}> = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    list-style: none;
    justify-content: center;
`

export const CatItem: StyledComponent<'li', any, {}> = styled.li`
    width: 225px;
    height: 225px;
    max-height: 225px;
    border-radius: 10px;
    transition: 300ms ease;
    position: relative;
    overflow: hidden;

    &:hover{
        transform: scale(1.1);
        box-shadow: 0 3px 4px  black;

        &>.options-container{
            opacity: 1;
            background: linear-gradient(to top, white, transparent 100%);
            
            &>button{
                transform: translateY(0);
            }

        }

    }

`

export const OptionsContainer: StyledComponent<'div', any, {}> = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-inline: .25rem;
    transition: 300ms ease;
    opacity: 0;
    `

export const LikeButton: StyledComponent<'button', any, {}> = styled.button`
    all: unset;
    color: #F24E1E;
    font-size: 1.5rem;
    cursor: pointer;
    transform: translateY(-1rem);
    transition: inherit;

    &>i.active{
        color: #FF3A00;
    }

`