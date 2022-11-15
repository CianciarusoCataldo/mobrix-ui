import { Demo } from "@cianciarusocataldo/demo-ui";

const DemoComponent = ({
  rows,
  props: inputProps,
  children,
  parseProps,
  label,
  startColor,
}: {
  label?: string;
  children: (props: Record<string, any>) => JSX.Element;
  rows?: string[][];
  props: Record<string, any>;
  startColor?: string;
  parseProps?: (
    props: Record<string, any>,
    setProps: any
  ) => Record<string, any>;
}) => {
  return (
    <Demo props={inputProps} rows={rows} label={label} startColor={startColor}>
      {(props: Record<string, any>, setProps: any) => {
        let newProps = { ...props };
        if (parseProps) {
          newProps = parseProps(newProps, setProps);
        }

        return (
          <div className="flex flex-col items-center">{children(newProps)}</div>
        );
      }}
    </Demo>
  );
};

export default DemoComponent;
