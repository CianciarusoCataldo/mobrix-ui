import "../styles/core/index.css";
import "../styles/themes/base/index.css";
import "../styles/themes/full/index.css";

import React, { useEffect, useRef } from "react";

import {
  BuilderProps,
  BuilderPropsReactive,
  CommonProps,
} from "../../types/global";

import { SHARED_PROPS, parseFts, parseAtts } from "./constants";
import { Features } from "../../types/global/global";

/* istanbul ignore next */
const useOutAlert = (ref: any, callback: () => void) => {
  useEffect(() => {
    const handler = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
};

export const parseProps = (props: CommonProps): CommonProps => ({
  ...SHARED_PROPS,
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
  { features: ftrs = {}, fts = "", ...props }: CommonProps
) => {
  const sFts = { ...features, ...ftrs };
  let res = `${fts};`;
  const fProps = Object.keys(sFts).filter((feature) => sFts[feature]);
  const mbxfts = parseFts(props);
  [...fProps, ...Object.keys(props)]
    .filter((feature, index) => mbxfts[feature])
    .forEach((feature, index) => {
      res += `${mbxfts[feature]};`;
    });

  return res;
};

const getMbxAtts = (props: CommonProps) => {
  let mbxAtts = "";
  const ATTS = parseAtts(props);
  Object.keys(ATTS)
    .filter((attr: keyof CommonProps, index) => ATTS[attr])
    .forEach((attr, index) => {
      mbxAtts += `${ATTS[attr]};`;
    });

  return mbxAtts;
};

/**
 * Build a standard {@link https://cianciarusocataldo.github.io/mobrix.ui MoBrix-ui} component, providing shared functionalities and props, to optimize the process.
 *
 * @param name component name
 * @param Component component to render
 * @param commonProps {@link https://cianciarusocataldo.github.io/mobrix-ui/docs/#shared-properties shared MoBrix-ui properties}
 * @param props additional props applied on rendered component
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
const getMbxUiStandard = ({
  name,
  Component,
  scl = "",
  /* istanbul ignore next */
  commonProps: cprops = {},
  wrapper: Wrapper = "div",
  features = {},
  fts = "",
}: BuilderProps) => {
  let mbxFts = `${getMbxFts(features, cprops)};${fts}`;
  let mbxAtts = getMbxAtts(cprops);

  let props: CommonProps & Record<string, any> = {
    "data-mbx-id": name,
    ...(mbxAtts.length > 0 && {
      "data-mbx-atts": mbxAtts,
    }),
    ...(mbxFts.length > 2 && {
      "data-mbx-fts": mbxFts,
    }),
    "data-mbx-scl": `${scl};${cprops.scl || ""}`,
    ...(cprops.mbxClass && {
      "data-mbx-cls": cprops.mbxClass,
    }),
    id: cprops.id,
    className: cprops.className,
    style: cprops.style,
    onFocus: cprops.onFocus,
    ...(cprops.onKeyDown && { onKeyDown: cprops.onKeyDown }),
    tabIndex: "-1",
    ...(cprops.a11y &&
      !cprops.disabled && {
        tabIndex: cprops.tabIndex ? String(cprops.tabIndex) : "0",
        ...(cprops.a11yLabel && {
          "aria-label": cprops.a11yLabel,
        }),
      }),
    ...cprops.props,
  };

  const wRef = useRef(null);
  cprops.onFocusLost && useOutAlert(wRef, cprops.onFocusLost);

  if (Wrapper === "input") {
    return (
      <Wrapper
        ref={wRef}
        {...props}
        tabIndex={Number(props.tabIndex)}
        key={cprops.key}
      />
    );
  } else {
    return (
      // @ts-ignore
      <Wrapper ref={wRef} {...props} key={cprops.key}>
        {Component}
      </Wrapper>
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
const getMbxUiReactive = <T=any>({
  name,
  wrapper,
  commonProps,
  defaultValue,
  inputValue,
  props,
  Component,
  features,
  scl,
  fts
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

  const processed = props ? props(value, setValue) : {};

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

  return getMbxUiStandard({
    name,
    commonProps,
    Component: Component && Component({ value, setValue }),
    wrapper,
    features,
    scl,
    fts,
    ...processed,
  });
};

export const buildMbxStandard = (
  /* istanbul ignore next */
  props: Record<string, any>,
  callback: (props: CommonProps) => BuilderProps
) => {
  const inputCommonProps = parseProps(props);
  const builderProps = callback(inputCommonProps);

  return getMbxUiStandard({
    commonProps: inputCommonProps,
    ...builderProps,
  });
};

// prettier-ignore
export const buildMbxReactive = <T=any>(
  props: Record<string, any>,
  callback: (props:CommonProps) => BuilderPropsReactive<T>
) => {
  const inputCommonProps = parseProps(props);
  const builderProps = callback(inputCommonProps);

  return getMbxUiReactive<T>({
    commonProps: inputCommonProps,
    ...builderProps,
  });
};
