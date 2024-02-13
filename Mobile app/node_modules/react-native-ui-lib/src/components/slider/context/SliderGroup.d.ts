import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
interface SliderGroupProps {
    color: string;
    onValueChange: (color: string) => void;
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
}
declare const SliderGroup: {
    (props: SliderGroupProps): React.JSX.Element;
    displayName: string;
};
export default SliderGroup;
