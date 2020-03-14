import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { AuthStack } from '../Routes/AuthStack'
import { AuthLoadingScreen } from '../screens/Auth/AuthLoadingScreen'

export const Router = createAppContainer(
    createSwitchNavigator(
        {
            AuthLoading: { screen: AuthLoadingScreen},
            Auth: {screen: AuthStack}
        },
        {
            initialRouteName: 'AuthLoading'
        }
    )
)