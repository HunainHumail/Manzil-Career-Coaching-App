import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Metrix, Fonts, Colors, Images } from "../../config";

export const BasicHeader = ({
  text,
  rightPress,
  leftPress,
  rightItem,
  leftItem,
  showBorder = true,
  fromNotification = false,
  unSeenNotification,
}) => (
  <View
    style={[
      {
        width: Metrix.HorizontalSize(375),
        alignItems: "center",
        flexDirection: "row",
        height: Metrix.VerticalSize(116),
        // backgroundColor: Colors.Primary,
        paddingHorizontal: Metrix.HorizontalSize(10),
        borderBottomColor: Colors.DarkBlue,
      },
      !showBorder ? {} : { borderBottomWidth: Metrix.VerticalSize(1) },
    ]}
  >
    <View
      style={{
        width: Metrix.HorizontalSize(70),
      }}
    >
      <TouchableOpacity
        onPress={leftPress}
        style={{
          width: Metrix.VerticalSize(50),
          height: Metrix.VerticalSize(50),
          borderRadius: Metrix.VerticalSize(100),
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{
            width: Metrix.VerticalSize(28),
            height: Metrix.VerticalSize(28),
          }}
          source={leftItem}
        />
      </TouchableOpacity>
    </View>
    <View
      style={{
        width: Metrix.HorizontalSize(210),
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        style={{
          width: Metrix.HorizontalSize(65),
          height: Metrix.VerticalSize(65),
        }}
        resizeMode="contain"
        source={Images.Logo}
      />
    </View>
    <View
      style={{
        width: Metrix.HorizontalSize(68),
        alignItems: "flex-end",
      }}
    >
      {rightItem ? (
        <>
          {fromNotification ? (
            <View>
              {unSeenNotification > 0 && (
                <View
                  style={{
                    width: Metrix.VerticalSize(15),
                    height: Metrix.VerticalSize(15),
                    borderRadius: Metrix.VerticalSize(15),
                    backgroundColor: Colors.Red,
                    position: "absolute",
                    right: Metrix.HorizontalSize(4),
                    top: Metrix.VerticalSize(4),
                    zIndex: 1,
                    elevation: 5,
                  }}
                ></View>
              )}
              <TouchableOpacity
                style={{
                  height: Metrix.VerticalSize(45),
                  width: Metrix.VerticalSize(45),
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={rightPress}
              >
                <Image
                  style={{
                    width: Metrix.VerticalSize(32),
                    height: Metrix.VerticalSize(32),
                    zIndex: 0,
                  }}
                  source={rightItem}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              style={{
                height: Metrix.VerticalSize(45),
                width: Metrix.VerticalSize(45),
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={rightPress}
            >
              <Image
                style={{
                  width: Metrix.VerticalSize(32),
                  height: Metrix.VerticalSize(32),
                }}
                source={rightItem}
              />
            </TouchableOpacity>
          )}
        </>
      ) : (
        <View />
      )}
    </View>
  </View>
);
