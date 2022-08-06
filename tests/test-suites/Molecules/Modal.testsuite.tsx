import { renderingTest } from "../../core/utils/helpers";

import { Modal } from "../../../src";

renderingTest(Modal, {
  hide: false,
  children: "Testing modal",
  title: "Modal title",
  onClose: () => {},
});
