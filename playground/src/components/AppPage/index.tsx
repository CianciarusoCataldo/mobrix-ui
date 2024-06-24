import classNames from "classnames";
import { BuilderComponent, Container } from "mobrix-ui-preview";
import React from "react";
import ScrollToTop from "../ScrollToTop";
const AppPage = ({
  className,
  children,
}: {
  className?: string;
  children: BuilderComponent | BuilderComponent[];
}) => {
  return (
    <ScrollToTop>
      <Container animated background={false} className={classNames("m-2", className)} animation="fade-in">
        {children}
      </Container>
    </ScrollToTop>
  );
};

export default AppPage;
