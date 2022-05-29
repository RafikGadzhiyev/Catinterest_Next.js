import { Menu } from "./MenuComponent"
import { NavigationBarContainer } from "./StyledComponents"

export const NavigationBar: React.FC = () => {
    return <NavigationBarContainer>
        <Menu />
    </NavigationBarContainer>
}