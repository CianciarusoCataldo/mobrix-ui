import { Container } from "mobrix-ui-preview";
import { isInDarkMode } from "modular-plugins";
import { useSelector } from "react-redux";

const FooterContent = () => {
  const dark = useSelector(isInDarkMode);

  return (
    <Container dark={dark}>
      <div className="flex flex-col items-center h-full w-full p-2">
        <div className="flex flex-row m-auto">
          <img
            alt=""
            className="p-1"
            src="https://img.shields.io/npm/l/mobrix-ui?label=License"
            height="25"
          />
          <img
            alt=""
            className="p-1"
            src="https://img.shields.io/npm/v/mobrix-ui?color=blue&label=Latest%20version"
            height="25"
          />
        </div>
      </div>
    </Container>
  );
};

export default FooterContent;
