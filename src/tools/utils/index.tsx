import "../styles/core/index.css";

import React, { useEffect, useRef } from "react";

import {
  BuilderProps,
  BuilderPropsReactive,
  MbxSharedProps,
  Features,
} from "../../types/global";

import { D_PROPS } from "./constants";

const parseFts: (
  props: MbxSharedProps & { cssBg: string[] }
) => Record<keyof Features & MbxSharedProps, any> | undefined = ({
  cssBg,
  a11y,
  a11yLabel,
  hover,
  hide,
  background,
  tabIndex,
  active,
  animated,
  animation,
  style,
  onFocus,
  onKeyDown,
  shadow,
  dark,
  disabled,
}) => ({
  opHov: { styles: { "--mbx-op-hov": hover ? 0.7 : 1 } },
  noShFc: { styles: { "--mbx-sh-def": "none" } },
  opFc: a11y && { styles: { "--mbx-op-f": 0.4 } },
  colFc: a11y && {
    props: { "data-mbx-cfc": "" },
  },
  hide: hide && { styles: { display: "none" } },
  background: !background && {
    styles: cssBg.reduce((o, key) => ({ ...o, [key]: "transparent" }), {}),
  },
  shadow: !shadow && { styles: { "--mbx-sh": "none" } },
  a11y: a11y && {
    props: {
      tabIndex: tabIndex ? String(tabIndex) : "0",
      ...(a11yLabel && {
        "aria-label": a11yLabel,
      }),
    },
    styles: { "--mbx-sh-fc": "var(--mbx-c-fc)" },
  },
  hover: hover && { props: { "data-mbx-hv": "" } },
  active: active && { styles: { "--mbx-op-act": 0.4 } },
  animated: animated &&
    animation && {
      styles: {
        "--mbx-an": animation,
        ...(animation === "shake" && {
          animationIterationCount: 1,
        }),
      },
    },
  disabled: disabled && {
    props: { "data-mbx-dsb": "" },
  },
  dark: dark && { props: { "data-mbx-dk": "" } },
  onFocus: onFocus && { props: { onFocus } },
  onKeyDown: onKeyDown && { props: { onKeyDown } },
});

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

export const parseProps = (props: MbxSharedProps): MbxSharedProps => {
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

  const riserved = ["id", "dk", "cfc", "hv"].map((ris) => `data-mbx-${ris}`);

  Object.keys(props)
    .filter((prop) => prop.startsWith("data-") && !riserved.includes(prop))
    .forEach((prop) => {
      res["datas"][prop] = props[prop];
    });

  return res;
};

const getMbxFts: (
  props: MbxSharedProps & {
    cssBg: string[];
    feats: Features;
  }
) => {
  parS: Record<string, any>;
  parP: Record<string, any>;
} = ({ feats, features: ftrs = {}, cssBg, ...props }) => {
  const sFts = { ...feats, ...ftrs, ...props };
  let parS = {};
  let parP = {};
  const fProps = Object.keys(sFts).filter((feature) => sFts[feature]);
  const mbxfts = parseFts({ ...props, cssBg });
  [...fProps, ...Object.keys(props)]
    .filter((ft, i) => mbxfts[ft])
    .forEach((ft, i) => {
      const { styles: stls = {}, props: prps = {} } = mbxfts[ft];
      parS = { ...parS, ...stls };
      parP = { ...parP, ...prps };
    });

  return { parS, parP };
};

const getMbxUiStandard = ({
  name,
  Component,
  /* istanbul ignore next */
  mbxProps: cprops = {},
  wrapper: Wrapper = "div",
  features = {},
  cssBg = [],
  styles = {},
  addProps = {},
}: BuilderProps) => {
  const { parP, parS } = getMbxFts({
    ...cprops,
    cssBg: ["c-bg", "c-bgc", ...cssBg].map((css) => `--mbx-${css}`),
    feats: features,
  });
  const props: MbxSharedProps & Record<string, any> = {
    "data-mbx-id": name,
    id: cprops.id,
    className: cprops.className,
    tabIndex: "-1",
    ...cprops.props,
    ...addProps,
    ...cprops["datas"],
    ...parP,
  };

  const cstyles = {
    ...styles,
    ...parS,
    ...(cprops.style && { ...cprops.style }),
  };

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
      <Wrapper
        // @ts-ignore
        ref={wRef}
        style={cstyles}
        {...props}
        key={cprops.key}
        tabIndex={Number(props.tabIndex)}
      >
        {Component}
      </Wrapper>
    );
  }
};

// prettier-ignore
const getMbxUiReactive = <T=any>({
  defaultValue,
  inputValue,
  props,
  Component,
  ...bprops
}: BuilderPropsReactive<T>) => {
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
    Component: Component && Component({ value, setValue }),
    ...bprops,
    ...processed,
  });
};

export const parse = (
  /* istanbul ignore next */
  props,
  callback
) => {
  const input = parseProps(props);
  const bProps = callback(input);
  return {
    mbxProps: input,
    ...bProps,
  };
};

export const buildMbxStandard = (
  /* istanbul ignore next */
  props: Record<string, any>,
  callback: (props: MbxSharedProps) => BuilderProps
) => getMbxUiStandard(parse(props, callback));

// prettier-ignore
export const buildMbxReactive = <T=any>(
  props: Record<string, any>,
  callback: (props:MbxSharedProps) => BuilderPropsReactive<T>
) => getMbxUiReactive<T>(parse(props, callback));
