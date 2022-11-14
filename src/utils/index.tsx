import "../styles/animations.css";

import "../styles/shared-styles.css";

import classNames from "classnames";
import React from "react";

import {
  BoxComponent,
  BuilderComponent,
  BuilderProps,
  DeepPartial,
} from "./global";

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
}: BuilderProps) => {
  const SelectedWrapper = wrapper || "div";

  const props = {
    "data-id": commonProps!.id,
    id: name,
    key: commonProps?.key,
    className: classNames(commonProps!.className, {
      dark: commonProps!.dark,
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

/**
 * Build a standard {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} component, decorating it with some functionalitis (like top label or dynamic value update).
 *
 * @param value actual component value
 * @param defaultValue default value (used when no value is set)
 * @param {JSX.Element | string} label Component top label
 * @param callback a function that returns an Object containing Component Builder props, properly formatted
 *
 * @returns built component, ready to be rendered, enhanced with some functionalities (like the top label)
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=box-components
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export const buildBoxComponent = <T extends any>({
  value: actualValue,
  defaultValue,
  label,
  callBack,
}: BoxComponent<T> & {
  defaultValue?: T;
  callBack: (value: T, setValue: (newValue: T) => void) => BuilderProps;
}) => {
  const startValue = actualValue || defaultValue;

  const [value, setValue] = React.useState<T>(startValue!);

  React.useEffect(() => {
    if (actualValue !== undefined && actualValue !== null) {
      setValue(actualValue);
    }
  }, [actualValue]);

  let { commonProps, additionalProps, ...props } = callBack(value, setValue);

  return buildComponent({
    ...props,
    commonProps: { ...commonProps, shadow: false, className: undefined },
    Component: (
      <div className="box-component">
        {label && (
          <div className="box-label" key="mobrix-box-label">
            {label}
          </div>
        )}
        <div
          key="mobrix-box-container"
          className={classNames(
            commonProps!.className,
            {
              shadowed: commonProps!.shadow,
            },
            "container"
          )}
          {...additionalProps}
        >
          {props.Component}
        </div>
      </div>
    ),
  });
};
