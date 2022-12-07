# MoBrix-ui

![NPM](https://img.shields.io/npm/l/mobrix-ui?label=License&style=for-the-badge)
![npm (scoped)](https://img.shields.io/npm/v/mobrix-ui?color=orange%20&label=Latest%20version&style=for-the-badge&logo=npm)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/mobrix-ui?label=Package%20size&style=for-the-badge&logo=npm)
![Codacy grade](https://img.shields.io/codacy/grade/b71e50de99ce4ae2b3af87470011ea6c?logo=codacy&style=for-the-badge)
![Codacy coverage](https://img.shields.io/codacy/coverage/b71e50de99ce4ae2b3af87470011ea6c?logo=codacy&style=for-the-badge)
![Maintenance](https://img.shields.io/maintenance/yes/2025?label=Maintained&style=for-the-badge)

---

<br>

React components for every app, easy to use and customize

<br>

## Note for MoBrix-ui v1 user

MoBrix-ui v2 introduces some breaking changes that makes it not compatible with older MoBrix verions (using different lib versions in parallel is possible, but can cause some unexpected errors). If you are using MoBrix 1.X.X, please read the [dedicated guide](https://cianciarusocataldo.github.io/mobrix-ui/docs/#/v1_guide), or upgrade it to v2.X.X!

<br>

---

---

## MoBrix-ui philosophy

This library is built upon few (but important) concepts:

- Small library size, to not impact on final app bundle size
- Few dependencies, to not introduce a bunch of additional packages (that could also introduce bugs or version conflicts with pre-existent packages)
- Let the user customize every part as desired, but with default values set otherwise, to make every component ready to be used without so many parameters
- Every component should be integrable into every react app, so their behaviour must be customizable too (with callbacks, for example)

The same concepts are also the base of another project I maintain, [MoBrix-engine](https://github.com/CianciarusoCataldo/mobrix-engine) (check it out, it is also the base of [MoBrix-ui guide page](https://cianciarusocataldo.github.io/mobrix-ui/) !)

<br>

---

---

## Components building process

This library use a standardized process to build every component. As result, every component has a shared initial logic, shared CSS styles and shared properties.
Some properties are shared between all components, for a smoother dev experience. In addition, this makes every single component easily re-usable.

<br>

---

### UI properties

<br>

| Property    | Type                 | Description                                                                                                        | Default value |
| ----------- | -------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------- |
| `className` | `string`             | custom className applied on main container                                                                         | `""`          |
| `dark`      | `boolean`            | Enable/disable dark mode                                                                                           | `false`       |
| `hide`      | `boolean`            | Hide/show component                                                                                                | `false`       |
| `id`        | `string`             | `data-id` parameter (for testing purpose, to easily find the component into the DOM)                               | `/`           |
| `shadow`    | `boolean`            | Enable/disable shadow behind component                                                                             | `false`       |
| `style`     | `Record<string,any>` | [Css inline properties](https://www.w3schools.com/html/html_css.asp) applied on main container                     | `/`           |
| `unstyled`  | `boolean`            | If `true`, no standard mobrix-ui styles will be applied on the components (useful for example, with image buttons) | `false`       |
| `animated`  | `boolean`            | Enable/disable component animations                                                                                | `false`       |

<br>

---

### Accessibility properties

<br>

Some accessibility properties are shared between all components, for a better and smoother user experience, in any scenario:

| Property      | Type                         | Description                                                                                                                                                | Default value             |
| ------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| `onFocus`     | ( ) => `void`                | custom callback triggered when the component get the focus (for example, through tab key)                                                                  | `/`                       |
| `onFocusLost` | ( ) => `void`                | custom callback triggered when the component lose the focus (for example, when user clicks outside it)                                                     | `/`                       |
| `a11y`        | `boolean`                    | Enable/disable accessibility features.                                                                                                                     | `true`                    |
| `a11yLabel`   | `string`                     | If `a11y` = `true`, is used as [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) accessibility parameter | `/`                       |
| `a11yDark`    | `boolean`                    | If `a11y` = `true`, enable/disable dark mode for a11y styles. If not set, will be used the `dark` UI parameter                                             | same as `dark` or `false` |
| `onKeyDown`   | (keyEvent : `any`) => `void` | custom callback triggered when a key is pressed while using the component (for example, when writing text inside an `Input` component).                    | `/`                       |

<br>

---

### CSS variables

<br>

MoBrix-ui-components components UI is globally configurable, with CSS variables. By defining some specific custom CSS variables into your app css, you'll change the UI of all components:

| CSS variable                                | Description                                                                                                                                      | Default value                                 | Related CSS attribute  |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------- | ---------------------- |
| `--mobrix-ui-custom-background-dark`        | Components background, when in dark-mode ([dark](#shared-components-properties) is set to true).                                                 | `linear-gradient(to right, #2d3748, #1d232e)` | `background-image`     |
| `--mobrix-ui-custom-background-color-dark`  | Components background color, when in dark-mode ([dark](#shared-components-properties) is set to true).                                           | `#1d232e`                                     | `background-color`     |
| `--mobrix-ui-custom-text-color-dark`        | Components text color, when in dark-mode ([dark](#shared-components-properties) is set to true).                                                 | `white`                                       | `text-color`           |
| `--mobrix-ui-custom-background-light`       | Components background, when not in dark-mode ([dark](#shared-components-properties) is set to false).                                            | `linear-gradient(to right, #fff, #eaebec)`    | `background-image`     |
| `--mobrix-ui-custom-background-color-light` | Components background color, when not in dark-mode ([dark](#shared-components-properties) is set to false).                                      | `#f5f5f5`                                     | `background-color`     |
| `--mobrix-ui-custom-text-color-light`       | Components text color, when not in dark-mode ([dark](#shared-components-properties) is set to false).                                            | `#1b1b1b`                                     | `text-color`           |
| `--mobrix-ui-custom-focus-color-light`      | If `a11yDark` = `false` , this color is used to update UI when a component is focused (with a screen reader or by navigating with the `Tab` key) | `#7785ff`                                     | `box-shadow` / `color` |
| `--mobrix-ui-custom-focus-color-dark`       | If `a11yDark` = `true` , this color is used to update UI when a component is focused (with a screen reader or by navigating with the `Tab` key)  | `#fb7a10`                                     | `box-shadow` / `color` |

<br>

---

### Reactive components

<br>

Some components are designed with a specific structure, to sync their internal state with an external input value. This kind of component handle internally their actual value, using the `value` parameter as starting point. This let the component to be driven in 2 different way:

- Internally, Its internal `value`, when using the component without changing its value parameter from code

- External, passing the `value` parameter

So, we have 2 scenarios:

- If you change the component value
  using the component(without changing the `value` parameter), it will be updated internally.

- If you change the passed `value` parameter, the component will sync its value with the given one.

A clear example is the [Input](https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Input) component. When changing the `value` parameter, the component will sync its actual value.

<br>

---

---

<br>

## Getting started

<br>

---

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
  --mobrix-ui-text-color: #f5f5f5;
  --mobrix-ui-background-color: #1b1b1b;
}
```

<br>

---

---

## Tests

Unit tests for every component are located inside `tests` folder. The test script is executed with pre-defined test command:

    npm run test

<br>

---

## Authors

- [**Cataldo Cianciaruso**](https://github.com/CianciarusoCataldo)

<br>

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
