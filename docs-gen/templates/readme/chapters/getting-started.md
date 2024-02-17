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

[![Edit MoBrix-ui playground](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/mobrix-ui-playground-gfpbb?file=/src/index.tsx?fontsize=14&hidenavigation=1&theme=dark&view=preview)

<br>

If you want to customize the UI globally, initialize the dedicated [CSS variables](#customizable-ui):

```css
* {
  --mbx-ui-text-color: #f5f5f5;
  --mbx-ui-background-color: #1b1b1b;
}
```

<br>

---

---
