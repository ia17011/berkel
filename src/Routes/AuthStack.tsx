import { createSwitchNavigator } from "react-navigation";
import { TopScreen } from '../screens/Top/TopScreen'
import { SignInScreen } from '../screens/Auth/SignInScreen'

export const AuthStack = createSwitchNavigator(
    {
        Top: {
            screen: TopScreen,
            navigationOptions: {
                headerShown: false,
            }
        },
        SignIn: {
            screen: SignInScreen,
            navigationOptions: {
                headerShown: false,
            },
        },
    }
)