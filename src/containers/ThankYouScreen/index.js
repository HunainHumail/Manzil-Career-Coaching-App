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
import Icon from "react-native-vector-icons/Entypo";
export const ThankYouScreen = (props) => {
  let name = "Hunain";
  return (
    <ScrollView contentContainerStyle={{ height: "100%" }}>
      <BasicHeader showBorder={false} rightItem={Images.Logout} />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Text
          style={{
            fontSize: Metrix.customFontSize(40),
            fontFamily: Fonts["Gilroy-Light"],
            color: Colors.LightGray,
            paddingHorizontal: Metrix.HorizontalSize(20),
            // width: Metrix.HorizontalSize(60),
            textAlign: "center",
          }}
        >
          Thank You {name}
        </Text>
        <Text
          style={{
            marginTop: Metrix.VerticalSize(20),
            fontSize: Metrix.customFontSize(30),
            fontFamily: Fonts["Gilroy-Light"],
            color: Colors.LightGray,
            paddingHorizontal: Metrix.HorizontalSize(20),
            // width: Metrix.HorizontalSize(60),
            textAlign: "center",
          }}
        >
          {
            "For giving us time and sharing about yourself. You can now proceed to your Home Page, assess yourself and connect to your coaches"
          }
        </Text>
        <TouchableOpacity
          onPress={() => NavigationService.navigate("Tabs")}
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
            name="home"
            size={Metrix.VerticalSize(18)}
            color={Colors.White}
          />
        </TouchableOpacity>
        <Image style={{marginTop: Metrix.VerticalSize(80)}} source={Images.ThankYouImage} resizeMode="cover" />
      </View>
    </ScrollView>
  );
};
