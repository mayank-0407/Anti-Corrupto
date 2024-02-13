import { ViewProps } from './index';
import { ComponentProps } from '../../testkit/new/Component.driver';
export declare const ViewDriver: (props: ComponentProps) => {
    getStyle: () => import("react-native/types").StyleProp<import("react-native/types").ViewStyle | import("react-native/types").Animated.AnimatedProps<import("react-native/types").ViewStyle>>;
    getElement: () => import("react-test-renderer").ReactTestInstance;
    exists: () => boolean;
    getProps: () => ViewProps;
};
