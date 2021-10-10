import React, { useState } from "react";
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

export const WelcomeScreen = (props) => {
  let name = "Rao Hunain";
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <BasicHeader showBorder={false} rightItem={Images.Logout} />
      <Text
        style={{
          fontSize: Metrix.customFontSize(40),
          fontFamily: Fonts["Gilroy-Light"],
          color: Colors.DarkGrey,

          // width: Metrix.HorizontalSize(60),
          textAlign: "center",
        }}
      >
        Welcome
      </Text>
      <Text
        style={{
          fontSize: Metrix.customFontSize(23),
          fontFamily: Fonts["Gilroy-Light"],
          color: Colors.LightGray,

          // width: Metrix.HorizontalSize(60),
          textAlign: "center",
        }}
      >
        {name}
      </Text>

      <Text
        style={{
          fontSize: Metrix.customFontSize(23),
          fontFamily: Fonts["Gilroy-Light"],
          color: Colors.LightGray,

          // width: Metrix.HorizontalSize(60),
          textAlign: "center",
          marginTop: Metrix.VerticalSize(80),
        }}
      >
        I am a ..
      </Text>
      <View style={{ marginTop: Metrix.VerticalSize(50) }}>
        <MButton
          text="Student"
          color={Colors.Secondary}
          onPress={() => NavigationService.navigate("Onboarding", {from: 'student'})}
        />
      </View>
      <View style={{ marginTop: Metrix.VerticalSize(20) }}>
        <MButton
          text="Coach / Consultant"
          color={Colors.Primary1}
          onPress={ () => NavigationService.navigate("Onboarding", {from: 'coach'})}
        />
      </View>
    </View>
  );
};
