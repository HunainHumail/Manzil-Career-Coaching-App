import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {Metrix, Fonts, Colors, Images} from '../../config';

export const ActionHeader = ({rightPress, leftPress, rightItem, leftItem}) => (
  <View
    style={{
      width: Metrix.HorizontalSize(375),
      alignItems: 'center',
      flexDirection: 'row',
      height: Metrix.VerticalSize(116),
      backgroundColor: Colors.Primary,
      paddingHorizontal: Metrix.HorizontalSize(20),
      borderBottomColor: Colors.DarkBlue,
      borderBottomWidth: Metrix.VerticalSize(1),
      justifyContent: 'space-between',
    }}>
    <View
      style={{
        width: Metrix.HorizontalSize(70),
      }}>
      <TouchableOpacity
        onPress={leftPress}
        style={{
          width: Metrix.VerticalSize(100),
          height: Metrix.VerticalSize(50),
          borderRadius: Metrix.VerticalSize(100),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontFamily: Fonts['Gilroy-Light'],
            fontSize: Metrix.FontLarge,
            color: Colors.WhiteText,
          }}>
          {leftItem}
        </Text>
      </TouchableOpacity>
    </View>

    <View
      style={{
        width: Metrix.HorizontalSize(70),
      }}>
      <TouchableOpacity
        onPress={rightPress}
        style={{
          width: Metrix.VerticalSize(100),
          height: Metrix.VerticalSize(50),
          borderRadius: Metrix.VerticalSize(100),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontFamily: Fonts['Gilroy-Light'],
            fontSize: Metrix.FontLarge,
            color: Colors.WhiteText,
          }}>
          {rightItem}
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);
