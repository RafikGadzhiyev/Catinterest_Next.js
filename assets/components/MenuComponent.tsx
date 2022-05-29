import { MutableRefObject, useRef } from "react"
import { v4 as uuidv4 } from 'uuid'
import { ILink } from "../types/Data.type"
import { MenuItem } from "./MenuItemComponent";
import { NavigationMenu } from "./StyledComponents";

export const Menu: React.FC = () => {
    const LINKS: MutableRefObject<Array<ILink>> = useRef<Array<ILink>>([
        {
            name: 'Все котики',
            path: '/'
        },
        {
            name: "Любимые котики",
            path: '/favorites'
        }
    ]);

    return <NavigationMenu>
        {
            LINKS.current.map((e: ILink, id: number) => <MenuItem
                key={uuidv4()}
                name={e.name}
                path={e.path}
                id={id}
            />)
        }
    </NavigationMenu>
}