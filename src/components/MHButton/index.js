import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import {Metrix, Colors, Fonts} from '../../config';

export const MHButton = ({
  text,
  item,
  onPress,
  isLoading,
  disabled,
  width = Metrix.HorizontalSize(322),
  color = Colors.Secondary,
  textColor = Colors.WhiteText,
}) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.8}
    style={{
      borderRadius: Metrix.VerticalSize(7),
      backgroundColor: disabled ? Colors.DisabledColor() : color,
      height: Metrix.VerticalSize(50),
      width: width,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    disabled={disabled || isLoading}>
    {isLoading ? (
      <ActivityIndicator color={textColor} />
    ) : (
      item || (
        <Text
          style={{
            fontFamily: Fonts['Gilroy-Light'],
            fontSize: Metrix.FontLarge,
            color: textColor,
          }}>
          {text}
        </Text>
      )
    )}
  </TouchableOpacity>
);
