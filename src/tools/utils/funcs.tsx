import "../styles/core/index.css";

import React, { useEffect, useRef } from "react";

import {
  BuilderProps,
  BuilderPropsReactive,
  MbxSharedProps,
  Features,
} from "../../types/global";

import { D_PROPS, restricted } from "./constants";

const filter = (obj: any[], prf) =>
  obj
    .filter((el) => !!el[0])
    .reduce(
      (pre, [v1, v2, v3, v4]: any) => ({
        ...pre,
        [`${v4 ? "" : prf}${v2}`]: v3 || "",
      }),
      {}
    );

const parseFts: (props: MbxSharedProps & Features) => {
  parS: Record<string, any>;
  parP: Record<string, any>;
} = ({
  a11y,
  a11yLabel,
  hover,
  hide,
  tabIndex,
  active,
  animation,
  background,
  onFocus,
  onKeyDown,
  shadow,
  dark,
  disabled,
  opHov,
  colFc,
  noShFc,
  opFc,
  wBg,
  wCl,
  wClH,
  wAll,
  wAllc,
  wBgCl,
}) => ({
  parS: filter(
    [
      [hide, "display", "none", true],
      [animation === "shake", "animationIterationCount", 1, "", true],
      [active, "op-act", 0.4],
      [!shadow, "sh", "none"],
      [a11y && opFc, "op-f", 0.4],
      [opHov, "op-hov", hover ? 0.7 : 1],
      [noShFc, "sh-def", "none"],
      [animation, "an", animation],
    ],
    "--mbx-"
  ),
  parP: filter(
    [
      [dark, "dk"],
      [hover, "hv"],
      [disabled, "dsb"],
      [wBgCl, "wbc"],
      [wBg, "wb"],
      [wCl, "wc"],
      [wClH, "wch"],
      [wAll, "wall"],
      [wAllc, "wallc"],
      [!background, "trn"],
      [a11y && colFc, "cfc"],
      [!!onKeyDown, "onKeyDown", onKeyDown, true],
      [!!onFocus, "onFocus", onFocus, true],
      [a11y && a11yLabel, "a11yLabel", a11yLabel, true],
      [a11y, "tabIndex", String(tabIndex || 0), true],
    ],
    "data-mbx-"
  ),
});

const parseProps = (
  props: MbxSharedProps
): MbxSharedProps & { datas: Record<string, any> } => ({
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
  ...(!props.animated && {
    animation: undefined,
  }),
  datas: Object.keys(props)
    .filter(
      (prop) =>
        prop.startsWith("data-") &&
        !restricted.includes(prop.replace("data-mbx-", ""))
    )
    .reduce(
      (pre, key) => ({
        ...pre,
        [key]: props[key],
      }),
      {}
    ),
});

const getMbxFts: (
  props: MbxSharedProps & {
    feats: Features;
  }
) => {
  parS: Record<string, any>;
  parP: Record<string, any>;
} = ({ feats, features: ftrs = {}, ...props }) => {
  return parseFts({ ...feats, ...ftrs, ...props });
};

const getMbxUiStandard = ({
  name,
  Component,
  /* istanbul ignore next */
  mbxProps: cprops = {},
  wrapper: Wrapper = "div",
  features = {},
  styles = {},
  addProps = {},
}: BuilderProps) => {
  const { parP, parS } = getMbxFts({
    ...cprops,
    feats: features,
  });
  const props: MbxSharedProps & Record<string, any> = {
    ...cprops["datas"],
    tabIndex: "-1",
    ...cprops.props,
    ...addProps,
    ...parP,
    "data-mbx-id": name,
    className: cprops.className,
    id: cprops.id,
  };

  const cstyles = {
    ...styles,
    ...parS,
    ...(cprops.style && { ...cprops.style }),
  };

  const wRef = useRef(null);
  /* istanbul ignore next */
  cprops.onFocusLost &&
    useEffect(() => {
      const handler = (event) => {
        if (wRef.current && !wRef.current.contains(event.target)) {
          cprops.onFocusLost();
        }
      };
      document.addEventListener("mousedown", handler);
      return () => {
        document.removeEventListener("mousedown", handler);
      };
    });

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
  defV,
  inpV,
  props,
  Component,
  ...bprops
}: BuilderPropsReactive<T>) => {
  const [value, setValue] = React.useState<T>(inpV || defV);

  const parsed = props ? props(value, setValue) : {};

  /* istanbul ignore next */
  React.useEffect(() => {
    if (
      inpV !== undefined &&
      inpV !== null &&
      value !== inpV
    ) {
      setValue(inpV);
    }
  }, [JSON.stringify(inpV)]);

  return getMbxUiStandard({
    Component: Component && Component({ value, setValue }),
    ...bprops,
    ...parsed,
  });
};

const parse = (
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
