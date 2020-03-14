import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
  NavigationRoute,
  NavigationScreenConfig,
} from 'react-navigation';

interface RemoveParamUndefNavigationState extends NavigationState {
  params: NavigationParams;
}

export type NonParamNavigation = {
  navigation: NavigationScreenProp<NavigationState, null>;
};

export type HasParamNavigation<T extends NavigationParams> = {
  navigation: NavigationScreenProp<RemoveParamUndefNavigationState, T>;
};

export type NavigationProps = {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
};

export type NavigationOptions = {
  navigationOptions: NavigationScreenConfig<{ [key: string]: any }, NavigationScreenProp<NavigationRoute>>;
};
