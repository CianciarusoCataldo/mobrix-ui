import { renderingTest } from "../../core/utils/helpers";

import { Container } from "../../../src";

renderingTest(Container, {
  children: "test content",
  animated: true,
});
