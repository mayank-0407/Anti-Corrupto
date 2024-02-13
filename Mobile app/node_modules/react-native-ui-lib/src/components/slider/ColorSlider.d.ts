import React from 'react';
import { GradientSliderTypes } from './GradientSlider';
import { ColorSliderGroupProps } from './ColorSliderGroup';
type ColorSliderProps = Pick<ColorSliderGroupProps, 'sliderContainerStyle' | 'showLabels' | 'labelsStyle' | 'accessible' | 'labels' | 'migrate' | 'initialColor'> & {
    type: GradientSliderTypes;
};
declare const ColorSlider: (props: ColorSliderProps) => React.JSX.Element;
export default ColorSlider;
