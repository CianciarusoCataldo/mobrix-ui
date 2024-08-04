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
  const inputFile = React.useRef<HTMLInputElement | null>(null);
  const cProps = { dark, hover, disabled, shadow, a11y, animated };

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
      onClick={() => {
        /* istanbul ignore next */
        inputFile?.current?.click();
      }}
      key="fc-b"
    >
      {children}
    </Button>,
    <input
      key="fc-in"
      ref={inputFile}
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
