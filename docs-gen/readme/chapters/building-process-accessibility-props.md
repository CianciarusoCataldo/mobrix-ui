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

---
