import Link from "next/link"
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { MenuItemProps } from "../types/Props.type"
import { NavigationMenuItemButton } from "./StyledComponents"

export const MenuItem: React.FC<MenuItemProps> = (props) => {
    const [pathname, setPathname]: [string, Dispatch<SetStateAction<string>>] = useState<string>('');

    useEffect(() => {
        setPathname(() => window.location.pathname);
    }, [])


    return <li>
        <Link
            passHref
            href={{
                pathname: props.path
            }}
        >
            <NavigationMenuItemButton
                className={pathname === props.path ? 'active' : ''}
            >
                <span>{props.name}</span>
            </NavigationMenuItemButton>
        </Link>
    </li>
}