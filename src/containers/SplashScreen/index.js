import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {Metrix, Colors, Images, NavigationService} from '../../config';
import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch} from 'react-redux';
import {AuthActions, HomeActions, ProfileActions} from '../../store/actions';

export const SplashScreen = props => {
  // const dispatch = useDispatch();
  // const getUser = () => {
  //   AsyncStorage.getItem('user').then(user => {
  //     if (user) {
  //       let parsedData = JSON.parse(user);
  //       dispatch(AuthActions.loginSuccess(parsedData));
  //       setTimeout(() => {
  //         NavigationService.reset_0('Tabs');
  //       }, 2000);
  //     } else {
  //       AsyncStorage.getItem('introseen').then(intro => {
  //         if (intro) {
  //           setTimeout(() => {
  //             NavigationService.reset_0('GetStartedScreen', {seen: true});
  //           }, 2000);
  //         } else {
  //           setTimeout(() => {
  //             NavigationService.reset_0('GetStartedScreen', {seen: false});
  //           }, 2000);
  //         }
  //       });
  //     }
  //   });
  // };
  // const getOfflineData = () => {
  //   AsyncStorage.getItem('offlineData').then(data => {
  //     if (data) {
  //       dispatch(HomeActions.getOfflineData(JSON.parse(data)));
  //     }
  //   });
  // };

  // useEffect(() => {
  //   dispatch(ProfileActions.getRoles());
  //   getOfflineData();
  //   getUser();
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      NavigationService.reset_0('LoginScreen');
    }, 2000);
  }, []);

  return (
    <View
      style={{
        height: Metrix.VerticalSize(),
        // width: Metrix.HorizontalSize(),
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: Colors.Primary,
      }}>
      <View
        style={{
          width: Metrix.HorizontalSize(332),
          height: Metrix.VerticalSize(213),
        }}>
        <Image
          style={{
            width: '100%',
            height: '100%',
          }}
          resizeMode="contain"
          source={Images.Logo}
        />
      </View>
    </View>
  );
};
