import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {InitialStack} from './InititalStack';
import {AuthStack} from './AuthStack';
import {TabStack} from './TabsStack';
export const MainStack = () => {
  const MainStack = createStackNavigator();
  const AppStacks = [...InitialStack, ...AuthStack];
  return (
    <MainStack.Navigator
      initialRouteName={'SplashScreen'}
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      {AppStacks.map(stack => (
        <MainStack.Screen {...stack} />
      ))}
      <MainStack.Screen component={TabStack} name="Tabs" />
      {/* <MainStack.Screen component={ContentStack} name={'ContentStack'} /> */}
    </MainStack.Navigator>
  );
};
