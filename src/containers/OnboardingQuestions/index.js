import React, { useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import { BasicHeader, MButton } from "../../components";
import { Metrix, Colors, Images, NavigationService, Fonts } from "../../config";
import ContentJson from "../../json/content.json";

import { FlatList } from "react-native-gesture-handler";

export const OnboardingQuestions = (props) => {
  const [data, setData] = useState(ContentJson[0]);
  const [count, setCount] = useState(0);

  const handleFilteredData = () => {
    // alert("handle...",count)
    let newCount = count;
    newCount++;
    setCount(newCount);
    if (newCount <= 2) {
      const filterdData = ContentJson.filter((item) =>
        item.type.includes(newCount.toString())
      );
      setData(filterdData);
    } else {
      saveDataAndRenderNext(item);
    }
  };
  console.log("ContentJson");
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

  console.log("data...", data.answers);
  console.log("COUNT...", count);

  const { question, answers } = data;
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
            return (
              <View style={{ marginBottom: Metrix.VerticalSize(20) }}>
                <MButton
                  text={item[index]}
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
