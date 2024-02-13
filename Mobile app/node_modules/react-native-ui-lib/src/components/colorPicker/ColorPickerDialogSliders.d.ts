import React from 'react';
import { HSLColor } from './ColorPickerPresenter';
import { ColorPickerDialogProps } from './ColorPickerDialog';
type SlidersProps = Pick<ColorPickerDialogProps, 'migrate'> & {
    keyboardHeight: number;
    color: HSLColor;
    onSliderValueChange: (value: string) => void;
};
declare const Sliders: (props: SlidersProps) => React.JSX.Element;
export default Sliders;
