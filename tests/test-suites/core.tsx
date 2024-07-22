import React from "react";
import { buildMbxStandard } from "../../src/tools";
import { MbxUiProps } from "../../src";
import { mount } from "enzyme";
import {
  ArrowIcon,
  CalendarIcon,
  CheckIcon,
  CopyIcon,
  link,
  Xicon,
} from "../../src/icons";

export default () =>
  describe("MoBrix-ui general tests", () => {
    test("MoBrix-ui component building", () => {
      const Component = (props: MbxUiProps) =>
        buildMbxStandard(props, (sharedProps) => ({
          name: "test-mbx-component",
          features: undefined,
          mbxProps: { features: undefined },
        }));

      const Wrapper = mount(<Component animated animation="fade-in" />);
      expect(Wrapper);
    });

    test("Icon rendering test", () => {
      let wrapper = mount(
        <ArrowIcon
          animated
          disabled
          width="20px"
          height="20px"
          transform="scaleX(1)"
          fill="none"
          hide
        />
      );
      expect(wrapper);
      wrapper = mount(
        <Xicon
          animated
          disabled
          width="20px"
          height="20px"
          transform="scaleX(1)"
          fill="none"
          hide
        />
      );
      expect(wrapper);
      wrapper = mount(
        <CalendarIcon
          animated
          disabled
          width="20px"
          height="20px"
          transform="scaleX(1)"
          fill="none"
          hide
        />
      );
      expect(wrapper);

      wrapper = mount(
        <CheckIcon
          animated
          disabled
          width="20px"
          height="20px"
          transform="scaleX(1)"
          hide
        />
      );
      expect(wrapper);

      wrapper = mount(
        <CheckIcon
          animated
          disabled
          width="20px"
          height="20px"
          transform="scaleX(1)"
          hide
          dark
          fill="none"
        />
      );
      expect(wrapper);

      wrapper = mount(
        <CopyIcon
          animated
          disabled
          width="20px"
          height="20px"
          transform="scaleX(1)"
          hide
          dark
          fill="none"
        />
      );
      expect(wrapper);

      wrapper = mount(
        link({
          animated: true,
          disabled: true,
          width: "20x",
          height: "2px",
          transform: "scaleX(1)",
          hide: true,
          dark: true,
          fill: "none",
        })
      );
      expect(wrapper);
    });
  });
