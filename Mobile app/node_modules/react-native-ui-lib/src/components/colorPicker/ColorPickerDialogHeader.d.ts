import React from 'react';
import { ColorPickerDialogProps } from './ColorPickerDialog';
type HeaderProps = Pick<ColorPickerDialogProps, 'doneButtonColor' | 'accessibilityLabels' | 'testID'> & {
    valid: boolean;
    onDismiss: () => void;
    onDonePressed: () => void;
};
declare const Header: (props: HeaderProps) => React.JSX.Element;
export default Header;
