import { DrawerProps } from "../../../types";

export const locationCss: Record<
  DrawerProps["position"],
  { main: string; btn: string }
> = {
  top: { main: "flxcr;wfu", btn: "mxauto" },
  "top-left": { main: "flxcr", btn: "mxauto" },
  "top-right": { main: "flxcr", btn: "mxauto" },
  bottom: { main: "flxc;wfu", btn: "mxauto" },
  "bottom-left": { main: "flxc", btn: "mxauto" },
  "bottom-right": { main: "flxc", btn: "mxauto" },
  right: { main: "flxr", btn: "myauto" },
  left: { main: "flxrr", btn: "myauto" },
};
