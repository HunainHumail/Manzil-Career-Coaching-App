import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import { BasicHeader, MButton } from "../../components";
import { Metrix, Colors, Images, NavigationService, Fonts } from "../../config";
import {content} from "../../json/content.js";

import { FlatList } from "react-native-gesture-handler";

export const OnboardingQuestions = (props) => {
  const [data, setData] = useState(content[0]);
  const [count, setCount] = useState(0);


  
  const handleFilteredData = () => {
    // alert("handle...",count)
    let newCount = count;
    newCount++;
    setCount(newCount);
    if (newCount <= 4) {
      const filterdData = content.filter((item) => {
          console.log("test", item.type, item.type === newCount)
          return item.type === newCount;
      });
      console.log("data filtered: ", filterdData);
      setData(filterdData[0]);
    } else {
      saveDataAndRenderNext();
    }
  };
  console.log("content");
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

  const saveDataAndRenderNext = () => {
    NavigationService.navigate("OnboardingLast");
  };

  console.log("data...", data);
  console.log("COUNT...", count);

  const { question, answers } = data;
//   console.log(JSON.parse(answers))
  return (
    <ImageBackground
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
      source={Images.Onboarding1}
      imageStyle={{ marginTop: 30 }}
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
          {question}
        </Text>

        <FlatList
          data={answers}
          contentContainerStyle={{ padding: 20 }}
          renderItem={({ item, index }) => {
              console.log("item: ", item);
            return (
              <View style={{ marginBottom: Metrix.VerticalSize(20) }}>
                <MButton
                  text={item}
                  onPress={() => handleFilteredData()}
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
