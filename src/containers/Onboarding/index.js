import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
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

export const Onboarding = (props) => {
  let name = "Rao Hunain";
  useEffect(() => {
    setTimeout(() => {
      NavigationService.replace('OnboardingQuestions');
    }, 2000);
  }, []);
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <BasicHeader showBorder={false} rightItem={Images.Logout} />
      <View style={{marginTop: Metrix.VerticalSize(100)}}>
      <Text
        style={{
          fontSize: Metrix.customFontSize(23),
          fontFamily: Fonts["Gilroy-Light"],
          color: Colors.LightGray,

          // width: Metrix.HorizontalSize(60),
          textAlign: "center",
        }}
      >
        Hey, {name}
      </Text>

      <Text
        style={{
          fontSize: Metrix.customFontSize(23),
          fontFamily: Fonts["Gilroy-Light"],
          color: Colors.LightGray,

          // width: Metrix.HorizontalSize(60),
          textAlign: "center",
          marginTop: Metrix.VerticalSize(20
            ),
          padding: 20
        }}
      >
        We would like to ask you some questions ..
      </Text>
      </View>
    </View>
  );
};
