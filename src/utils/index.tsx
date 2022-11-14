import "../styles/animations.css";

import "../styles/shared-styles.css";

import classNames from "classnames";
import React from "react";

import { BuilderProps, DeepPartial } from "./global";

/**
 * Build a standard {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} component, providing shared functionalities and props, to optimize the process.
 *
 * @param name component name (will be its id)
 * @param Component component to render
 * @param commonProps shared common props (like `className`, `hide` or `dark`)
 * @param additionalProps additional props applied on rendered component
 * @param wrapper component external wrapper (like `button`, `a` or `p`, if not set will be `div`)
 *
 * @returns built component, ready to be rendered
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export const buildComponent = ({
  name,
  Component,
  commonProps,
  additionalProps,
  wrapper,
  animated,
}: BuilderProps) => {
  const SelectedWrapper = wrapper || "div";

  const props = {
    "data-id": commonProps!.id,
    id: name,
    key: commonProps?.key,
    className: classNames(commonProps!.className, {
      dark: commonProps!.dark,
      animated: animated,
      "component-hidden": commonProps!.hide,
      shadowed: commonProps!.shadow,
      styled: !commonProps!.unstyled,
    }),
    style: commonProps!.style,
    ...additionalProps,
  };

  if (SelectedWrapper === "input") {
    return <SelectedWrapper {...props} />;
  } else {
    return <SelectedWrapper {...props}>{Component}</SelectedWrapper>;
  }
};

/**
 * Build a standard {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} component, with some extra functionalities.
 *
 * @returns built component, ready to be rendered, enhanced with some functionalities
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=box-components
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export const withMobrixUiValue = <T=any>({
  name,
  additionalProps,
  wrapper,
  commonProps,
  defaultValue,
  inputValue,
  render,
  props,
}: BuilderProps & {
  inputValue?: T;
  defaultValue: T;
  render?: (
    value: T,
    setValue: React.Dispatch<React.SetStateAction<T>>
  ) => BuilderProps["Component"];
  props?: (
    value: T,
    setValue: React.Dispatch<React.SetStateAction<T>>
  ) => DeepPartial<BuilderProps>;
}) => {
  const [value, setValue] = React.useState<T>(inputValue || defaultValue);

  const processedProps = props ? props(value, setValue) : {};

  React.useEffect(() => {
    if (inputValue !== undefined && inputValue !== null) {
      setValue(inputValue);
    }
  }, [inputValue]);

  return buildComponent({
    name,
    additionalProps,
    commonProps,
    Component: render && render(value, setValue),
    wrapper,
    ...processedProps,
  });
};
