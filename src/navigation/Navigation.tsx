import LoginScreen from '@features/auth/LoginScreen';
import SplashScreen from '@features/auth/SplashScreen';
import AnimatedTabs from '@features/tabs/AnimatedTabs';
import UserBottomTab from '@features/tabs/UserBottomTab';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { navigationRef } from '@utils/NavigationUtils';
import {FC} from 'react';

const stack = createNativeStackNavigator();

const Navigation: FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <stack.Screen name="SplashScreen" component={SplashScreen} />
        <stack.Screen
          options={{animation: 'fade'}}
          name="LoginScreen"
          component={LoginScreen}
        />
        <stack.Screen
          options={{animation: 'fade'}}
          name="UserBottomTab"
          component={AnimatedTabs}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
