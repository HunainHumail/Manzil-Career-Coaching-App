import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Metrix, Fonts, Colors } from '../../config';

export const BackHeader = ({
  text,
  rightPress,
  leftPress,
  rightItem,
  leftItem,
  bgColor = Colors.Primary,
  headerHeight = 116
}) => (
    <View
      style={{
        width: Metrix.HorizontalSize(375),
        alignItems: 'center',
        flexDirection: 'row',
        height: Metrix.VerticalSize(headerHeight),
        backgroundColor: bgColor,
        paddingHorizontal: Metrix.HorizontalSize(10),
      }}>
      <View
        style={{
          width: Metrix.HorizontalSize(55),
        }}>
        <TouchableOpacity
          onPress={leftPress}
          style={{
            width: Metrix.VerticalSize(50),
            height: Metrix.VerticalSize(50),
            borderRadius: Metrix.VerticalSize(100),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {
            leftItem != ''?
            <Image
              style={{
                width: Metrix.VerticalSize(28),
                height: Metrix.VerticalSize(28),
              }}
              source={leftItem}
            />
            :null
          }

        </TouchableOpacity>
      </View>
      <View
        style={{
          width: Metrix.HorizontalSize(230),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {text ? (
          <Text
            style={{
              fontFamily: Fonts['Gilroy-Light'],
              fontSize: Metrix.customFontSize(19),
              color: Colors.WhiteText,
            }}>
            {text}
          </Text>
        ) : (
            <View />
          )}
      </View>
      <View
        style={{
          width: Metrix.HorizontalSize(55),
          alignItems: 'flex-end',
        }}>
        {rightItem ? (
          <TouchableOpacity onPress={rightPress}>
            <Text
              style={{
                fontFamily: Fonts['Gilroy-Light'],
                fontSize: Metrix.FontLarge,
                color: Colors.WhiteText,
              }}>
              {rightItem}
            </Text>
          </TouchableOpacity>
        ) : (
            <View />
          )}
      </View>
    </View>
  );
