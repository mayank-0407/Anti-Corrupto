import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from "../../style";
import ColorSliderGroup from "../slider/ColorSliderGroup";
const Sliders = props => {
  const {
    keyboardHeight,
    color,
    migrate,
    onSliderValueChange
  } = props;
  const colorValue = color.a === 0 ? Colors.$backgroundInverted : Colors.getHexString(color);
  return <ColorSliderGroup initialColor={colorValue} containerStyle={[styles.sliderGroup, {
    height: keyboardHeight
  }]} sliderContainerStyle={styles.slider} showLabels labelsStyle={styles.label} accessible={false} migrate={migrate} onValueChange={onSliderValueChange} />;
};
export default Sliders;
const styles = StyleSheet.create({
  sliderGroup: {
    paddingTop: 12,
    marginHorizontal: 20
  },
  slider: {
    marginBottom: 15,
    height: 26
  },
  label: {
    marginBottom: 3
  }
});