import "../styles/core/index.css";
import "../styles/components/index.css";

import React, { useEffect, useRef } from "react";

import { BuilderComponent, BuilderProps, CommonProps } from "../../types/global";
import { DEFAULT_COMMON_PROPS } from "./constants";

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

export const generateElementsArray = (components: { condition: boolean, component: BuilderComponent }[]) =>
  components.filter(component => component.condition).map((component, index) => component.component)


export const parseCommonProps = (props: CommonProps): CommonProps => ({
  ...DEFAULT_COMMON_PROPS,
  ...props,
})
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

  const inputCommonProps = parseCommonProps(commonProps)

  let props: CommonProps & Record<string, any> = {
    "data-mbx-id": name,
    "data-mbx-dark": !!inputCommonProps.dark,
    "data-mbx-styled": !inputCommonProps.unstyled,
    "data-mbx-shadow": inputCommonProps.shadow,
    "data-mbx-animated": inputCommonProps.animated && !inputCommonProps.disabled,
    "data-mbx-hide": inputCommonProps.hide,
    "data-mbx-a11y": inputCommonProps.a11y,
    "data-mbx-background": !inputCommonProps.noBackground,
    "data-mbx-hover": (!inputCommonProps.noHover) && (!inputCommonProps.disabled),
    "data-mbx-enabled": !inputCommonProps.disabled,
    "data-mbx-a11y-dark":
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
    ...inputCommonProps.additionalProps
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
export const buildMobrixUiReactiveComponent = <T = any>({
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
