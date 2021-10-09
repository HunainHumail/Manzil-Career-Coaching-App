import {Dimensions, PixelRatio, Platform} from 'react-native';
import {isIphoneX} from './isIPhoneX';
import Colors from '../colors';
let {height, width} = Dimensions.get('window');

height -= Platform.OS == 'ios' ? (isIphoneX() ? 70 : 20) : 24;

const scale = height / 812;

const normalize = size => {
  const newSize = size * scale;
  // if (Platform.OS === 'ios') {
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
  // } else {
  //return Math.round(PixelRatio.roundToNearestPixel(newSize)) -2
  // }
};

const VerticalSize = (size = 812) => (size / 812) * height;
const HorizontalSize = (size = 375) => (size / 375) * width;
const createShadow = (
  number = 5,
  opacity = 0.3,
  offset = {height: 5},
  color = Colors.Shadow,
  backgroundColor = Colors.Primary,
) => {
  return {
    elevation: number,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowColor: color,
    backgroundColor,
  };
};
export default {
  Radius: VerticalSize(10),
  LightRadius: VerticalSize(6),
  ActiveOpacity: 0.5,
  customFontSize: normalize,
  FontSmallest: normalize(11),
  FontExtraSmall: normalize(13),
  FontSmall: normalize(15),
  FontRegular: normalize(17),
  FontLarge: normalize(18),
  FontExtraLarge: normalize(23),
  VerticalSize,
  HorizontalSize,
  createShadow,
};
