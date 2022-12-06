import { Demo } from "@cianciarusocataldo/demo-ui";

const DemoComponent = <T extends Record<string, any> = {}>({
  rows,
  props: inputProps,
  children,
  parseProps,
  label,
  startColor,
}: {
  label?: string;
  children: (props: Record<string, any> & T, setProps: any) => JSX.Element;
  rows?: string[][];
  props: Record<string, any> & T;
  startColor?: string;
  parseProps?: (
    props: Record<string, any> & T,
    setProps: any
  ) => Record<string, any> & T;
}) => {
  return (
    <Demo props={inputProps} rows={rows} label={label} startColor={startColor}>
      {(props: Record<string, any> & T, setProps: any) => {
        let newProps = { ...props };
        if (parseProps) {
          newProps = parseProps(newProps, setProps);
        }

        return (
          <div className="flex flex-col items-center">
            {children(newProps, setProps)}
          </div>
        );
      }}
    </Demo>
  );
};

export default DemoComponent;
