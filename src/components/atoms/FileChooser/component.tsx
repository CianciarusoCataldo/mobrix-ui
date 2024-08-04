import React from "react";
import Label from "../Label";
import Button from "../Button";
import {
  BuilderComponent,
  FileChooserProps,
  MbxUiComponent,
} from "../../../types";
import { getMargins } from "../../../tools/utils/utils";

const Component: MbxUiComponent<FileChooserProps, BuilderComponent[]> = ({
  /* istanbul ignore next */
  onChange = () => {},
  hideFileName,
  namePosition,
  dark,
  disabled,
  a11y,
  hover,
  shadow,
  animated,
  children = "Select file",
}) => {
  const [file, setFile] = React.useState<File>();
  const inRef = React.useRef<HTMLInputElement | null>(null);
  const cProps = { dark, hover, disabled, a11y, animated };

  return [
    <Label
      {...cProps}
      style={getMargins(namePosition)}
      hide={hideFileName || !file}
      animation="fade-in"
      key="fc-l"
    >
      {/* istanbul ignore next */ file?.name}
    </Label>,
    <Button
      {...cProps}
      shadow={shadow}
      onClick={() => {
        /* istanbul ignore next */
        inRef?.current?.click();
      }}
      key="fc-b"
    >
      {children}
    </Button>,
    <input
      key="fc-in"
      ref={inRef}
      style={{ display: "none" }}
      type="file"
      onChange={
        /* istanbul ignore next */
        (e) => {
          if (e.currentTarget.files) {
            const f = Array.from(e.currentTarget.files)[0];
            setFile(f);
            onChange(f);
          }
        }
      }
    />,
  ];
};

export default Component;
