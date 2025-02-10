import DeliverScreen from '@features/delivery/DeliverScreen';
import DiningScreen from '@features/dining/DiningScreen';
import LiveScreen from '@features/live/LiveScreen';
import ReorderScreen from '@features/reorder/ReorderScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FC} from 'react';
import CustomTabBar from './CustomTabBar';

const Tab = createBottomTabNavigator();

const UserBottomTab: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarHideOnKeyboard: true}}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="Delivery" component={DeliverScreen} />
      <Tab.Screen name="Reorder" component={ReorderScreen} />
      <Tab.Screen name="Dining" component={DiningScreen} />
      <Tab.Screen name="Live" component={LiveScreen} />
    </Tab.Navigator>
  );
};

export default UserBottomTab;
