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
import { FlatList } from "react-native-gesture-handler";
import { setState } from "jest-circus";
import { SafeAreaView } from "react-native-safe-area-context";

export const OnboardingQuestions = (props) => {
  let answerArray = [
    { id: 1, value: "11 - 16 years old" },
    { id: 2, value: "16 - 18 years old" },
    { id: 3, value: "18 -20 years old" },
    { id: 4, value: "above 20" },
  ];

  let name = "Rao Hunain";
  const [questiondata, setQuestionData] = useState("How old are you");
  let [choices, setChoices] = useState(answerArray);
  //   let questiondata = "How old are you?";

  const saveDataAndRenderNext = (item) => {
    console.log("item: ", item);
    NavigationService.navigate("OnboardingLast");
  };

  return (
    <ImageBackground
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
      source={Images.Onboarding1}
      imageStyle = {{marginTop: 30}}
    //   imageStyle={{ justifyContent: "flex-end" }}
    >
      <BasicHeader showBorder={false} rightItem={Images.Logout} />
      <View style={{ marginTop: Metrix.VerticalSize(100) }}>
        <Text
          style={{
            fontSize: Metrix.customFontSize(23),
            fontFamily: Fonts["Gilroy-Light"],
            color: Colors.LightGray,

            // width: Metrix.HorizontalSize(60),
            textAlign: "center",
          }}
        >
          {questiondata}
        </Text>

        <FlatList
          data={answerArray}
          contentContainerStyle={{ padding: 20 }}
          renderItem={({ item, index }) => {
            return (
              <View style={{ marginBottom: Metrix.VerticalSize(20) }}>
                <MButton
                  text={item.value}
                  onPress={() => saveDataAndRenderNext(item)}
                  color={Colors.Primary1}
                />
              </View>
            );
          }}
        />
      </View>
    </ImageBackground>
  );
};
