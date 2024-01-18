# MoBrix-ui Atoms components

## Summary

- [Button](#button)
- [CheckBox](#checkbox)
- [CodeBox](#codebox)
- [Counter](#counter)
- [Divider](#divider)
- [Input](#input)
- [Label](#label)
- [Link](#link)
- [RadioButton](#radiobutton)
- [Rater](#rater)
- [Selector](#selector)
- [Slider](#slider)
- [Spinner](#spinner)
- [Toggle](#toggle)

<br>

### Button

| Prop                                                                                        | Fallback                                                                        | Default                                                                       |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [--mbx-button-background](button-css-vars.md#mbx-button-background)                         | <div style="text-align:center;width:100%;">/</div>                              | <div style="text-align:center;width:100%;">/</div>                            |
| [--mbx-button-background-dark](button-css-vars.md#mbx-button-background-dark)               | [--mbx-button-background](button-css-vars.md#mbx-button-background)             | [--mbx-background-dark](global-css-vars.md#mbx-background-dark)               |
| [--mbx-button-background-light](button-css-vars.md#mbx-button-background-light)             | [--mbx-button-background](button-css-vars.md#mbx-button-background)             | [--mbx-background-light](global-css-vars.md#mbx-background-light)             |
| [--mbx-button-text-color](button-css-vars.md#mbx-button-text-color)                         | <div style="text-align:center;width:100%;">/</div>                              | <div style="text-align:center;width:100%;">/</div>                            |
| [--mbx-button-text-color-light](button-css-vars.md#mbx-button-text-color-light)             | [--mbx-button-text-color](button-css-vars.md#mbx-button-text-color)             | [--mbx-text-color-light](global-css-vars.md#mbx-text-color-light)             |
| [--mbx-button-text-color-dark](button-css-vars.md#mbx-button-text-color-dark)               | [--mbx-button-text-color](button-css-vars.md#mbx-button-text-color)             | [--mbx-text-color-dark](global-css-vars.md#mbx-text-color-dark)               |
| [--mbx-button-background-hover](button-css-vars.md#mbx-button-background-hover)             | <div style="text-align:center;width:100%;">/</div>                              | <div style="text-align:center;width:100%;">/</div>                            |
| [--mbx-button-background-hover-light](button-css-vars.md#mbx-button-background-hover-light) | [--mbx-button-background-hover](button-css-vars.md#mbx-button-background-hover) | [--mbx-background-hover-light](global-css-vars.md#mbx-background-hover-light) |
| [--mbx-button-background-hover-dark](button-css-vars.md#mbx-button-background-hover-dark)   | [--mbx-button-background-hover](button-css-vars.md#mbx-button-background-hover) | [--mbx-background-hover-light](global-css-vars.md#mbx-background-hover-light) |
| [--mbx-button-text-color-hover](button-css-vars.md#mbx-button-text-color-hover)             | <div style="text-align:center;width:100%;">/</div>                              | <div style="text-align:center;width:100%;">/</div>                            |
| [--mbx-button-text-color-hover-light](button-css-vars.md#mbx-button-text-color-hover-light) | [--mbx-button-text-color-hover](button-css-vars.md#mbx-button-text-color-hover) | [--mbx-text-color-hover-light](global-css-vars.md#mbx-text-color-hover-light) |
| [--mbx-button-text-color-hover-dark](button-css-vars.md#mbx-button-text-color-hover-dark)   | [--mbx-button-text-color-hover](button-css-vars.md#mbx-button-text-color-hover) | [--mbx-text-color-hover-dark](global-css-vars.md#mbx-text-color-hover-dark)   |

---

<br>

### CheckBox

| Prop                                                                                              | Fallback                                                                              | Default                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [--mbx-checkbox-background](checkbox-css-vars.md#mbx-checkbox-background)                         | <div style="text-align:center;width:100%;">/</div>                                    | <div style="text-align:center;width:100%;">/</div>                            |
| [--mbx-checkbox-background-dark](checkbox-css-vars.md#mbx-checkbox-background-dark)               | [--mbx-checkbox-background](checkbox-css-vars.md#mbx-checkbox-background)             | [--mbx-background-dark](global-css-vars.md#mbx-background-dark)               |
| [--mbx-checkbox-background-light](checkbox-css-vars.md#mbx-checkbox-background-light)             | [--mbx-checkbox-background](checkbox-css-vars.md#mbx-checkbox-background)             | [--mbx-background-light](global-css-vars.md#mbx-background-light)             |
| [--mbx-checkbox-background-hover](checkbox-css-vars.md#mbx-checkbox-background-hover)             | <div style="text-align:center;width:100%;">/</div>                                    | <div style="text-align:center;width:100%;">/</div>                            |
| [--mbx-checkbox-background-hover-light](checkbox-css-vars.md#mbx-checkbox-background-hover-light) | [--mbx-checkbox-background-hover](checkbox-css-vars.md#mbx-checkbox-background-hover) | [--mbx-background-hover-light](global-css-vars.md#mbx-background-hover-light) |
| [--mbx-checkbox-background-hover-dark](checkbox-css-vars.md#mbx-checkbox-background-hover-dark)   | [--mbx-checkbox-background-hover](checkbox-css-vars.md#mbx-checkbox-background-hover) | [--mbx-background-hover-dark](global-css-vars.md#mbx-background-hover-dark)   |
| [--mbx-checkbox-tick-color](checkbox-css-vars.md#mbx-checkbox-tick-color)                         | <div style="text-align:center;width:100%;">/</div>                                    | <div style="text-align:center;width:100%;">/</div>                            |
| [--mbx-checkbox-tick-color-light](checkbox-css-vars.md#mbx-checkbox-tick-color-light)             | [--mbx-checkbox-tick-color](checkbox-css-vars.md#mbx-checkbox-tick-color)             | rgb(37, 99, 235)                                                              |
| [--mbx-checkbox-tick-color-dark](checkbox-css-vars.md#mbx-checkbox-tick-color-dark)               | [--mbx-checkbox-tick-color](checkbox-css-vars.md#mbx-checkbox-tick-color)             | white                                                                         |

---

<br>

### CodeBox

| Prop                                                                               | Fallback                                                               | Default                                                           |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------- |
| [--mbx-codebox-background](codebox-css-vars.md#mbx-codebox-background)             | <div style="text-align:center;width:100%;">/</div>                     | <div style="text-align:center;width:100%;">/</div>                |
| [--mbx-codebox-background-dark](codebox-css-vars.md#mbx-codebox-background-dark)   | [--mbx-codebox-background](codebox-css-vars.md#mbx-codebox-background) | [--mbx-background-dark](global-css-vars.md#mbx-background-dark)   |
| [--mbx-codebox-background-light](codebox-css-vars.md#mbx-codebox-background-light) | [--mbx-codebox-background](codebox-css-vars.md#mbx-codebox-background) | [--mbx-background-light](global-css-vars.md#mbx-background-light) |
| [--mbx-codebox-text-color](codebox-css-vars.md#mbx-codebox-text-color)             | <div style="text-align:center;width:100%;">/</div>                     | <div style="text-align:center;width:100%;">/</div>                |
| [--mbx-codebox-text-color-light](codebox-css-vars.md#mbx-codebox-text-color-light) | [--mbx-codebox-text-color](codebox-css-vars.md#mbx-codebox-text-color) | [--mbx-text-color-light](global-css-vars.md#mbx-text-color-light) |
| [--mbx-codebox-text-color-dark](codebox-css-vars.md#mbx-codebox-text-color-dark)   | [--mbx-codebox-text-color](codebox-css-vars.md#mbx-codebox-text-color) | [--mbx-text-color-dark](global-css-vars.md#mbx-text-color-dark)   |

---

<br>

### Counter

| Prop                                                                                                 | Fallback                                                                                 | Default                                                                       |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [--mbx-counterbox-background](counter-css-vars.md#mbx-counterbox-background)                         | <div style="text-align:center;width:100%;">/</div>                                       | <div style="text-align:center;width:100%;">/</div>                            |
| [--mbx-counterbox-background-dark](counter-css-vars.md#mbx-counterbox-background-dark)               | [--mbx-counterbox-background](counter-css-vars.md#mbx-counterbox-background)             | [--mbx-background-dark](global-css-vars.md#mbx-background-dark)               |
| [--mbx-counterbox-background-light](counter-css-vars.md#mbx-counterbox-background-light)             | [--mbx-counterbox-background](counter-css-vars.md#mbx-counterbox-background)             | [--mbx-background-light](global-css-vars.md#mbx-background-light)             |
| [--mbx-counterbox-text-color](counter-css-vars.md#mbx-counterbox-text-color)                         | <div style="text-align:center;width:100%;">/</div>                                       | <div style="text-align:center;width:100%;">/</div>                            |
| [--mbx-counterbox-text-color-light](counter-css-vars.md#mbx-counterbox-text-color-light)             | [--mbx-counterbox-text-color](counter-css-vars.md#mbx-counterbox-text-color)             | [--mbx-text-color-light](global-css-vars.md#mbx-text-color-light)             |
| [--mbx-counterbox-text-color-dark](counter-css-vars.md#mbx-counterbox-text-color-dark)               | [--mbx-counterbox-text-color](counter-css-vars.md#mbx-counterbox-text-color)             | [--mbx-text-color-dark](global-css-vars.md#mbx-text-color-dark)               |
| [--mbx-counterbox-background-hover](counter-css-vars.md#mbx-counterbox-background-hover)             | <div style="text-align:center;width:100%;">/</div>                                       | <div style="text-align:center;width:100%;">/</div>                            |
| [--mbx-counterbox-background-hover-light](counter-css-vars.md#mbx-counterbox-background-hover-light) | [--mbx-counterbox-background-hover](counter-css-vars.md#mbx-counterbox-background-hover) | [--mbx-background-hover-light](global-css-vars.md#mbx-background-hover-light) |
| [--mbx-counterbox-background-hover-dark](counter-css-vars.md#mbx-counterbox-background-hover-dark)   | [--mbx-counterbox-background-hover](counter-css-vars.md#mbx-counterbox-background-hover) | [--mbx-background-hover-light](global-css-vars.md#mbx-background-hover-light) |
| [--mbx-counterbox-text-color-hover](counter-css-vars.md#mbx-counterbox-text-color-hover)             | <div style="text-align:center;width:100%;">/</div>                                       | <div style="text-align:center;width:100%;">/</div>                            |
| [--mbx-counterbox-text-color-hover-light](counter-css-vars.md#mbx-counterbox-text-color-hover-light) | [--mbx-counterbox-text-color-hover](counter-css-vars.md#mbx-counterbox-text-color-hover) | [--mbx-text-color-hover-light](global-css-vars.md#mbx-text-color-hover-light) |
| [--mbx-counterbox-text-color-hover-dark](counter-css-vars.md#mbx-counterbox-text-color-hover-dark)   | [--mbx-counterbox-text-color-hover](counter-css-vars.md#mbx-counterbox-text-color-hover) | [--mbx-text-color-hover-dark](global-css-vars.md#mbx-text-color-hover-dark)   |

---

<br>

### Divider

| Prop                                                                     | Fallback                                                     | Default                                                           |
| ------------------------------------------------------------------------ | ------------------------------------------------------------ | ----------------------------------------------------------------- |
| [--mbx-divider-color](divider-css-vars.md#mbx-divider-color)             | <div style="text-align:center;width:100%;">/</div>           | <div style="text-align:center;width:100%;">/</div>                |
| [--mbx-divider-color-light](divider-css-vars.md#mbx-divider-color-light) | [--mbx-divider-color](divider-css-vars.md#mbx-divider-color) | [--mbx-text-color-light](global-css-vars.md#mbx-text-color-light) |
| [--mbx-divider-color-dark](divider-css-vars.md#mbx-divider-color-dark)   | [--mbx-divider-color](divider-css-vars.md#mbx-divider-color) | [--mbx-text-color-dark](global-css-vars.md#mbx-text-color-dark)   |

---

<br>

### Input

| Prop                                                                                           | Fallback                                                                           | Default                                                                       |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [--mbx-inputbox-background](input-css-vars.md#mbx-inputbox-background)                         | <div style="text-align:center;width:100%;">/</div>                                 | <div style="text-align:center;width:100%;">/</div>                            |
| [--mbx-inputbox-background-dark](input-css-vars.md#mbx-inputbox-background-dark)               | [--mbx-inputbox-background](input-css-vars.md#mbx-inputbox-background)             | [--mbx-background-dark](global-css-vars.md#mbx-background-dark)               |
| [--mbx-inputbox-background-light](input-css-vars.md#mbx-inputbox-background-light)             | [--mbx-inputbox-background](input-css-vars.md#mbx-inputbox-background)             | [--mbx-background-light](global-css-vars.md#mbx-background-light)             |
| [--mbx-inputbox-text-color](input-css-vars.md#mbx-inputbox-text-color)                         | <div style="text-align:center;width:100%;">/</div>                                 | <div style="text-align:center;width:100%;">/</div>                            |
| [--mbx-inputbox-text-color-light](input-css-vars.md#mbx-inputbox-text-color-light)             | [--mbx-inputbox-text-color](input-css-vars.md#mbx-inputbox-text-color)             | [--mbx-text-color-light](global-css-vars.md#mbx-text-color-light)             |
| [--mbx-inputbox-text-color-dark](input-css-vars.md#mbx-inputbox-text-color-dark)               | [--mbx-inputbox-text-color](input-css-vars.md#mbx-inputbox-text-color)             | [--mbx-text-color-dark](global-css-vars.md#mbx-text-color-dark)               |
| [--mbx-inputbox-background-hover](input-css-vars.md#mbx-inputbox-background-hover)             | <div style="text-align:center;width:100%;">/</div>                                 | <div style="text-align:center;width:100%;">/</div>                            |
| [--mbx-inputbox-background-hover-light](input-css-vars.md#mbx-inputbox-background-hover-light) | [--mbx-inputbox-background-hover](input-css-vars.md#mbx-inputbox-background-hover) | [--mbx-background-hover-light](global-css-vars.md#mbx-background-hover-light) |
| [--mbx-inputbox-background-hover-dark](input-css-vars.md#mbx-inputbox-background-hover-dark)   | [--mbx-inputbox-background-hover](input-css-vars.md#mbx-inputbox-background-hover) | [--mbx-background-hover-light](global-css-vars.md#mbx-background-hover-light) |
| [--mbx-inputbox-text-color-hover](input-css-vars.md#mbx-inputbox-text-color-hover)             | <div style="text-align:center;width:100%;">/</div>                                 | <div style="text-align:center;width:100%;">/</div>                            |
| [--mbx-inputbox-text-color-hover-light](input-css-vars.md#mbx-inputbox-text-color-hover-light) | [--mbx-inputbox-text-color-hover](input-css-vars.md#mbx-inputbox-text-color-hover) | [--mbx-text-color-hover-light](global-css-vars.md#mbx-text-color-hover-light) |
| [--mbx-inputbox-text-color-hover-dark](input-css-vars.md#mbx-inputbox-text-color-hover-dark)   | [--mbx-inputbox-text-color-hover](input-css-vars.md#mbx-inputbox-text-color-hover) | [--mbx-text-color-hover-dark](global-css-vars.md#mbx-text-color-hover-dark)   |

---

<br>

### Label

| Prop                                                                         | Fallback                                                         | Default                                                           |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------- |
| [--mbx-label-text-color](label-css-vars.md#mbx-label-text-color)             | <div style="text-align:center;width:100%;">/</div>               | <div style="text-align:center;width:100%;">/</div>                |
| [--mbx-label-text-color-light](label-css-vars.md#mbx-label-text-color-light) | [--mbx-label-text-color](label-css-vars.md#mbx-label-text-color) | [--mbx-text-color-light](global-css-vars.md#mbx-text-color-light) |
| [--mbx-label-text-color-dark](label-css-vars.md#mbx-label-text-color-dark)   | [--mbx-label-text-color](label-css-vars.md#mbx-label-text-color) | [--mbx-text-color-dark](global-css-vars.md#mbx-text-color-dark)   |

---

<br>

### Link

| Prop                                                                        | Fallback                                                        | Default                                                                       |
| --------------------------------------------------------------------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [--mbx-link-color](link-css-vars.md#mbx-link-color)                         | <div style="text-align:center;width:100%;">/</div>              | <div style="text-align:center;width:100%;">/</div>                            |
| [--mbx-link-color-light](link-css-vars.md#mbx-link-color-light)             | [--mbx-link-color](link-css-vars.md#mbx-link-color)             | [--mbx-link-color-light](global-css-vars.md#mbx-link-color-light)             |
| [--mbx-link-color-dark](link-css-vars.md#mbx-link-color-dark)               | [--mbx-link-color](link-css-vars.md#mbx-link-color)             | [--mbx-link-color-dark](global-css-vars.md#mbx-link-color-dark)               |
| [--mbx-link-color-hover](link-css-vars.md#mbx-link-color-hover)             | <div style="text-align:center;width:100%;">/</div>              | <div style="text-align:center;width:100%;">/</div>                            |
| [--mbx-link-color-hover-light](link-css-vars.md#mbx-link-color-hover-light) | [--mbx-link-color-hover](link-css-vars.md#mbx-link-color-hover) | [--mbx-link-color-hover-light](global-css-vars.md#mbx-link-color-hover-light) |
| [--mbx-link-color-hover-dark](link-css-vars.md#mbx-link-color-hover-dark)   | [--mbx-link-color-hover](link-css-vars.md#mbx-link-color-hover) | [--mbx-link-color-hover-dark](global-css-vars.md#mbx-link-color-hover-dark)   |

---

<br>

### RadioButton

| Prop                                                                                           | Fallback                                                                           | Default                                                                           |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [--mbx-radio-background](radiobutton-css-vars.md#mbx-radio-background)                         | <div style="text-align:center;width:100%;">/</div>                                 | <div style="text-align:center;width:100%;">/</div>                                |
| [--mbx-radio-background-light](radiobutton-css-vars.md#mbx-radio-background-light)             | [--mbx-radio-background](radiobutton-css-vars.md#mbx-radio-background)             | radial-gradient(#f1f1f1 20%, #e4e4e4 30%, #bebebe 55%, #f0f0f0 20%)               |
| [--mbx-radio-background-dark](radiobutton-css-vars.md#mbx-radio-background-dark)               | [--mbx-radio-background](radiobutton-css-vars.md#mbx-radio-background)             | radial-gradient(closest-side, #2d3748 20%, #232b38 30%, #1d1f44 55%, #191f29 20%) |
| [--mbx-radio-background-hover](radiobutton-css-vars.md#mbx-radio-background-hover)             | <div style="text-align:center;width:100%;">/</div>                                 | <div style="text-align:center;width:100%;">/</div>                                |
| [--mbx-radio-background-hover-light](radiobutton-css-vars.md#mbx-radio-background-hover-light) | [--mbx-radio-background-hover](radiobutton-css-vars.md#mbx-radio-background-hover) | radial-gradient(#f1f1f1 20%, #cfcfcf 30%, #a7a7a7 55%, #f0f0f0 20%)               |
| [--mbx-radio-background-hover-dark](radiobutton-css-vars.md#mbx-radio-background-hover-dark)   | [--mbx-radio-background-hover](radiobutton-css-vars.md#mbx-radio-background-hover) | radial-gradient(#354155 20%, #2d3747 30%, #2b2e5f 55%, #323f55 20%)               |
| [--mbx-radio-icon-background](radiobutton-css-vars.md#mbx-radio-icon-background)               | <div style="text-align:center;width:100%;">/</div>                                 | <div style="text-align:center;width:100%;">/</div>                                |
| [--mbx-radio-icon-background-light](radiobutton-css-vars.md#mbx-radio-icon-background-light)   | [--mbx-radio-icon-background](radiobutton-css-vars.md#mbx-radio-icon-background)   | radial-gradient(circle at 23px 23px, #2d3748, #191f29)                            |
| [--mbx-radio-icon-background-dark](radiobutton-css-vars.md#mbx-radio-icon-background-dark)     | [--mbx-radio-icon-background](radiobutton-css-vars.md#mbx-radio-icon-background)   | radial-gradient(circle at 23px 23px, #dbe0e6, #949494)                            |

---

<br>

### Rater

| Prop                                                                         | Fallback                                                         | Default                                                           |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------- |
| [--mbx-rater-background](rater-css-vars.md#mbx-rater-background)             | <div style="text-align:center;width:100%;">/</div>               | <div style="text-align:center;width:100%;">/</div>                |
| [--mbx-rater-background-dark](rater-css-vars.md#mbx-rater-background-dark)   | [--mbx-rater-background](rater-css-vars.md#mbx-rater-background) | [--mbx-background-dark](global-css-vars.md#mbx-background-dark)   |
| [--mbx-rater-background-light](rater-css-vars.md#mbx-rater-background-light) | [--mbx-rater-background](rater-css-vars.md#mbx-rater-background) | [--mbx-background-light](global-css-vars.md#mbx-background-light) |

---

<br>

### Selector

| Prop                                                                                              | Fallback                                                                              | Default                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [--mbx-selector-background](selector-css-vars.md#mbx-selector-background)                         | <div style="text-align:center;width:100%;">/</div>                                    | <div style="text-align:center;width:100%;">/</div>                            |
| [--mbx-selector-background-light](selector-css-vars.md#mbx-selector-background-light)             | [--mbx-selector-background](selector-css-vars.md#mbx-selector-background)             | [--mbx-background-light](global-css-vars.md#mbx-background-light)             |
| [--mbx-selector-background-dark](selector-css-vars.md#mbx-selector-background-dark)               | [--mbx-selector-background](selector-css-vars.md#mbx-selector-background)             | [--mbx-background-dark](global-css-vars.md#mbx-background-dark)               |
| [--mbx-selector-text-color](selector-css-vars.md#mbx-selector-text-color)                         | <div style="text-align:center;width:100%;">/</div>                                    | <div style="text-align:center;width:100%;">/</div>                            |
| [--mbx-selector-text-color-light](selector-css-vars.md#mbx-selector-text-color-light)             | [--mbx-selector-text-color](selector-css-vars.md#mbx-selector-text-color)             | [--mbx-text-color-light](global-css-vars.md#mbx-text-color-light)             |
| [--mbx-selector-text-color-dark](selector-css-vars.md#mbx-selector-text-color-dark)               | [--mbx-selector-text-color](selector-css-vars.md#mbx-selector-text-color)             | [--mbx-text-color-dark](global-css-vars.md#mbx-text-color-dark)               |
| [--mbx-selector-background-hover](selector-css-vars.md#mbx-selector-background-hover)             | <div style="text-align:center;width:100%;">/</div>                                    | <div style="text-align:center;width:100%;">/</div>                            |
| [--mbx-selector-background-hover-light](selector-css-vars.md#mbx-selector-background-hover-light) | [--mbx-selector-background-hover](selector-css-vars.md#mbx-selector-background-hover) | [--mbx-background-hover-light](global-css-vars.md#mbx-background-hover-light) |
| [--mbx-selector-background-hover-dark](selector-css-vars.md#mbx-selector-background-hover-dark)   | [--mbx-selector-background-hover](selector-css-vars.md#mbx-selector-background-hover) | [--mbx-background-hover-light](global-css-vars.md#mbx-background-hover-light) |
| [--mbx-selector-text-color-hover](selector-css-vars.md#mbx-selector-text-color-hover)             | <div style="text-align:center;width:100%;">/</div>                                    | <div style="text-align:center;width:100%;">/</div>                            |
| [--mbx-selector-text-color-hover-light](selector-css-vars.md#mbx-selector-text-color-hover-light) | [--mbx-selector-text-color-hover](selector-css-vars.md#mbx-selector-text-color-hover) | [--mbx-text-color-hover-light](global-css-vars.md#mbx-text-color-hover-light) |
| [--mbx-selector-text-color-hover-dark](selector-css-vars.md#mbx-selector-text-color-hover-dark)   | [--mbx-selector-text-color-hover](selector-css-vars.md#mbx-selector-text-color-hover) | [--mbx-text-color-hover-dark](global-css-vars.md#mbx-text-color-hover-dark)   |

---

<br>

### Slider

| Prop                                                                                          | Fallback                                                                          | Default                                                           |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| [--mbx-slider-background](slider-css-vars.md#mbx-slider-background)                           | <div style="text-align:center;width:100%;">/</div>                                | <div style="text-align:center;width:100%;">/</div>                |
| [--mbx-slider-background-dark](slider-css-vars.md#mbx-slider-background-dark)                 | [--mbx-slider-background](slider-css-vars.md#mbx-slider-background)               | [--mbx-background-dark](global-css-vars.md#mbx-background-dark)   |
| [--mbx-slider-background-light](slider-css-vars.md#mbx-slider-background-light)               | [--mbx-slider-background](slider-css-vars.md#mbx-slider-background)               | [--mbx-background-light](global-css-vars.md#mbx-background-light) |
| [--mbx-slider-thumb-color](slider-css-vars.md#mbx-slider-thumb-color)                         | <div style="text-align:center;width:100%;">/</div>                                | <div style="text-align:center;width:100%;">/</div>                |
| [--mbx-slider-thumb-color-light](slider-css-vars.md#mbx-slider-thumb-color-light)             | [--mbx-slider-thumb-color](slider-css-vars.md#mbx-slider-thumb-color)             | radial-gradient(#2d3748, #1d232e)                                 |
| [--mbx-slider-thumb-color-dark](slider-css-vars.md#mbx-slider-thumb-color-dark)               | [--mbx-slider-thumb-color](slider-css-vars.md#mbx-slider-thumb-color)             | radial-gradient(#e3e4e9, #9b9999)                                 |
| [--mbx-slider-thumb-color-hover](slider-css-vars.md#mbx-slider-thumb-color-hover)             | <div style="text-align:center;width:100%;">/</div>                                | <div style="text-align:center;width:100%;">/</div>                |
| [--mbx-slider-thumb-color-hover-light](slider-css-vars.md#mbx-slider-thumb-color-hover-light) | [--mbx-slider-thumb-color-hover](slider-css-vars.md#mbx-slider-thumb-color-hover) | radial-gradient(#364257, #2a3444)                                 |
| [--mbx-slider-thumb-color-hover-dark](slider-css-vars.md#mbx-slider-thumb-color-hover-dark)   | [--mbx-slider-thumb-color-hover](slider-css-vars.md#mbx-slider-thumb-color-hover) | radial-gradient(#e8e9f0, #adabab)                                 |

---

<br>

### Spinner

| Prop                                                                                     | Fallback                                                                     | Default                                            |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | -------------------------------------------------- |
| [--mbx-spinner-success-color](spinner-css-vars.md#mbx-spinner-success-color)             | <div style="text-align:center;width:100%;">/</div>                           | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-spinner-success-color-light](spinner-css-vars.md#mbx-spinner-success-color-light) | [--mbx-spinner-success-color](spinner-css-vars.md#mbx-spinner-success-color) | #05bc29                                            |
| [--mbx-spinner-success-color-dark](spinner-css-vars.md#mbx-spinner-success-color-dark)   | [--mbx-spinner-success-color](spinner-css-vars.md#mbx-spinner-success-color) | #05bc29                                            |
| [--mbx-spinner-error-color](spinner-css-vars.md#mbx-spinner-error-color)                 | <div style="text-align:center;width:100%;">/</div>                           | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-spinner-error-color-light](spinner-css-vars.md#mbx-spinner-error-color-light)     | [--mbx-spinner-error-color](spinner-css-vars.md#mbx-spinner-error-color)     | #ff0000                                            |
| [--mbx-spinner-error-color-dark](spinner-css-vars.md#mbx-spinner-error-color-dark)       | [--mbx-spinner-error-color](spinner-css-vars.md#mbx-spinner-error-color)     | #ff0000                                            |
| [--mbx-spinner-loading-color](spinner-css-vars.md#mbx-spinner-loading-color)             | <div style="text-align:center;width:100%;">/</div>                           | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-spinner-loading-color-light](spinner-css-vars.md#mbx-spinner-loading-color-light) | [--mbx-spinner-loading-color](spinner-css-vars.md#mbx-spinner-loading-color) | #202020                                            |
| [--mbx-spinner-loading-color-dark](spinner-css-vars.md#mbx-spinner-loading-color-dark)   | [--mbx-spinner-loading-color](spinner-css-vars.md#mbx-spinner-loading-color) | #202020                                            |

---

<br>

### Toggle

| Prop                                                                                                      | Fallback                                                                                      | Default                                                           |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| [--mbx-toggle-background](toggle-css-vars.md#mbx-toggle-background)                                       | <div style="text-align:center;width:100%;">/</div>                                            | <div style="text-align:center;width:100%;">/</div>                |
| [--mbx-toggle-background-light](toggle-css-vars.md#mbx-toggle-background-light)                           | [--mbx-toggle-background](toggle-css-vars.md#mbx-toggle-background)                           | [--mbx-background-light](global-css-vars.md#mbx-background-light) |
| [--mbx-toggle-background-dark](toggle-css-vars.md#mbx-toggle-background-dark)                             | [--mbx-toggle-background](toggle-css-vars.md#mbx-toggle-background)                           | [--mbx-background-dark](global-css-vars.md#mbx-background-dark)   |
| [--mbx-toggle-icon-on-internal-color](toggle-css-vars.md#mbx-toggle-icon-on-internal-color)               | <div style="text-align:center;width:100%;">/</div>                                            | <div style="text-align:center;width:100%;">/</div>                |
| [--mbx-toggle-icon-on-internal-color-light](toggle-css-vars.md#mbx-toggle-icon-on-internal-color-light)   | [--mbx-toggle-icon-on-internal-color](toggle-css-vars.md#mbx-toggle-icon-on-internal-color)   | #ffffff                                                           |
| [--mbx-toggle-icon-on-internal-color-dark](toggle-css-vars.md#mbx-toggle-icon-on-internal-color-dark)     | [--mbx-toggle-icon-on-internal-color](toggle-css-vars.md#mbx-toggle-icon-on-internal-color)   | #ffffff                                                           |
| [--mbx-toggle-icon-on-external-color](toggle-css-vars.md#mbx-toggle-icon-on-external-color)               | <div style="text-align:center;width:100%;">/</div>                                            | <div style="text-align:center;width:100%;">/</div>                |
| [--mbx-toggle-icon-on-external-color-light](toggle-css-vars.md#mbx-toggle-icon-on-external-color-light)   | [--mbx-toggle-icon-on-external-color](toggle-css-vars.md#mbx-toggle-icon-on-external-color)   | #adadad                                                           |
| [--mbx-toggle-icon-on-external-color-dark](toggle-css-vars.md#mbx-toggle-icon-on-external-color-dark)     | [--mbx-toggle-icon-on-external-color](toggle-css-vars.md#mbx-toggle-icon-on-external-color)   | #adadad                                                           |
| [--mbx-toggle-icon-off-internal-color](toggle-css-vars.md#mbx-toggle-icon-off-internal-color)             | <div style="text-align:center;width:100%;">/</div>                                            | <div style="text-align:center;width:100%;">/</div>                |
| [--mbx-toggle-icon-off-internal-color-light](toggle-css-vars.md#mbx-toggle-icon-off-internal-color-light) | [--mbx-toggle-icon-off-internal-color](toggle-css-vars.md#mbx-toggle-icon-off-internal-color) | #a5a5a5                                                           |
| [--mbx-toggle-icon-off-internal-color-dark](toggle-css-vars.md#mbx-toggle-icon-off-internal-color-dark)   | [--mbx-toggle-icon-off-internal-color](toggle-css-vars.md#mbx-toggle-icon-off-internal-color) | #a5a5a5                                                           |
| [--mbx-toggle-icon-off-external-color](toggle-css-vars.md#mbx-toggle-icon-off-external-color)             | <div style="text-align:center;width:100%;">/</div>                                            | <div style="text-align:center;width:100%;">/</div>                |
| [--mbx-toggle-icon-off-external-color-light](toggle-css-vars.md#mbx-toggle-icon-off-external-color-light) | [--mbx-toggle-icon-off-external-color](toggle-css-vars.md#mbx-toggle-icon-off-external-color) | #a7a3a3                                                           |
| [--mbx-toggle-icon-off-external-color-dark](toggle-css-vars.md#mbx-toggle-icon-off-external-color-dark)   | [--mbx-toggle-icon-off-external-color](toggle-css-vars.md#mbx-toggle-icon-off-external-color) | #a7a3a3                                                           |

---

<br>
