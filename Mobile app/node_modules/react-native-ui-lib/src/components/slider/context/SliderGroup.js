import React, { useCallback, useMemo, useState } from 'react';
import { Colors } from "../../../style";
import SliderContext from "./SliderContext";
import View from "../../view";
const SliderGroup = props => {
  const {
    color,
    onValueChange,
    children
  } = props;
  const [value, setValue] = useState(Colors.getHSL(color));
  const _setValue = useCallback(value => {
    setValue(value);
    onValueChange?.(Colors.getHexString(value));
  }, [onValueChange]);
  const contextProviderValue = useMemo(() => ({
    value,
    setValue: _setValue
  }), [value, _setValue]);
  return <View {...props}>
      <SliderContext.Provider value={contextProviderValue}>{children}</SliderContext.Provider>
    </View>;
};
SliderGroup.displayName = 'IGNORE';
export default SliderGroup;