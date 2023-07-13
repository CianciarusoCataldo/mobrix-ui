import classNames from "classnames";
import { BuilderComponent, Container } from "mobrix-ui-preview";

const AppPage = ({
  className,
  children,
}: {
  className?: string;
  children: BuilderComponent | BuilderComponent[];
}) => {
  return (
    <Container animated unstyled className={classNames("m-2", className)}>
      {children}
    </Container>
  );
};

export default AppPage;
