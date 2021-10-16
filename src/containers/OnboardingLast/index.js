import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import { BasicHeader, MButton, MHButton } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import {
  Metrix,
  Colors,
  Images,
  NavigationService,
  Fonts,
  NotificationService,
} from "../../config";
import { validateEmail, showToast } from "../../config/utills";
import { AuthActions } from "../../store/actions";
import { FlatList } from "react-native-gesture-handler";
import { setState } from "jest-circus";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Feather";
export const OnboardingLast = (props) => {
  return (
    <ScrollView contentContainerStyle={{ height: "100%" }}>
      <BasicHeader showBorder={false} rightItem={Images.Logout} />

      <ImageBackground
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
        source={Images.Onboarding1}
        imageStyle={{ marginTop: 30, paddingLeft: 300 }}
        //   imageStyle={{ justifyContent: "flex-end" }}
      >
        <Text
          style={{
            fontSize: Metrix.customFontSize(30),
            fontFamily: Fonts["Gilroy-Light"],
            color: Colors.LightGray,
            paddingHorizontal: Metrix.HorizontalSize(20),
            // width: Metrix.HorizontalSize(60),
            textAlign: "center",
          }}
        >
          {
            "Last but not least.. is there something you’ve aimed from a very long time or you’re just living in the present actively looking for options and opportunities?"
          }
        </Text>
        <View
          style={{
            height: Metrix.VerticalSize(261),
            width: Metrix.HorizontalSize(300),
            borderRadius: 20,
            borderColor: Colors.Primary1,
            borderWidth: 1,
            marginTop: Metrix.VerticalSize(20),
            //   justifyContent: 'flex-start',
            alignSelf: "center",
            padding: Metrix.VerticalSize(20),
          }}
        >
          <TextInput color= "black" placeholder="Enter in detail.." multiline />
        </View>
        <View style={{width: '100%', justifyContent: 'flex-end', flexDirection: 'row', paddingHorizontal: Metrix.HorizontalSize(20)}}>
        <TouchableOpacity
            onPress = {() => NavigationService.navigate('ThankYouScreen')}
          style={{
              marginTop: Metrix.VerticalSize(40),
            height: Metrix.HorizontalSize(57),
            width: Metrix.HorizontalSize(57),
            borderRadius: 40,
            backgroundColor: Colors.Primary1,
            justifyContent: "center",
            alignItems: "center",
            right: 0,
            bottom: 0,
          }}
        >
          <Icon
            name="chevron-right"
            size={Metrix.VerticalSize(18)}
            color={Colors.White}
          />
        </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};
