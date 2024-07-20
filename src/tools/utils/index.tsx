import "../styles/core/index.css";
import "../styles/themes/base/index.css";

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
      active: false,
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
    id: cprops.id,
    className: cprops.className,
    tabIndex: "-1",
    ...(cprops.dark && { "data-mbx-dk": "" }),
    ...(parsedFts.fts.colFc && { "data-mbx-cfc": "" }),
    ...(cprops.onFocus && { onFocus: cprops.onFocus }),
    ...(cprops.onKeyDown && { onKeyDown: cprops.onKeyDown }),
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
    ["c-bg", "c-bgc", ...cssBg].forEach(
      (css) => (cstyles[`--mbx-${css}`] = "transparent")
    );
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

    if (cprops.active) {
      cstyles["--mbx-op-act"] = 0.4;
    }

    if (cprops.animated && cprops.animation) {
      cstyles["--mbx-an"] = cprops.animation;
      if (cprops.animation === "shake") {
        cstyles["animationIterationCount"] = 1;
      }
    }
  } else {
    cstyles["cursor"] = "unset";
    cstyles["--mbx-op"] = 0.6;
    cstyles["--mbx-op-hov"] = 0.6;
    cstyles["--mbx-op-act"] = 0.6;
    cstyles["--mbx-sh-fc"] = "none";
    cstyles["--mbx-c-fc"] = "none";
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
