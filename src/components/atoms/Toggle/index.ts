import "./styles.css";

import { ToggleComponent } from "../../../types";

import toggleComponent from "./component";
import { buildMbxReactiveComponent } from "../../../tools";

/**
 * MBX_DESCRIPTION
 *
 * MBX_PROPS
 *
 * @example MBX_EXAMPLE
 *
 * @since MBX_SINCE
 *
 * @author MBX_AUTHOR
 *
 * @copyright MBX_COPYRIGHT
 */
const Toggle: ToggleComponent = ({
  value: inputValue,
  icon,
  offIcon,
  onIcon,
  onChange = () => {},
  additionalProps = {},
  ...commonProps
}) =>
  buildMbxReactiveComponent<boolean>(commonProps, (props) => ({
    name: "toggle",
    props: (status, setStatus) => ({
      additionalProps: {
        ...additionalProps,
        ...(!props.disabled && {
          onClick: () => {
            onChange(!status);
            setStatus(!status);
          },
          onKeyDown: (e) => {
            if (e.code === "Enter") {
              onChange(!status);
              setStatus(!status);
            }
          },
        }),
      },
    }),
    Component: ({ value, setValue }) =>
      toggleComponent({
        value,
        setValue,
        icon,
        offIcon,
        onIcon,
        ...props,
      }),
    defaultValue: true,
    inputValue,
    commonProps: props,
  }));

export default Toggle;
