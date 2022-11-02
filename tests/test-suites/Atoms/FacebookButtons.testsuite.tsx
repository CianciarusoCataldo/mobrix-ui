import { FacebookButtons } from "../../../src";
import { renderingTest } from "../../core/utils/helpers";

renderingTest(FacebookButtons, {
  share: true,
  small: true,
  wdith: 180,
  pageId: "Testing label",
});
