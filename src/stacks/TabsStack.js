import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors, Metrix, Images, GetCompRef } from "../config";
import { useSelector } from "react-redux";
// import {ProfileStack} from './ProfileStack';
// import {ContentStack} from './ContentStack';
import { HomeScreen, CreatePostScreen, SearchScreen } from "../containers";

const Tab = createBottomTabNavigator();
export const TabStack = () => {
  // const is_subscribe = useSelector(state => state.App.is_subscribe);
  // const profileLoading = useSelector(state => state.Profile.isLoading);
  // const networkAvailable = useSelector(state => state.App.networkAvailable);
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBarOptions={{
        activeTintColor: Colors.Primary1,
        style: {
          backgroundColor: Colors.Primary1,
          borderTopWidth: Metrix.VerticalSize(1),
          borderTopColor: Colors.BlackOpacity(10),
          height: Metrix.VerticalSize(56),
        },
      }}
      barStyle={{
        backgroundColor: Colors.Primary1,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) =>
            color == "#000000" ? (
              <Image
                resizeMode="contain"
                style={{
                  height: Metrix.VerticalSize(21),
                  width: Metrix.VerticalSize(21),
                  marginTop: Metrix.VerticalSize(15),
                }}
                source={Images.HomeInActive}
              />
            ) : (
              <Image
                resizeMode="contain"
                style={{
                  height: Metrix.VerticalSize(21),
                  width: Metrix.VerticalSize(21),
                  marginTop: Metrix.VerticalSize(15),
                }}
                source={Images.HomeActive}
              />
            ),
        }}
      />

      {/* <Tab.Screen
        name="tabs2"
        component={CreatePostScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) =>
            color == '#000000' ? (
              <Image
                style={{
                  height: Metrix.VerticalSize(60),
                  width: Metrix.VerticalSize(60),
                  marginTop: Metrix.VerticalSize(15),
                }}
                source={Images.UploadInActive}
              />
            ) : (
              <Image
                style={{
                  height: Metrix.VerticalSize(60),
                  width: Metrix.VerticalSize(60),
                  marginTop: Metrix.VerticalSize(15),
                }}
                source={Images.UploadActive}
              />
            ),
        }}
      /> */}

      {/* <Tab.Screen
        name="Content"
        component={ContentStack}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) =>
            !is_subscribe ? (
              <Image
                style={{
                  width: Metrix.HorizontalSize(45),
                  height: Metrix.VerticalSize(40),
                  marginTop: Metrix.VerticalSize(15),
                }}
                source={Images.ContentLock}
              />
            ) : (
              <Image
                style={{
                  width: Metrix.HorizontalSize(45),
                  height: Metrix.VerticalSize(40),
                  marginTop: Metrix.VerticalSize(15),
                }}
                source={Images.ContentUnlock}
              />
            ),
        }}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            if (!is_subscribe) {
              if (!profileLoading) {
                navigation.navigate('SubscriptionScreen');
              }
            } else {
              navigation.navigate('Content', {apiCall: true});
            }
          },
        })}
      /> */}

      {/* <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) =>
            color == '#000000' ? (
              <Image
                style={{
                  height: Metrix.VerticalSize(60),
                  width: Metrix.VerticalSize(60),
                  marginTop: Metrix.VerticalSize(15),
                }}
                source={Images.ProfileInActive}
              />
            ) : (
              <Image
                style={{
                  height: Metrix.VerticalSize(60),
                  width: Metrix.VerticalSize(60),
                  marginTop: Metrix.VerticalSize(15),
                }}
                source={Images.ProfileActive}
              />
            ),
        }}
        listeners={{
          tabPress: () => {
            if (networkAvailable) {
              if (GetCompRef('ProfileScreen')) {
                GetCompRef('ProfileScreen').scrollToOffset({
                  animated: true,
                  offset: 0,
                });
              }
            }
          },
        }}
      /> */}

      {/* <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) =>
            color == '#000000' ? (
              <Image
                style={{
                  height: Metrix.VerticalSize(60),
                  width: Metrix.VerticalSize(60),
                  marginTop: Metrix.VerticalSize(15),
                }}
                source={Images.SearchInActive}
              />
            ) : (
              <Image
                style={{
                  height: Metrix.VerticalSize(60),
                  width: Metrix.VerticalSize(60),
                  marginTop: Metrix.VerticalSize(15),
                }}
                source={Images.SearchActive}
              />
            ),
        }}
      /> */}
    </Tab.Navigator>
  );
};
