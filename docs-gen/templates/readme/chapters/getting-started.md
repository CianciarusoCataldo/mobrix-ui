<br>

## Getting started

<br>

### Installation

If you want to use this library inside your project, just install it:

```

npm i mobrix-ui

```

<br>

---

### Usage

After installation, you can use every `MoBrix-ui` component in your app. Run this example to see them in action:

```tsx
import { Card, Container, Link } from "mobrix-ui";
import { render } from "react-dom";

render(
  <Container animated>
    <Card
      dark={true}
      body={<p>This page is entirely made with MoBrix-ui components !</p>}
      footer={
        <Link to="https://cianciarusocataldo.github.io/mobrix-ui">
          MoBrix-ui page
        </Link>
      }
    />
  </Container>,
  document.getElementById("root")
);
```

[![Try it !](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/devbox/mobrix-ui-sandbox-y83g7f?file=%2Fsrc%2FApp.js&embed=1)

<br>

If you want to customize the UI globally, initialize the dedicated [CSS variables](#customizable-ui):

```css
* {
  --mbx-ui-text: #f5f5f5;
  --mbx-ui-background-color: #1b1b1b;
}
```

<br>

---

---
