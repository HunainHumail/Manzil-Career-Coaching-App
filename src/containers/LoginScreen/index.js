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
import { MHButton } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import {
  Metrix,
  Colors,
  Images,
  NavigationService,
  Fonts,
  // NotificationService,
} from "../../config";
import { validateEmail, showToast } from "../../config/utills";
import { AuthActions } from "../../store/actions";

export const LoginScreen = (props) => {
  let passwordRef = React.createRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigateToForgotPassword = () => {
    NavigationService.navigate("ForgotPassword");
  };

  const isLoading = useSelector((state) => state.Auth.isLoading);
  const dispatch = useDispatch();

  const login = () => {
    if (email && password) {
      if (validateEmail(email.trim())) {
        NotificationService.getToken().then((token) => {
          dispatch(
            AuthActions.login({
              email: email.trim(),
              password: password.trim(),
              device_token: token,
            })
          );
        });
      } else {
        showToast("Please enter valid email address.");
      }
    } else {
      showToast("Required fields cannot be left empty.");
    }
  };
  return (
    <ImageBackground
      source={Images.LoginBackground}
      style={{ width: "100%", height: "100%" }}
    >
      <Image
        source={Images.Logo}
        // width={Metrix.HorizontalSize(100)}
        // height={Metrix.VerticalSize(40)}
        resizeMode="contain"
        style={{
          width: Metrix.HorizontalSize(200),
          height: Metrix.VerticalSize(200),
          alignSelf: "center",
          // marginTop: Metrix.VerticalSize(146),
        }}
      />

      <TouchableOpacity
        onPress={() => NavigationService.navigate("WelcomeScreen")}
        style={{
          flexDirection: "row",
          width: Metrix.HorizontalSize(320),
          height: Metrix.VerticalSize(76),
          backgroundColor: "rgba(88, 58, 32, 0.8)",
          alignSelf: "center",
          // bottom: Metrix.VerticalSize(30),
          borderRadius: 10,
          // justifyContent: 'space-between',
          alignItems: "center",
          paddingHorizontal: Metrix.HorizontalSize(20),
          position: "absolute",
          bottom: Metrix.VerticalSize(40),
        }}
      >
        <Image
          source={Images.GoogleIcon}
          // width={Metrix.HorizontalSize(100)}
          // height={Metrix.VerticalSize(40)}
          resizeMode="contain"
          style={{
            width: Metrix.HorizontalSize(36),
            height: Metrix.VerticalSize(36),
            alignSelf: "center",
            // marginTop: Metrix.VerticalSize(146),
          }}
        />
        <Text
          style={{
            fontSize: Metrix.FontLarge,
            fontFamily: Fonts["Gilroy-Light"],
            color: Colors.White,
            marginLeft: Metrix.HorizontalSize(40),

            // width: Metrix.HorizontalSize(60),
            textAlign: "center",
          }}
        >
          Sign in with Google
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};
