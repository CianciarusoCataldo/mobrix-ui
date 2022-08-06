import React from "react";

import { renderingTest } from "../../core/utils/helpers";

import { Card } from "../../../src";

renderingTest(Card, {
  label: "Testing Card",
  header: "Testing header",
  body: "Testing body",
  footer: "Testing footer",
  children: <div>Test card</div>,
});
