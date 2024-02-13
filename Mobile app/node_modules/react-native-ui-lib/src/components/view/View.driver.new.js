import { useComponentDriver } from "../../testkit/new/Component.driver";
export const ViewDriver = props => {
  const driver = useComponentDriver(props);
  const getStyle = () => {
    return driver.getProps().style;
  };
  return {
    ...driver,
    getStyle
  };
};