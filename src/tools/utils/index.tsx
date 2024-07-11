import "../styles/core/index.css";
import "../styles/themes/base/index.css";
import "../styles/themes/full/index.css";

import React, { useEffect, useRef } from "react";

import {
  BuilderProps,
  BuilderPropsReactive,
  CommonProps,
} from "../../types/global";

import { DEFAULT_COMMON_PROPS, FEATURES_PROPS, parseAtts } from "./constants";
import { Features } from "../../types/global/global";

/* istanbul ignore next */
const useOutAlert = (ref: any, callback: () => void) => {
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

export const parseCommonProps = (props: CommonProps): CommonProps => ({
  ...DEFAULT_COMMON_PROPS,
  ...props,
  ...(props.unstyled && {
    shadow: false,
    background: false,
    animated: false,
    hover: false,
  }),
});

const getMbxFts = (
  features: Features,
  { features: ftrs = {}, fts = "", ...commonProps }: CommonProps
) => {
  let mbxFts = `${fts}`;
  const featureProps = Object.keys({ ...features, ...ftrs }).filter(
    (feature) => features[feature]
  );
  [...featureProps, ...Object.keys(commonProps)]
    .filter((feature, index) => FEATURES_PROPS[feature])
    .forEach((feature, index) => {
      const enabledFeature = FEATURES_PROPS[feature](commonProps);
      mbxFts += enabledFeature.enabled ? `${enabledFeature.featureKey};` : "";
    });

  return mbxFts;
};

const getMbxAtts = (commonProps: CommonProps) => {
  let mbxAttributes = "";
  const ATTS = parseAtts(commonProps);
  Object.keys(ATTS)
    .filter((mbxAttribute: keyof CommonProps, index) => ATTS[mbxAttribute])
    .forEach((mbxAttribute, index) => {
      mbxAttributes += `${ATTS[mbxAttribute]};`;
    });

  return mbxAttributes;
};

/**
 * Build a standard {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} component, providing shared functionalities and props, to optimize the process.
 *
 * @param name component name
 * @param Component component to render
 * @param commonProps {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#shared-properties shared MoBrix-ui properties}
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
 * @copyright 2024 Cataldo Cianciaruso
 */
const buildMobrixUiStandardComponent = ({
  name,
  Component,
  scl = "",
  /* istanbul ignore next */
  commonProps = {},
  wrapper: SelectedWrapper = "div",
  features = {},
}: BuilderProps) => {
  let mbxFts = getMbxFts(features, commonProps);
  let mbxAtts = getMbxAtts(commonProps);

  let props: CommonProps & Record<string, any> = {
    "data-mbx-id": name,
    ...(mbxAtts.length > 0 && {
      "data-mbx-atts": mbxAtts,
    }),
    ...(mbxFts.length > 0 && {
      "data-mbx-fts": mbxFts,
    }),
    "data-mbx-scl": `${scl};${commonProps.scl ? commonProps.scl : ""}`,
    id: commonProps.id,
    className: commonProps.className,
    style: commonProps.style,
    onFocus: commonProps.onFocus,
    ...(commonProps.onKeyDown && { onKeyDown: commonProps.onKeyDown }),
    tabIndex: "-1",
    ...(commonProps.a11y &&
      !commonProps.disabled && {
        tabIndex: commonProps.tabIndex ? String(commonProps.tabIndex) : "0",
        ...(commonProps.a11yLabel && {
          "aria-label": commonProps.a11yLabel,
        }),
      }),
    ...commonProps.additionalProps,
  };

  const wrapperRef = useRef(null);
  commonProps.onFocusLost && useOutAlert(wrapperRef, commonProps.onFocusLost);

  if (SelectedWrapper === "input") {
    return (
      <SelectedWrapper
        ref={wrapperRef}
        {...props}
        tabIndex={Number(props.tabIndex)}
        key={commonProps.key}
      />
    );
  } else {
    return (
      // @ts-ignore
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
 * @copyright 2024 Cataldo Cianciaruso
 */
// prettier-ignore
const buildMbxUiReactiveComponent = <T=any>({
  name,
  wrapper,
  commonProps,
  defaultValue,
  inputValue,
  props,
  Component,
  features,
  scl
}: BuilderProps<
  (props: {
    value: T;
    setValue: React.Dispatch<React.SetStateAction<T>>;
  }) => BuilderProps["Component"]
> & {
  inputValue?: T;
  defaultValue: T;
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
    commonProps,
    Component: Component && Component({ value, setValue }),
    wrapper,
    features,
    scl,
    ...processedProps,
  });
};

export const buildMbxStandardComponent: (
  props: CommonProps,
  callback: (props: CommonProps) => BuilderProps
) => React.JSX.Element = (
  /* istanbul ignore next */
  commonProps,
  callback
) => {
  const inputCommonProps = parseCommonProps(commonProps);

  const builderProps = callback(inputCommonProps);

  return buildMobrixUiStandardComponent({
    commonProps: inputCommonProps,
    ...builderProps,
  });
};

// prettier-ignore
export const buildMbxReactiveComponent = <T=any>(
  sharedProps: CommonProps,
  callback: (props:CommonProps) => BuilderPropsReactive<T>
) => {
  const inputCommonProps = parseCommonProps(sharedProps);

  const builderProps = callback(inputCommonProps);

  return buildMbxUiReactiveComponent<T>({
    commonProps: inputCommonProps,
    ...builderProps,
  });
};
