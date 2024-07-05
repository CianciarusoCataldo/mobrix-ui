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
    <Container
      shadow={false}
      animated
      background={false}
      className={classNames("m-2", className)}
      animation="fade-in"
    >
      {children}
    </Container>
  );
};

export default AppPage;
