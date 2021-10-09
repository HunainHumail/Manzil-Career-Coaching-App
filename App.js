/**
 *
 * @format
 * @flow strict-local
 */

 import React, {useEffect, useState} from 'react';
 import 'react-native-gesture-handler';
 import {
   StatusBar,
   Platform,
   Alert,
   View,
   ActivityIndicator,
 } from 'react-native';
 import {NavigationContainer} from '@react-navigation/native';
 import {NavigationService, Colors} from './src/config';
 import {Provider} from 'react-redux';
 import {store} from './src/store/';
 import {Root} from 'native-base';
 import {MainStack} from './src/stacks/MainStack';
 import messaging from '@react-native-firebase/messaging';
 import PushNotification from 'react-native-push-notification';
 import {AppActions} from './src/store/actions';
 import AsyncStorage from '@react-native-community/async-storage';
 import {AuthActions} from './src/store/actions';
 
 const App = () => {
  //  const [loading, setLoading] = useState(false);
  //  const gotNotification = remoteMessage => {
  //    if (remoteMessage) {
  //      setTimeout(() => {
  //        setLoading(true);
  //      }, 1900);
  //      setTimeout(() => {
  //        AsyncStorage.getItem('user').then(user => {
  //          if (user) {
  //            let parsedData = JSON.parse(user);
  //            store.dispatch(AuthActions.loginSuccess(parsedData));
  //            NavigationService.navigate('Discussions', {
  //              post_id: remoteMessage.data.postId,
  //              from: 'home',
  //            });
  //          }
  //        });
  //      }, 3000);
  //      setTimeout(() => {
  //        setLoading(false);
  //      }, 4000);
  //    }
  //  };
 
  //  useEffect(() => {
  //    let unsubscribe = messaging().onMessage(remoteMessage => {
  //      PushNotification.localNotification({
  //        title: remoteMessage.notification.title,
  //        message: remoteMessage.notification.body,
  //      });
  //      store.dispatch(AppActions.getNewNotification());
  //    });
  //    return unsubscribe;
  //  }, []);
 
  //  useEffect(() => {
  //    // Handle background notification
  //    const unsub = messaging().onNotificationOpenedApp(remoteMessage => {
  //      console.log('notification from background', remoteMessage);
  //      NavigationService.navigate('Discussions', {
  //        post_id: remoteMessage.data.postId,
  //        from: 'home',
  //      });
  //    });
  //    // Handle initial notification from close state
  //    messaging()
  //      .getInitialNotification()
  //      .then(gotNotification);
  //    // PushNotification.getDeliveredNotifications(gotNotification)
  //    return unsub;
  //  }, []);
 
   return (
     <>
       <Provider store={store}>
         {Platform.OS == 'android' ? (
           <StatusBar
             barStyle="light-content"
            //  backgroundColor={Colors.Primary}
           />
         ) : (
           <></>
         )}
         <Root>
           <NavigationContainer
             ref={ref => NavigationService.setTopLevelNavigator(ref)}
            //  theme={{colors: {background: Colors.Primary}}}
             >
             <MainStack />
           </NavigationContainer>
         </Root>
       </Provider>
       {/* {loading ? (
         <View
           style={{
             position: 'absolute',
             top: 0,
             bottom: 0,
             right: 0,
             left: 0,
             justifyContent: 'center',
             alignItems: 'center',
             backgroundColor: Colors.Primary,
           }}>
           <ActivityIndicator size="large" color={Colors.White} />
         </View>
       ) : null} */}
     </>
   );
 };
 
 export default App;
 