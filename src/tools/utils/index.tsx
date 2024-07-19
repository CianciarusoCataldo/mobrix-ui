import "../styles/core/index.css";
import "../styles/themes/base/index.css";
import "../styles/themes/full/index.css";

import React, { useEffect, useRef } from "react";

import {
  BuilderProps,
  BuilderPropsReactive,
  CommonProps,
  Features,
} from "../../types/global";

import { D_PROPS, parseFts } from "./constants";

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

export const parseProps = (props: CommonProps): CommonProps => {
  let res = {
    ...D_PROPS,
    ...props,
    ...(props.unstyled && {
      shadow: false,
      background: false,
      animated: false,
      hover: false,
    }),
    ...(props.disabled && {
      animated: false,
      hover: false,
      a11y: false,
    }),
  };

  if (!res["datas"]) {
    res["datas"] = {};
  }

  const riserved = ["id", "dk", "fts"].map((ris) => `data-mbx-${ris}`);

  Object.keys(props)
    .filter((prop) => prop.startsWith("data-") && !riserved.includes(prop))
    .forEach((prop) => {
      res["datas"][prop] = props[prop];
    });

  return res;
};

const getMbxFts: (
  features: Features,
  props: CommonProps
) => {
  styles: Record<string, any>;
  fts?: Partial<Record<keyof Features, boolean>>;
} = (features, { features: ftrs = {}, ...props }) => {
  const sFts = { ...features, ...ftrs };
  let fts = {};
  let styles = {};
  const fProps = Object.keys(sFts).filter((feature) => sFts[feature]);
  const mbxfts = parseFts(props);
  [...fProps, ...Object.keys(props)]
    .filter((feature, index) => mbxfts[feature])
    .forEach((feature, index) => {
      fts[feature] = true;
      if (mbxfts[feature].var) {
        styles[`--mbx-${mbxfts[feature].var}`] = mbxfts[feature].val;
      }
    });

  return { styles, fts };
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
  /* istanbul ignore next */
  commonProps: cprops = {},
  wrapper: Wrapper = "div",
  features = {},
  cssBg = [],
  styles = {},
  addProps = {},
}: BuilderProps) => {
  const parsedFts = getMbxFts(features, cprops);
  let props: CommonProps & Record<string, any> = {
    "data-mbx-id": name,
    ...(cprops.dark && { "data-mbx-dk": "" }),
    ...(parsedFts.fts.colFc && { "data-mbx-cfc": "" }),
    id: cprops.id,
    className: cprops.className,
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
    ...addProps,
    ...cprops["datas"],
  };
  let cstyles = styles;

  if (cprops.style) {
    cstyles = { ...cprops.style, ...cstyles };
  }

  if (cprops.hide) {
    cstyles["display"] = "none";
  }

  if (!cprops.background) {
    cstyles["--mbx-c-bg"] = "transparent";
    cstyles["--mbx-c-bgc"] = "transparent";
    cssBg.forEach((css) => (cstyles[`--mbx-${css}`] = "transparent"));
  }

  if (!cprops.shadow) {
    cstyles["--mbx-sh"] = "none";
  }

  if (!cprops.disabled) {
    if (cprops.a11y) {
      cstyles["--mbx-sh-fc"] = "var(--mbx-c-fc)";
    }

    cstyles = { ...cstyles, ...parsedFts.styles };

    if (!cprops.hover) {
      cstyles["--mbx-op-hov"] = 1;
    }

    if (cprops.animated && cprops.animation) {
      cstyles["--mbx-an"] = `var(${cprops.animation})`;
      if (cprops.animation === "shake") {
        cstyles["animationIterationCount"] = 1;
      }
    }
  } else {
    cstyles["cursor"] = "unset";
    cstyles["--mbx-op"] = 0.6;
    cstyles["--mbx-op-hov"] = 0.6;
  }

  const wRef = useRef(null);
  cprops.onFocusLost && useOutAlert(wRef, cprops.onFocusLost);

  if (Wrapper === "input") {
    return (
      <Wrapper
        ref={wRef}
        {...props}
        tabIndex={Number(props.tabIndex)}
        style={cstyles}
        key={cprops.key}
      />
    );
  } else {
    return (
      // @ts-ignore
      <Wrapper ref={wRef} style={cstyles} {...props} key={cprops.key}>
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
  cssBg,
  styles,
  addProps
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
    cssBg,
    styles,
    addProps,
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
