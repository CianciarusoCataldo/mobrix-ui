import "../styles/animations.css";
import "../styles/shared-styles.css";

import React, { useEffect, useRef } from "react";

import { BuilderProps, CommonProps } from "../../types/global";

/* istanbul ignore next */
const useOutsideAlerter = (ref: any, callback: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
};

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
 * @see https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=components-building-process
 * @see https://github.com/CianciarusoCataldo/mobrix-ui-tools/
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export const buildMobrixUiStandardComponent = ({
  name,
  Component,
  /* istanbul ignore next */
  commonProps = {},
  additionalProps = {},
  wrapper: SelectedWrapper = "div",
}: BuilderProps) => {
  let a11y = commonProps.a11y !== undefined ? commonProps.a11y : true;

  let props: CommonProps & Record<string, any> = {
    "data-mobrix-ui-id": name,
    "data-mobrix-ui-dark": commonProps.dark,
    "data-mobrix-ui-styled": !commonProps.unstyled,
    "data-mobrix-ui-shadow": commonProps.shadow,
    "data-mobrix-ui-animated": commonProps.animated,
    "data-mobrix-ui-hide": commonProps.hide,
    "data-mobrix-ui-a11y": commonProps.a11y,
    "data-mobrix-ui-test": commonProps.testId,
    "data-mobrix-ui-a11y-dark":
      a11y &&
      (commonProps.a11yDark !== undefined
        ? commonProps.a11yDark
        : commonProps.dark),
    id: commonProps.id,
    "aria-label": a11y ? commonProps.a11yLabel : "",
    tabIndex: a11y ? "0" : "-1",
    className: commonProps.className,
    style: commonProps.style,
    onFocus: commonProps.onFocus,
    onKeyDown: commonProps.onKeyDown,
    ...additionalProps,
  };

  const wrapperRef = useRef(null);
  commonProps.onFocusLost &&
    useOutsideAlerter(wrapperRef, commonProps.onFocusLost);

  if (SelectedWrapper === "input") {
    return (
      <SelectedWrapper ref={wrapperRef} {...props} key={commonProps.key} />
    );
  } else {
    return (
      <SelectedWrapper ref={wrapperRef} {...props} key={commonProps.key}>
        {Component}
      </SelectedWrapper>
    );
  }
};

/**
 * Build a reactive {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} component, with some extra functionalities.
 *
 * @returns built component, ready to be rendered, enhanced with some functionalities
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/docs/#/guide?id=reactive-components
 * @see https://github.com/CianciarusoCataldo/mobrix-ui-tools/
 * @see https://cianciarusocataldo.github.io/mobrix-ui/
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export const buildMobrixUiReactiveComponent = <T=any>({
  name,
  additionalProps,
  wrapper,
  commonProps,
  defaultValue,
  inputValue,
  render,
  props,
  Component,
}: BuilderProps<
  (props: {
    value: T;
    setValue: React.Dispatch<React.SetStateAction<T>>;
  }) => BuilderProps["Component"]
> & {
  inputValue?: T;
  defaultValue: T;
  render?: (
    value: T,
    setValue: React.Dispatch<React.SetStateAction<T>>
  ) => BuilderProps["Component"];
  props?: (
    value: T,
    setValue: React.Dispatch<React.SetStateAction<T>>
  ) => Omit<BuilderProps, "name">;
}) => {
  const [value, setValue] = React.useState<T>(inputValue || defaultValue);

  const processedProps = props ? props(value, setValue) : {};

  /* istanbul ignore next */
  React.useEffect(() => {
    if (
      inputValue !== undefined &&
      inputValue !== null &&
      value !== inputValue
    ) {
      setValue(inputValue);
    }
  }, [JSON.stringify(inputValue)]);

  return buildMobrixUiStandardComponent({
    name,
    additionalProps,
    commonProps,
    Component: Component && Component({ value, setValue }),
    wrapper,
    ...processedProps,
  });
};
