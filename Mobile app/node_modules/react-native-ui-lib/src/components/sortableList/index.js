import _reduce from "lodash/reduce";
import _filter from "lodash/filter";
import _mapKeys from "lodash/mapKeys";
import _map from "lodash/map";
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SortableListContext from "./SortableListContext";
import SortableListItem, { DEFAULT_LIST_ITEM_SIZE } from "./SortableListItem";
import { useDidUpdate, useThemeProps } from "../../hooks";
import { SortableListProps, SortableListItemProps } from "./types";
export { SortableListProps, SortableListItemProps };
function generateItemsOrder(data) {
  return _map(data, item => item.id);
}
function generateLockedIds(data) {
  // @ts-expect-error - not worth further time investment IMO, maybe it'll work some day
  return _reduce(_filter(data, item => item.locked),
  // @ts-expect-error - not worth further time investment IMO, maybe it'll work some day
  (item, cur) => ({
    ...item,
    [cur.id]: true
  }), {});
}
const SortableList = props => {
  const themeProps = useThemeProps(props, 'SortableList');
  const {
    data,
    onOrderChange,
    enableHaptic,
    scale,
    itemProps,
    horizontal,
    ...others
  } = themeProps;
  const itemsOrder = useSharedValue(generateItemsOrder(data));
  const lockedIds = useSharedValue(generateLockedIds(data));
  const itemSize = useSharedValue(DEFAULT_LIST_ITEM_SIZE);
  useDidUpdate(() => {
    itemsOrder.value = generateItemsOrder(data);
  }, [data]);
  const onChange = useCallback(() => {
    const newData = [];
    const dataByIds = _mapKeys(data, 'id');
    if (data?.length) {
      itemsOrder.value.forEach(itemId => {
        newData.push(dataByIds[itemId]);
      });
    }
    onOrderChange?.(newData);
  }, [onOrderChange, data]);
  const onItemLayout = useCallback(event => {
    const {
      height,
      width
    } = event.nativeEvent.layout;
    // Round for Android
    const newSize = Math.round(horizontal ? width : height);
    // Check validity for tests
    if (newSize) {
      const margins = horizontal ? (itemProps?.margins?.marginLeft ?? 0) + (itemProps?.margins?.marginRight ?? 0) : (itemProps?.margins?.marginTop ?? 0) + (itemProps?.margins?.marginBottom ?? 0);
      itemSize.value = newSize + margins;
    }
  }, []);
  const context = useMemo(() => {
    return {
      data,
      itemsOrder,
      lockedIds,
      onChange,
      itemSize,
      horizontal,
      itemProps,
      onItemLayout,
      enableHaptic,
      scale
    };
  }, [data]);
  return <GestureHandlerRootView>
      <SortableListContext.Provider value={context}>
        <FlatList {...others} horizontal={horizontal} data={data} CellRendererComponent={SortableListItem} removeClippedSubviews={false} // Workaround for crashing on Android (ArrayIndexOutOfBoundsException in ViewGroupDrawingOrderHelper.getChildDrawingOrder)
      />
      </SortableListContext.Provider>
    </GestureHandlerRootView>;
};
export default SortableList;