# MoBrix-ui full CSS variable list

## Summary

- [Atoms](#atoms)
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

- [Molecules](#molecules)
  - [Card](#card)
  - [Carousel](#carousel)
  - [Container](#container)
  - [DismissableCard](#dismissablecard)
  - [Dropdown](#dropdown)
  - [ExpandableContainer](#expandablecontainer)
  - [FormField](#formfield)
  - [List](#list)
  - [Modal](#modal)
  - [Popup](#popup)
  - [RadioButtonGroup](#radiobuttongroup)
  - [Review](#review)
  - [TabViewer](#tabviewer)
  - [Table](#table)

<br>

- [Organisms](#organisms)
  - [Calendar](#calendar)
  - [DatePicker](#datepicker)
  - [Drawer](#drawer)
  - [Form](#form)

<br>

<br>

## Atoms

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

<br>

## Molecules

<br>

### Card

| Prop                                                                      | Fallback                                           | Default                                                           |
| ------------------------------------------------------------------------- | -------------------------------------------------- | ----------------------------------------------------------------- |
| [--mbx-card-background](card-css-vars.md#mbx-card-background)             | <div style="text-align:center;width:100%;">/</div> | <div style="text-align:center;width:100%;">/</div>                |
| [--mbx-card-background-light](card-css-vars.md#mbx-card-background-light) | <div style="text-align:center;width:100%;">/</div> | linear-gradient(to right, #fff, #ededee, #e6e7e7)                 |
| [--mbx-card-background-dark](card-css-vars.md#mbx-card-background-dark)   | <div style="text-align:center;width:100%;">/</div> | linear-gradient(to right, #2d3748, #1d232e)                       |
| [--mbx-card-text-color](card-css-vars.md#mbx-card-text-color)             | <div style="text-align:center;width:100%;">/</div> | <div style="text-align:center;width:100%;">/</div>                |
| [--mbx-card-text-color-light](card-css-vars.md#mbx-card-text-color-light) | <div style="text-align:center;width:100%;">/</div> | [--mbx-text-color-light](global-css-vars.md#mbx-text-color-light) |
| [--mbx-card-text-color-dark](card-css-vars.md#mbx-card-text-color-dark)   | <div style="text-align:center;width:100%;">/</div> | [--mbx-text-color-dark](global-css-vars.md#mbx-text-color-dark)   |

---

<br>

### Carousel

| Prop                                                                                                      | Fallback                                                                                      | Default                                                                        |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| [--mbx-carousel-background](carousel-css-vars.md#mbx-carousel-background)                                 | <div style="text-align:center;width:100%;">/</div>                                            | <div style="text-align:center;width:100%;">/</div>                             |
| [--mbx-carousel-background-light](carousel-css-vars.md#mbx-carousel-background-light)                     | [--mbx-carousel-background](carousel-css-vars.md#mbx-carousel-background)                     | [--mbx-background-light](global-css-vars.md#mbx-background-light)              |
| [--mbx-carousel-background-dark](carousel-css-vars.md#mbx-carousel-background-dark)                       | [--mbx-carousel-background](carousel-css-vars.md#mbx-carousel-background)                     | [--mbx-background-dark](global-css-vars.md#mbx-background-dark)                |
| [--mbx-carousel-arrow-color](carousel-css-vars.md#mbx-carousel-arrow-color)                               | <div style="text-align:center;width:100%;">/</div>                                            | <div style="text-align:center;width:100%;">/</div>                             |
| [--mbx-carousel-arrow-color-light](carousel-css-vars.md#mbx-carousel-arrow-color-light)                   | [--mbx-carousel-arrow-color](carousel-css-vars.md#mbx-carousel-arrow-color)                   | #252525                                                                        |
| [--mbx-carousel-arrow-color-dark](carousel-css-vars.md#mbx-carousel-arrow-color-dark)                     | [--mbx-carousel-arrow-color](carousel-css-vars.md#mbx-carousel-arrow-color)                   | #e2e2e2                                                                        |
| [--mbx-carousel-arrow-color-hover](carousel-css-vars.md#mbx-carousel-arrow-color-hover)                   | <div style="text-align:center;width:100%;">/</div>                                            | <div style="text-align:center;width:100%;">/</div>                             |
| [--mbx-carousel-arrow-color-hover-light](carousel-css-vars.md#mbx-carousel-arrow-color-hover-light)       | [--mbx-carousel-arrow-color-hover](carousel-css-vars.md#mbx-carousel-arrow-color-hover)       | #287dfd                                                                        |
| [--mbx-carousel-arrow-color-hover-dark](carousel-css-vars.md#mbx-carousel-arrow-color-hover-dark)         | [--mbx-carousel-arrow-color-hover](carousel-css-vars.md#mbx-carousel-arrow-color-hover)       | #ff8007                                                                        |
| [--mbx-carousel-dot-empty-background](carousel-css-vars.md#mbx-carousel-dot-empty-background)             | <div style="text-align:center;width:100%;">/</div>                                            | <div style="text-align:center;width:100%;">/</div>                             |
| [--mbx-carousel-dot-empty-background-light](carousel-css-vars.md#mbx-carousel-dot-empty-background-light) | [--mbx-carousel-dot-empty-background](carousel-css-vars.md#mbx-carousel-dot-empty-background) | radial-gradient(#000000, #181818, #282828, #3a3a3a, #4c4c4c, #6b6a6a, #858383) |
| [--mbx-carousel-dot-empty-background-dark](carousel-css-vars.md#mbx-carousel-dot-empty-background-dark)   | [--mbx-carousel-dot-empty-background](carousel-css-vars.md#mbx-carousel-dot-empty-background) | radial-gradient(#000000, #181818, #282828, #3a3a3a, #4c4c4c, #6b6a6a, #858383) |
| [--mbx-carousel-dot-full-background](carousel-css-vars.md#mbx-carousel-dot-full-background)               | <div style="text-align:center;width:100%;">/</div>                                            | <div style="text-align:center;width:100%;">/</div>                             |
| [--mbx-carousel-dot-full-background-light](carousel-css-vars.md#mbx-carousel-dot-full-background-light)   | [--mbx-carousel-dot-full-background](carousel-css-vars.md#mbx-carousel-dot-full-background)   | linear-gradient(to top, #ff8007, #fd8616, #fd9b3f, #fd9c40, #fcbb7f, #fad6b4)  |
| [--mbx-carousel-dot-full-background-dark](carousel-css-vars.md#mbx-carousel-dot-full-background-dark)     | [--mbx-carousel-dot-full-background](carousel-css-vars.md#mbx-carousel-dot-full-background)   | linear-gradient(to top, #ff8007, #fd8616, #fd9b3f, #fd9c40, #fcbb7f, #fad6b4)  |

---

<br>

### Container

| Prop                                                                                     | Fallback                                                                     | Default                                                           |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| [--mbx-container-background](container-css-vars.md#mbx-container-background)             | <div style="text-align:center;width:100%;">/</div>                           | <div style="text-align:center;width:100%;">/</div>                |
| [--mbx-container-background-light](container-css-vars.md#mbx-container-background-light) | [--mbx-container-background](container-css-vars.md#mbx-container-background) | [--mbx-background-light](global-css-vars.md#mbx-background-light) |
| [--mbx-container-background-dark](container-css-vars.md#mbx-container-background-dark)   | [--mbx-container-background](container-css-vars.md#mbx-container-background) | [--mbx-background-dark](global-css-vars.md#mbx-background-dark)   |
| [--mbx-container-text-color](container-css-vars.md#mbx-container-text-color)             | <div style="text-align:center;width:100%;">/</div>                           | <div style="text-align:center;width:100%;">/</div>                |
| [--mbx-container-text-color-light](container-css-vars.md#mbx-container-text-color-light) | [--mbx-container-text-color](container-css-vars.md#mbx-container-text-color) | [--mbx-text-color-light](global-css-vars.md#mbx-text-color-light) |
| [--mbx-container-text-color-dark](container-css-vars.md#mbx-container-text-color-dark)   | [--mbx-container-text-color](container-css-vars.md#mbx-container-text-color) | [--mbx-text-color-dark](global-css-vars.md#mbx-text-color-dark)   |

---

<br>

### DismissableCard

| Prop                                                                                                             | Fallback                                                                                             | Default                                                                         |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| [--mbx-dismissablecard-background](dismissablecard-css-vars.md#mbx-dismissablecard-background)                   | <div style="text-align:center;width:100%;">/</div>                                                   | <div style="text-align:center;width:100%;">/</div>                              |
| [--mbx-dismissablecard-background-light](dismissablecard-css-vars.md#mbx-dismissablecard-background-light)       | [--mbx-dismissablecard-background](dismissablecard-css-vars.md#mbx-dismissablecard-background)       | [--mbx-card-background-light](card-css-vars.md#mbx-card-background-light)       |
| [--mbx-dismissablecard-background-dark](dismissablecard-css-vars.md#mbx-dismissablecard-background-dark)         | [--mbx-dismissablecard-background](dismissablecard-css-vars.md#mbx-dismissablecard-background)       | [--mbx-card-background-dark](card-css-vars.md#mbx-card-background-dark)         |
| [--mbx-dismissablecard-text-color](dismissablecard-css-vars.md#mbx-dismissablecard-text-color)                   | <div style="text-align:center;width:100%;">/</div>                                                   | <div style="text-align:center;width:100%;">/</div>                              |
| [--mbx-dismissablecard-text-color-light](dismissablecard-css-vars.md#mbx-dismissablecard-text-color-light)       | [--mbx-dismissablecard-text-color](dismissablecard-css-vars.md#mbx-dismissablecard-text-color)       | [--mbx-card-text-color-dark](card-css-vars.md#mbx-card-text-color-light)        |
| [--mbx-dismissablecard-text-color-dark](dismissablecard-css-vars.md#mbx-dismissablecard-text-color-dark)         | [--mbx-dismissablecard-text-color](dismissablecard-css-vars.md#mbx-dismissablecard-text-color)       | [--mbx-card-text-color-dark](card-css-vars.md#mbx-card-text-color-dark)         |
| [--mbx-dismissablecard-x-color](dismissablecard-css-vars.md#mbx-dismissablecard-x-color)                         | <div style="text-align:center;width:100%;">/</div>                                                   | <div style="text-align:center;width:100%;">/</div>                              |
| [--mbx-dismissablecard-x-color-light](dismissablecard-css-vars.md#mbx-dismissablecard-x-color-light)             | [--mbx-dismissablecard-x-color](dismissablecard-css-vars.md#mbx-dismissablecard-x-color)             | [--mbx-dismissablecard-text-color-light](#mbx-dismissablecard-text-color-light) |
| [--mbx-dismissablecard-x-color-dark](dismissablecard-css-vars.md#mbx-dismissablecard-x-color-dark)               | [--mbx-dismissablecard-x-color](dismissablecard-css-vars.md#mbx-dismissablecard-x-color)             | [--mbx-dismissablecard-text-color-dark](#mbx-dismissablecard-text-color-dark)   |
| [--mbx-dismissablecard-x-color-hover](dismissablecard-css-vars.md#mbx-dismissablecard-x-color-hover)             | <div style="text-align:center;width:100%;">/</div>                                                   | <div style="text-align:center;width:100%;">/</div>                              |
| [--mbx-dismissablecard-x-color-hover-light](dismissablecard-css-vars.md#mbx-dismissablecard-x-color-hover-light) | [--mbx-dismissablecard-x-color-hover](dismissablecard-css-vars.md#mbx-dismissablecard-x-color-hover) | red                                                                             |
| [--mbx-dismissablecard-x-color-hover-dark](dismissablecard-css-vars.md#mbx-dismissablecard-x-color-hover-dark)   | [--mbx-dismissablecard-x-color-hover](dismissablecard-css-vars.md#mbx-dismissablecard-x-color-hover) | red                                                                             |

---

<br>

### Dropdown

| Prop                                                                                                | Fallback                                                                                | Default                                            |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | -------------------------------------------------- |
| [--mbx-dropdown-background](dropdown-css-vars.md#mbx-dropdown-background)                           | <div style="text-align:center;width:100%;">/</div>                                      | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-dropdown-background-dark](dropdown-css-vars.md#mbx-dropdown-background-dark)                 | [--mbx-dropdown-background](dropdown-css-vars.md#mbx-dropdown-background)               | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-dropdown-background-light](dropdown-css-vars.md#mbx-dropdown-background-light)               | [--mbx-dropdown-background](dropdown-css-vars.md#mbx-dropdown-background)               | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-dropdown-text-color](dropdown-css-vars.md#mbx-dropdown-text-color)                           | <div style="text-align:center;width:100%;">/</div>                                      | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-dropdown-text-color-light](dropdown-css-vars.md#mbx-dropdown-text-color-light)               | [--mbx-dropdown-text-color](dropdown-css-vars.md#mbx-dropdown-text-color)               | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-dropdown-text-color-dark](dropdown-css-vars.md#mbx-dropdown-text-color-dark)                 | [--mbx-dropdown-text-color](dropdown-css-vars.md#mbx-dropdown-text-color)               | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-dropdown-background-hover](dropdown-css-vars.md#mbx-dropdown-background-hover)               | <div style="text-align:center;width:100%;">/</div>                                      | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-dropdown-background-hover-light](dropdown-css-vars.md#mbx-dropdown-background-hover-light)   | [--mbx-dropdown-background](dropdown-css-vars.md#mbx-dropdown-background)               | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-dropdown-background-hover-dark](dropdown-css-vars.md#mbx-dropdown-background-hover-dark)     | [--mbx-dropdown-background](dropdown-css-vars.md#mbx-dropdown-background)               | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-dropdown-text-color-hover](dropdown-css-vars.md#mbx-dropdown-text-color-hover)               | <div style="text-align:center;width:100%;">/</div>                                      | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-dropdown-text-color-hover-light](dropdown-css-vars.md#mbx-dropdown-text-color-hover-light)   | [--mbx-dropdown-background-hover](dropdown-css-vars.md#mbx-dropdown-background-hover)   | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-dropdown-text-color-hover-dark](dropdown-css-vars.md#mbx-dropdown-text-color-hover-dark)     | [--mbx-dropdown-background-hover](dropdown-css-vars.md#mbx-dropdown-background-hover)   | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-dropdown-arrow-color](dropdown-css-vars.md#mbx-dropdown-arrow-color)                         | <div style="text-align:center;width:100%;">/</div>                                      | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-dropdown-arrow-color-light](dropdown-css-vars.md#mbx-dropdown-arrow-color-light)             | [--mbx-dropdown-arrow-color](dropdown-css-vars.md#mbx-dropdown-arrow-color)             | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-dropdown-arrow-color-dark](dropdown-css-vars.md#mbx-dropdown-arrow-color-dark)               | [--mbx-dropdown-arrow-color](dropdown-css-vars.md#mbx-dropdown-arrow-color)             | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-dropdown-arrow-color-hover](dropdown-css-vars.md#mbx-dropdown-arrow-color-hover)             | <div style="text-align:center;width:100%;">/</div>                                      | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-dropdown-arrow-color-hover-light](dropdown-css-vars.md#mbx-dropdown-arrow-color-hover-light) | [--mbx-dropdown-arrow-color-hover](dropdown-css-vars.md#mbx-dropdown-arrow-color-hover) | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-dropdown-arrow-color-hover-dark](dropdown-css-vars.md#mbx-dropdown-arrow-color-hover-dark)   | [--mbx-dropdown-arrow-color-hover](dropdown-css-vars.md#mbx-dropdown-arrow-color-hover) | <div style="text-align:center;width:100%;">/</div> |

---

<br>

### ExpandableContainer

| Prop                                                                                                                                 | Fallback                                                                                                                 | Default                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| [--mbx-expandablecontainer-background](expandablecontainer-css-vars.md#mbx-expandablecontainer-background)                           | <div style="text-align:center;width:100%;">/</div>                                                                       | <div style="text-align:center;width:100%;">/</div>                                       |
| [--mbx-expandablecontainer-background-light](expandablecontainer-css-vars.md#mbx-expandablecontainer-background-light)               | [--mbx-expandablecontainer-background](expandablecontainer-css-vars.md#mbx-expandablecontainer-background)               | [--mbx-container-background-light](container-css-vars.md#mbx-container-background-light) |
| [--mbx-expandablecontainer-background-dark](expandablecontainer-css-vars.md#mbx-expandablecontainer-background-dark)                 | [--mbx-expandablecontainer-background](expandablecontainer-css-vars.md#mbx-expandablecontainer-background)               | [--mbx-container-background-dark](container-css-vars.md#mbx-container-background-dark)   |
| [--mbx-expandablecontainer-text-color](expandablecontainer-css-vars.md#mbx-expandablecontainer-text-color)                           | <div style="text-align:center;width:100%;">/</div>                                                                       | <div style="text-align:center;width:100%;">/</div>                                       |
| [--mbx-expandablecontainer-text-color-light](expandablecontainer-css-vars.md#mbx-expandablecontainer-text-color-light)               | [--mbx-expandablecontainer-text-color](expandablecontainer-css-vars.md#mbx-expandablecontainer-text-color)               | [--mbx-container-text-color-light](container-css-vars.md#mbx-container-text-color-light) |
| [--mbx-expandablecontainer-text-color-dark](expandablecontainer-css-vars.md#mbx-expandablecontainer-text-color-dark)                 | [--mbx-expandablecontainer-text-color](expandablecontainer-css-vars.md#mbx-expandablecontainer-text-color)               | [--mbx-container-text-color-dark](container-css-vars.md#mbx-container-text-color-dark)   |
| [--mbx-expandablecontainer-arrow-color](expandablecontainer-css-vars.md#mbx-expandablecontainer-arrow-color)                         | <div style="text-align:center;width:100%;">/</div>                                                                       | <div style="text-align:center;width:100%;">/</div>                                       |
| [--mbx-expandablecontainer-arrow-color-light](expandablecontainer-css-vars.md#mbx-expandablecontainer-arrow-color-light)             | [--mbx-expandablecontainer-arrow-color](expandablecontainer-css-vars.md#mbx-expandablecontainer-arrow-color)             | [--mbx-expandablecontainer-text-color-light](#mbx-expandablecontainer-text-color-light)  |
| [--mbx-expandablecontainer-arrow-color-dark](expandablecontainer-css-vars.md#mbx-expandablecontainer-arrow-color-dark)               | [--mbx-expandablecontainer-arrow-color](expandablecontainer-css-vars.md#mbx-expandablecontainer-arrow-color)             | [--mbx-expandablecontainer-text-color-dark](#mbx-expandablecontainer-text-color-dark)    |
| [--mbx-expandablecontainer-arrow-color-hover](expandablecontainer-css-vars.md#mbx-expandablecontainer-arrow-color-hover)             | <div style="text-align:center;width:100%;">/</div>                                                                       | <div style="text-align:center;width:100%;">/</div>                                       |
| [--mbx-expandablecontainer-arrow-color-hover-light](expandablecontainer-css-vars.md#mbx-expandablecontainer-arrow-color-hover-light) | [--mbx-expandablecontainer-arrow-color-hover](expandablecontainer-css-vars.md#mbx-expandablecontainer-arrow-color-hover) | [--mbx-text-color-hover-light](global-css-vars.md#mbx-text-color-hover-light)            |
| [--mbx-expandablecontainer-arrow-color-hover-dark](expandablecontainer-css-vars.md#mbx-expandablecontainer-arrow-color-hover-dark)   | [--mbx-expandablecontainer-arrow-color-hover](expandablecontainer-css-vars.md#mbx-expandablecontainer-arrow-color-hover) | [--mbx-text-color-hover-dark](global-css-vars.md#mbx-text-color-hover-dark)              |

---

<br>

### FormField

| Prop                                                                                                 | Fallback                                                                                 | Default                                                                       |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [--mbx-formfield-background](formfield-css-vars.md#mbx-formfield-background)                         | <div style="text-align:center;width:100%;">/</div>                                       | <div style="text-align:center;width:100%;">/</div>                            |
| [--mbx-formfield-background-dark](formfield-css-vars.md#mbx-formfield-background-dark)               | [--mbx-formfield-background](formfield-css-vars.md#mbx-formfield-background)             | [--mbx-background-dark](global-css-vars.md#mbx-background-dark)               |
| [--mbx-formfield-background-light](formfield-css-vars.md#mbx-formfield-background-light)             | [--mbx-formfield-background](formfield-css-vars.md#mbx-formfield-background)             | [--mbx-background-light](global-css-vars.md#mbx-background-light)             |
| [--mbx-formfield-text-color](formfield-css-vars.md#mbx-formfield-text-color)                         | <div style="text-align:center;width:100%;">/</div>                                       | <div style="text-align:center;width:100%;">/</div>                            |
| [--mbx-formfield-text-color-light](formfield-css-vars.md#mbx-formfield-text-color-light)             | [--mbx-formfield-text-color](formfield-css-vars.md#mbx-formfield-text-color)             | [--mbx-text-color-light](global-css-vars.md#mbx-text-color-light)             |
| [--mbx-formfield-text-color-dark](formfield-css-vars.md#mbx-formfield-text-color-dark)               | [--mbx-formfield-text-color](formfield-css-vars.md#mbx-formfield-text-color)             | [--mbx-text-color-dark](global-css-vars.md#mbx-text-color-dark)               |
| [--mbx-formfield-background-hover](formfield-css-vars.md#mbx-formfield-background-hover)             | <div style="text-align:center;width:100%;">/</div>                                       | <div style="text-align:center;width:100%;">/</div>                            |
| [--mbx-formfield-background-hover-light](formfield-css-vars.md#mbx-formfield-background-hover-light) | [--mbx-formfield-background-hover](formfield-css-vars.md#mbx-formfield-background-hover) | [--mbx-background-hover-light](global-css-vars.md#mbx-background-hover-light) |
| [--mbx-formfield-background-hover-dark](formfield-css-vars.md#mbx-formfield-background-hover-dark)   | [--mbx-formfield-background-hover](formfield-css-vars.md#mbx-formfield-background-hover) | [--mbx-background-hover-light](global-css-vars.md#mbx-background-hover-light) |
| [--mbx-formfield-text-color-hover](formfield-css-vars.md#mbx-formfield-text-color-hover)             | <div style="text-align:center;width:100%;">/</div>                                       | <div style="text-align:center;width:100%;">/</div>                            |
| [--mbx-formfield-text-color-hover-light](formfield-css-vars.md#mbx-formfield-text-color-hover-light) | [--mbx-formfield-text-color-hover](formfield-css-vars.md#mbx-formfield-text-color-hover) | [--mbx-text-color-hover-light](global-css-vars.md#mbx-text-color-hover-light) |
| [--mbx-formfield-text-color-hover-dark](formfield-css-vars.md#mbx-formfield-text-color-hover-dark)   | [--mbx-formfield-text-color-hover](formfield-css-vars.md#mbx-formfield-text-color-hover) | [--mbx-text-color-hover-dark](global-css-vars.md#mbx-text-color-hover-dark)   |
| [--mbx-formfield-error-border](formfield-css-vars.md#mbx-formfield-error-border)                     | <div style="text-align:center;width:100%;">/</div>                                       | <div style="text-align:center;width:100%;">/</div>                            |
| [--mbx-formfield-error-border-light](formfield-css-vars.md#mbx-formfield-error-border-light)         | [--mbx-formfield-error-border](formfield-css-vars.md#mbx-formfield-error-border)         | red                                                                           |
| [--mbx-formfield-error-border-dark](formfield-css-vars.md#mbx-formfield-error-border-dark)           | [--mbx-formfield-error-border](formfield-css-vars.md#mbx-formfield-error-border)         | red                                                                           |
| [--mbx-formfield-error-text](formfield-css-vars.md#mbx-formfield-error-text)                         | <div style="text-align:center;width:100%;">/</div>                                       | <div style="text-align:center;width:100%;">/</div>                            |
| [--mbx-formfield-error-text-light](formfield-css-vars.md#mbx-formfield-error-text-light)             | [--mbx-formfield-error-text](formfield-css-vars.md#mbx-formfield-error-text)             | red                                                                           |
| [--mbx-formfield-error-text-dark](formfield-css-vars.md#mbx-formfield-error-text-dark)               | [--mbx-formfield-error-text](formfield-css-vars.md#mbx-formfield-error-text)             | red                                                                           |

---

<br>

### List

| Prop                                                                                  | Fallback                                                                  | Default                                            |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------- |
| [--mbx-list-text-color](list-css-vars.md#mbx-list-text-color)                         | <div style="text-align:center;width:100%;">/</div>                        | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-list-text-color-light](list-css-vars.md#mbx-list-text-color-light)             | [--mbx-list-text-color](list-css-vars.md#mbx-list-text-color)             | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-list-text-color-dark](list-css-vars.md#mbx-list-text-color-dark)               | [--mbx-list-text-color](list-css-vars.md#mbx-list-text-color)             | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-list-text-color-hover](list-css-vars.md#mbx-list-text-color-hover)             | <div style="text-align:center;width:100%;">/</div>                        | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-list-text-color-hover-light](list-css-vars.md#mbx-list-text-color-hover-light) | [--mbx-list-text-color-hover](list-css-vars.md#mbx-list-text-color-hover) | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-list-text-color-hover-dark](list-css-vars.md#mbx-list-text-color-hover-dark)   | [--mbx-list-text-color-hover](list-css-vars.md#mbx-list-text-color-hover) | <div style="text-align:center;width:100%;">/</div> |

---

<br>

### Modal

| Prop                                                                               | Fallback                                                               | Default                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | -------------------------------------------------- |
| [--mbx-modal-background](modal-css-vars.md#mbx-modal-background)                   | <div style="text-align:center;width:100%;">/</div>                     | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-modal-background-light](modal-css-vars.md#mbx-modal-background-light)       | [--mbx-modal-background](modal-css-vars.md#mbx-modal-background)       | rgba(0, 0, 0, 0.8)                                 |
| [--mbx-modal-background-dark](modal-css-vars.md#mbx-modal-background-dark)         | [--mbx-modal-background](modal-css-vars.md#mbx-modal-background)       | rgba(0, 0, 0, 0.8)                                 |
| [--mbx-modal-x-color](modal-css-vars.md#mbx-modal-x-color)                         | <div style="text-align:center;width:100%;">/</div>                     | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-modal-x-color-light](modal-css-vars.md#mbx-modal-x-color-light)             | [--mbx-modal-x-color](modal-css-vars.md#mbx-modal-x-color)             | white                                              |
| [--mbx-modal-x-color-dark](modal-css-vars.md#mbx-modal-x-color-dark)               | [--mbx-modal-x-color](modal-css-vars.md#mbx-modal-x-color)             | white                                              |
| [--mbx-modal-x-color-hover](modal-css-vars.md#mbx-modal-x-color-hover)             | <div style="text-align:center;width:100%;">/</div>                     | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-modal-x-color-hover-light](modal-css-vars.md#mbx-modal-x-color-hover-light) | [--mbx-modal-x-color-hover](modal-css-vars.md#mbx-modal-x-color-hover) | red                                                |
| [--mbx-modal-x-color-hover-dark](modal-css-vars.md#mbx-modal-x-color-hover-dark)   | [--mbx-modal-x-color-hover](modal-css-vars.md#mbx-modal-x-color-hover) | red                                                |

---

<br>

### Popup

| Prop                                                                         | Fallback                                                         | Default                                                           |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------- |
| [--mbx-popup-background](popup-css-vars.md#mbx-popup-background)             | <div style="text-align:center;width:100%;">/</div>               | <div style="text-align:center;width:100%;">/</div>                |
| [--mbx-popup-background-dark](popup-css-vars.md#mbx-popup-background-dark)   | [--mbx-popup-background](popup-css-vars.md#mbx-popup-background) | [--mbx-background-dark](global-css-vars.md#mbx-background-dark)   |
| [--mbx-popup-background-light](popup-css-vars.md#mbx-popup-background-light) | [--mbx-popup-background](popup-css-vars.md#mbx-popup-background) | [--mbx-background-light](global-css-vars.md#mbx-background-light) |
| [--mbx-popup-text-color](popup-css-vars.md#mbx-popup-text-color)             | <div style="text-align:center;width:100%;">/</div>               | <div style="text-align:center;width:100%;">/</div>                |
| [--mbx-popup-text-color-light](popup-css-vars.md#mbx-popup-text-color-light) | [--mbx-popup-text-color](popup-css-vars.md#mbx-popup-text-color) | [--mbx-text-color-light](global-css-vars.md#mbx-text-color-light) |
| [--mbx-popup-text-color-dark](popup-css-vars.md#mbx-popup-text-color-dark)   | [--mbx-popup-text-color](popup-css-vars.md#mbx-popup-text-color) | [--mbx-text-color-dark](global-css-vars.md#mbx-text-color-dark)   |

---

<br>

### RadioButtonGroup

| Prop                                                                                              | Fallback                                                                              | Default                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| [--mbx-radiogroup-background](radiobuttongroup-css-vars.md#mbx-radiogroup-background)             | <div style="text-align:center;width:100%;">/</div>                                    | <div style="text-align:center;width:100%;">/</div>                |
| [--mbx-radiogroup-background-dark](radiobuttongroup-css-vars.md#mbx-radiogroup-background-dark)   | [--mbx-radiogroup-background](radiobuttongroup-css-vars.md#mbx-radiogroup-background) | [--mbx-background-dark](global-css-vars.md#mbx-background-dark)   |
| [--mbx-radiogroup-background-light](radiobuttongroup-css-vars.md#mbx-radiogroup-background-light) | [--mbx-radiogroup-background](radiobuttongroup-css-vars.md#mbx-radiogroup-background) | [--mbx-background-light](global-css-vars.md#mbx-background-light) |
| [--mbx-radiogroup-text-color](radiobuttongroup-css-vars.md#mbx-radiogroup-text-color)             | <div style="text-align:center;width:100%;">/</div>                                    | <div style="text-align:center;width:100%;">/</div>                |
| [--mbx-radiogroup-text-color-light](radiobuttongroup-css-vars.md#mbx-radiogroup-text-color-light) | [--mbx-radiogroup-text-color](radiobuttongroup-css-vars.md#mbx-radiogroup-text-color) | [--mbx-text-color-light](global-css-vars.md#mbx-text-color-light) |
| [--mbx-radiogroup-text-color-dark](radiobuttongroup-css-vars.md#mbx-radiogroup-text-color-dark)   | [--mbx-radiogroup-text-color](radiobuttongroup-css-vars.md#mbx-radiogroup-text-color) | [--mbx-text-color-dark](global-css-vars.md#mbx-text-color-dark)   |

---

<br>

### Review

| Prop                                                                                | Fallback                                                                | Default                                                           |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------- |
| [--mbx-review-background](review-css-vars.md#mbx-review-background)                 | <div style="text-align:center;width:100%;">/</div>                      | <div style="text-align:center;width:100%;">/</div>                |
| [--mbx-review-background-dark](review-css-vars.md#mbx-review-background-dark)       | [--mbx-review-background](review-css-vars.md#mbx-review-background)     | [--mbx-background-dark](global-css-vars.md#mbx-background-dark)   |
| [--mbx-review-background-light](review-css-vars.md#mbx-review-background-light)     | [--mbx-review-background](review-css-vars.md#mbx-review-background)     | [--mbx-background-light](global-css-vars.md#mbx-background-light) |
| [--mbx-review-text-color](review-css-vars.md#mbx-review-text-color)                 | <div style="text-align:center;width:100%;">/</div>                      | <div style="text-align:center;width:100%;">/</div>                |
| [--mbx-review-text-color-light](review-css-vars.md#mbx-review-text-color-light)     | [--mbx-review-text-color](review-css-vars.md#mbx-review-text-color)     | [--mbx-text-color-light](global-css-vars.md#mbx-text-color-light) |
| [--mbx-review-text-color-dark](review-css-vars.md#mbx-review-text-color-dark)       | [--mbx-review-text-color](review-css-vars.md#mbx-review-text-color)     | [--mbx-text-color-dark](global-css-vars.md#mbx-text-color-dark)   |
| [--mbx-review-link-color](review-css-vars.md#mbx-review-link-color)                 | <div style="text-align:center;width:100%;">/</div>                      | <div style="text-align:center;width:100%;">/</div>                |
| [--mbx-review-link-color-light](review-css-vars.md#mbx-review-link-color-light)     | [--mbx-review-link-color](review-css-vars.md#mbx-review-link-color)     | #615f5f                                                           |
| [--mbx-review-link-color-dark](review-css-vars.md#mbx-review-link-color-dark)       | [--mbx-review-link-color](review-css-vars.md#mbx-review-link-color)     | white                                                             |
| [--mbx-review-github-color](review-css-vars.md#mbx-review-github-color)             | <div style="text-align:center;width:100%;">/</div>                      | <div style="text-align:center;width:100%;">/</div>                |
| [--mbx-review-github-color-light](review-css-vars.md#mbx-review-github-color-light) | [--mbx-review-github-color](review-css-vars.md#mbx-review-github-color) | #615f5f                                                           |
| [--mbx-review-github-color-dark](review-css-vars.md#mbx-review-github-color-dark)   | [--mbx-review-github-color](review-css-vars.md#mbx-review-github-color) | white                                                             |

---

<br>

### TabViewer

| Prop                                                                                                                   | Fallback                                                                                                   | Default                                                                       |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [--mbx-tabviewer-background](tabviewer-css-vars.md#mbx-tabviewer-background)                                           | <div style="text-align:center;width:100%;">/</div>                                                         | <div style="text-align:center;width:100%;">/</div>                            |
| [--mbx-tabviewer-background-light](tabviewer-css-vars.md#mbx-tabviewer-background-light)                               | [--mbx-tabviewer-background](tabviewer-css-vars.md#mbx-tabviewer-background)                               | linear-gradient(to right, #cccccc, #c7c7c7)                                   |
| [--mbx-tabviewer-background-dark](tabviewer-css-vars.md#mbx-tabviewer-background-dark)                                 | [--mbx-tabviewer-background](tabviewer-css-vars.md#mbx-tabviewer-background)                               | linear-gradient(to right, #2d3748, #1d232e)                                   |
| [--mbx-tabviewer-text-color](tabviewer-css-vars.md#mbx-tabviewer-text-color)                                           | <div style="text-align:center;width:100%;">/</div>                                                         | <div style="text-align:center;width:100%;">/</div>                            |
| [--mbx-tabviewer-text-color-light](tabviewer-css-vars.md#mbx-tabviewer-text-color-light)                               | [--mbx-tabviewer-text-color](tabviewer-css-vars.md#mbx-tabviewer-text-color)                               | [--mbx-text-color-light](global-css-vars.md#mbx-text-color-light)             |
| [--mbx-tabviewer-text-color-dark](tabviewer-css-vars.md#mbx-tabviewer-text-color-dark)                                 | [--mbx-tabviewer-text-color](tabviewer-css-vars.md#mbx-tabviewer-text-color)                               | [--mbx-text-color-dark](global-css-vars.md#mbx-text-color-dark)               |
| [--mbx-tabviewer-inactive-background](tabviewer-css-vars.md#mbx-tabviewer-inactive-background)                         | <div style="text-align:center;width:100%;">/</div>                                                         | <div style="text-align:center;width:100%;">/</div>                            |
| [--mbx-tabviewer-inactive-background-light](tabviewer-css-vars.md#mbx-tabviewer-inactive-background-light)             | [--mbx-tabviewer-inactive-background](tabviewer-css-vars.md#mbx-tabviewer-inactive-background)             | linear-gradient(to right, #a1a0a0, #797979)                                   |
| [--mbx-tabviewer-inactive-background-dark](tabviewer-css-vars.md#mbx-tabviewer-inactive-background-dark)               | [--mbx-tabviewer-inactive-background](tabviewer-css-vars.md#mbx-tabviewer-inactive-background)             | linear-gradient(to right, #3e4b63, #3f4858)                                   |
| [--mbx-tabviewer-inactive-text-color](tabviewer-css-vars.md#mbx-tabviewer-inactive-text-color)                         | <div style="text-align:center;width:100%;">/</div>                                                         | <div style="text-align:center;width:100%;">/</div>                            |
| [--mbx-tabviewer-inactive-text-color-light](tabviewer-css-vars.md#mbx-tabviewer-inactive-text-color-light)             | [--mbx-tabviewer-inactive-text-color](tabviewer-css-vars.md#mbx-tabviewer-inactive-text-color)             | #c2c2c2                                                                       |
| [--mbx-tabviewer-inactive-text-color-dark](tabviewer-css-vars.md#mbx-tabviewer-inactive-text-color-dark)               | [--mbx-tabviewer-inactive-text-color](tabviewer-css-vars.md#mbx-tabviewer-inactive-text-color)             | #c2c2c2                                                                       |
| [--mbx-tabviewer-inactive-background-hover](tabviewer-css-vars.md#mbx-tabviewer-inactive-background-hover)             | <div style="text-align:center;width:100%;">/</div>                                                         | <div style="text-align:center;width:100%;">/</div>                            |
| [--mbx-tabviewer-inactive-background-hover-light](tabviewer-css-vars.md#mbx-tabviewer-inactive-background-hover-light) | [--mbx-tabviewer-inactive-background-hover](tabviewer-css-vars.md#mbx-tabviewer-inactive-background-hover) | linear-gradient(to right, #b6b4b4, #999797)                                   |
| [--mbx-tabviewer-inactive-background-hover-dark](tabviewer-css-vars.md#mbx-tabviewer-inactive-background-hover-dark)   | [--mbx-tabviewer-inactive-background-hover](tabviewer-css-vars.md#mbx-tabviewer-inactive-background-hover) | linear-gradient(to right, #566888, #3c465a)                                   |
| [--mbx-tabviewer-inactive-text-color-hover](tabviewer-css-vars.md#mbx-tabviewer-inactive-text-color-hover)             | <div style="text-align:center;width:100%;">/</div>                                                         | <div style="text-align:center;width:100%;">/</div>                            |
| [--mbx-tabviewer-inactive-text-color-hover-light](tabviewer-css-vars.md#mbx-tabviewer-inactive-text-color-hover-light) | [--mbx-tabviewer-inactive-text-color-hover](tabviewer-css-vars.md#mbx-tabviewer-inactive-text-color-hover) | [--mbx-text-color-hover-light](global-css-vars.md#mbx-text-color-hover-light) |
| [--mbx-tabviewer-inactive-text-color-hover-dark](tabviewer-css-vars.md#mbx-tabviewer-inactive-text-color-hover-dark)   | [--mbx-tabviewer-inactive-text-color-hover](tabviewer-css-vars.md#mbx-tabviewer-inactive-text-color-hover) | [--mbx-text-color-hover-dark](global-css-vars.md#mbx-text-color-hover-dark)   |

---

<br>

### Table

| Prop                                                                                       | Fallback                                                                       | Default                                                           |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| [--mbx-table-background](table-css-vars.md#mbx-table-background)                           | <div style="text-align:center;width:100%;">/</div>                             | <div style="text-align:center;width:100%;">/</div>                |
| [--mbx-table-background-dark](table-css-vars.md#mbx-table-background-dark)                 | [--mbx-table-background](table-css-vars.md#mbx-table-background)               | [--mbx-background-dark](global-css-vars.md#mbx-background-dark)   |
| [--mbx-table-background-light](table-css-vars.md#mbx-table-background-light)               | [--mbx-table-background](table-css-vars.md#mbx-table-background)               | [--mbx-background-light](global-css-vars.md#mbx-background-light) |
| [--mbx-table-text-color](table-css-vars.md#mbx-table-text-color)                           | <div style="text-align:center;width:100%;">/</div>                             | <div style="text-align:center;width:100%;">/</div>                |
| [--mbx-table-text-color-light](table-css-vars.md#mbx-table-text-color-light)               | [--mbx-table-text-color](table-css-vars.md#mbx-table-text-color)               | [--mbx-text-color-light](global-css-vars.md#mbx-text-color-light) |
| [--mbx-table-text-color-dark](table-css-vars.md#mbx-table-text-color-dark)                 | [--mbx-table-text-color](table-css-vars.md#mbx-table-text-color)               | [--mbx-text-color-dark](global-css-vars.md#mbx-text-color-dark)   |
| [--mbx-table-header-background](table-css-vars.md#mbx-table-header-background)             | <div style="text-align:center;width:100%;">/</div>                             | <div style="text-align:center;width:100%;">/</div>                |
| [--mbx-table-header-background-dark](table-css-vars.md#mbx-table-header-background-dark)   | [--mbx-table-header-background](table-css-vars.md#mbx-table-header-background) | linear-gradient(to right, #4b5b77, #3e4c64)                       |
| [--mbx-table-header-background-light](table-css-vars.md#mbx-table-header-background-light) | [--mbx-table-header-background](table-css-vars.md#mbx-table-header-background) | linear-gradient(to right, #354155, #2b3546)                       |
| [--mbx-table-header-text-color](table-css-vars.md#mbx-table-header-text-color)             | <div style="text-align:center;width:100%;">/</div>                             | <div style="text-align:center;width:100%;">/</div>                |
| [--mbx-table-header-text-color-light](table-css-vars.md#mbx-table-header-text-color-light) | [--mbx-table-header-text-color](table-css-vars.md#mbx-table-header-text-color) | whitesmoke                                                        |
| [--mbx-table-header-text-color-dark](table-css-vars.md#mbx-table-header-text-color-dark)   | [--mbx-table-header-text-color](table-css-vars.md#mbx-table-header-text-color) | rgb(255, 255, 255)                                                |
| [--mbx-table-border-color](table-css-vars.md#mbx-table-border-color)                       | <div style="text-align:center;width:100%;">/</div>                             | <div style="text-align:center;width:100%;">/</div>                |
| [--mbx-table-border-color-light](table-css-vars.md#mbx-table-border-color-light)           | [--mbx-table-border-color](table-css-vars.md#mbx-table-border-color)           | darkslategrey                                                     |
| [--mbx-table-border-color-dark](table-css-vars.md#mbx-table-border-color-dark)             | [--mbx-table-border-color](table-css-vars.md#mbx-table-border-color)           | rgb(219, 219, 219)                                                |

---

<br>

<br>

## Organisms

<br>

### Calendar

| Prop                                                                                                    | Fallback                                                                                    | Default                                            |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| [--mbx-calendar-background](calendar-css-vars.md#mbx-calendar-background)                               | <div style="text-align:center;width:100%;">/</div>                                          | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-calendar-background-light](calendar-css-vars.md#mbx-calendar-background-light)                   | [--mbx-calendar-background](calendar-css-vars.md#mbx-calendar-background)                   | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-calendar-background-dark](calendar-css-vars.md#mbx-calendar-background-dark)                     | [--mbx-calendar-background](calendar-css-vars.md#mbx-calendar-background)                   | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-calendar-text-color](calendar-css-vars.md#mbx-calendar-text-color)                               | <div style="text-align:center;width:100%;">/</div>                                          | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-calendar-text-color-light](calendar-css-vars.md#mbx-calendar-text-color-light)                   | [--mbx-calendar-text-color](calendar-css-vars.md#mbx-calendar-text-color)                   | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-calendar-text-color-dark](calendar-css-vars.md#mbx-calendar-text-color-dark)                     | [--mbx-calendar-text-color](calendar-css-vars.md#mbx-calendar-text-color)                   | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-calendar-background-hover](calendar-css-vars.md#mbx-calendar-background-hover)                   | <div style="text-align:center;width:100%;">/</div>                                          | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-calendar-background-hover-light](calendar-css-vars.md#mbx-calendar-background-hover-light)       | [--mbx-calendar-background-hover](calendar-css-vars.md#mbx-calendar-background-hover)       | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-calendar-background-hover-dark](calendar-css-vars.md#mbx-calendar-background-hover-dark)         | [--mbx-calendar-background-hover](calendar-css-vars.md#mbx-calendar-background-hover)       | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-calendar-text-color-hover](calendar-css-vars.md#mbx-calendar-text-color-hover)                   | <div style="text-align:center;width:100%;">/</div>                                          | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-calendar-text-color-hover-light](calendar-css-vars.md#mbx-calendar-text-color-hover-light)       | [--mbx-calendar-text-color-hover](calendar-css-vars.md#mbx-calendar-text-color-hover)       | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-calendar-text-color-hover-dark](calendar-css-vars.md#mbx-calendar-text-color-hover-dark)         | [--mbx-calendar-text-color-hover](calendar-css-vars.md#mbx-calendar-text-color-hover)       | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-calendar-arrow](calendar-css-vars.md#mbx-calendar-arrow)                                         | <div style="text-align:center;width:100%;">/</div>                                          | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-calendar-arrow-light](calendar-css-vars.md#mbx-calendar-arrow-light)                             | [--mbx-calendar-arrow](calendar-css-vars.md#mbx-calendar-arrow)                             | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-calendar-arrow-dark](calendar-css-vars.md#mbx-calendar-arrow-dark)                               | [--mbx-calendar-arrow](calendar-css-vars.md#mbx-calendar-arrow)                             | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-calendar-arrow-hover](calendar-css-vars.md#mbx-calendar-arrow-hover)                             | <div style="text-align:center;width:100%;">/</div>                                          | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-calendar-arrow-hover-light](calendar-css-vars.md#mbx-calendar-arrow-hover-light)                 | <div style="text-align:center;width:100%;">/</div>                                          | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-calendar-arrow-hover-dark](calendar-css-vars.md#mbx-calendar-arrow-hover-dark)                   | <div style="text-align:center;width:100%;">/</div>                                          | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-calendar-selected-background](calendar-css-vars.md#mbx-calendar-selected-background)             | <div style="text-align:center;width:100%;">/</div>                                          | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-calendar-selected-background-dark](calendar-css-vars.md#mbx-calendar-selected-background-dark)   | [--mbx-calendar-selected-background](calendar-css-vars.md#mbx-calendar-selected-background) | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-calendar-selected-background-light](calendar-css-vars.md#mbx-calendar-selected-background-light) | [--mbx-calendar-selected-background](calendar-css-vars.md#mbx-calendar-selected-background) | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-calendar-selected-text-color](calendar-css-vars.md#mbx-calendar-selected-text-color)             | <div style="text-align:center;width:100%;">/</div>                                          | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-calendar-selected-text-color-light](calendar-css-vars.md#mbx-calendar-selected-text-color-light) | [--mbx-calendar-selected-text-color](calendar-css-vars.md#mbx-calendar-selected-text-color) | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-calendar-selected-text-color-dark](calendar-css-vars.md#mbx-calendar-selected-text-color-dark)   | [--mbx-calendar-selected-text-color](calendar-css-vars.md#mbx-calendar-selected-text-color) | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-calendar-today-color](calendar-css-vars.md#mbx-calendar-today-color)                             | <div style="text-align:center;width:100%;">/</div>                                          | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-calendar-today-color-light](calendar-css-vars.md#mbx-calendar-today-color-light)                 | [--mbx-calendar-today-color](calendar-css-vars.md#mbx-calendar-today-color)                 | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-calendar-today-color-dark](calendar-css-vars.md#mbx-calendar-today-color-dark)                   | [--mbx-calendar-today-color](calendar-css-vars.md#mbx-calendar-today-color)                 | <div style="text-align:center;width:100%;">/</div> |

---

<br>

### DatePicker

| Prop                                                                                                                            | Fallback                                                                                                            | Default                                            |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| [--mbx-datepicker-background](datepicker-css-vars.md#mbx-datepicker-background)                                                 | <div style="text-align:center;width:100%;">/</div>                                                                  | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-datepicker-background-light](datepicker-css-vars.md#mbx-datepicker-background-light)                                     | [--mbx-datepicker-background](datepicker-css-vars.md#mbx-datepicker-background)                                     | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-datepicker-background-dark](datepicker-css-vars.md#mbx-datepicker-background-dark)                                       | [--mbx-datepicker-background](datepicker-css-vars.md#mbx-datepicker-background)                                     | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-datepicker-text-color](datepicker-css-vars.md#mbx-datepicker-text-color)                                                 | <div style="text-align:center;width:100%;">/</div>                                                                  | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-datepicker-text-color-light](datepicker-css-vars.md#mbx-datepicker-text-color-light)                                     | [--mbx-datepicker-text-color](datepicker-css-vars.md#mbx-datepicker-text-color)                                     | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-datepicker-text-color-dark](datepicker-css-vars.md#mbx-datepicker-text-color-dark)                                       | [--mbx-datepicker-text-color](datepicker-css-vars.md#mbx-datepicker-text-color)                                     | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-datepicker-calendar-background](datepicker-css-vars.md#mbx-datepicker-calendar-background)                               | <div style="text-align:center;width:100%;">/</div>                                                                  | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-datepicker-calendar-background-light](datepicker-css-vars.md#mbx-datepicker-calendar-background-light)                   | [--mbx-datepicker-calendar-background](datepicker-css-vars.md#mbx-datepicker-calendar-background)                   | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-datepicker-calendar-background-dark](datepicker-css-vars.md#mbx-datepicker-calendar-background-dark)                     | [--mbx-datepicker-calendar-background](datepicker-css-vars.md#mbx-datepicker-calendar-background)                   | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-datepicker-calendar-text-color](datepicker-css-vars.md#mbx-datepicker-calendar-text-color)                               | <div style="text-align:center;width:100%;">/</div>                                                                  | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-datepicker-calendar-text-color-light](datepicker-css-vars.md#mbx-datepicker-calendar-text-color-light)                   | [--mbx-datepicker-calendar-text-color](datepicker-css-vars.md#mbx-datepicker-calendar-text-color)                   | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-datepicker-calendar-text-color-dark](datepicker-css-vars.md#mbx-datepicker-calendar-text-color-dark)                     | [--mbx-datepicker-calendar-text-color](datepicker-css-vars.md#mbx-datepicker-calendar-text-color)                   | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-datepicker-calendar-background-hover](datepicker-css-vars.md#mbx-datepicker-calendar-background-hover)                   | <div style="text-align:center;width:100%;">/</div>                                                                  | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-datepicker-calendar-background-hover-light](datepicker-css-vars.md#mbx-datepicker-calendar-background-hover-light)       | [--mbx-datepicker-calendar-background-hover](datepicker-css-vars.md#mbx-datepicker-calendar-background-hover)       | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-datepicker-calendar-background-hover-dark](datepicker-css-vars.md#mbx-datepicker-calendar-background-hover-dark)         | [--mbx-datepicker-calendar-background-hover](datepicker-css-vars.md#mbx-datepicker-calendar-background-hover)       | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-datepicker-calendar-text-color-hover](datepicker-css-vars.md#mbx-datepicker-calendar-text-color-hover)                   | <div style="text-align:center;width:100%;">/</div>                                                                  | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-datepicker-calendar-text-color-hover-light](datepicker-css-vars.md#mbx-datepicker-calendar-text-color-hover-light)       | [--mbx-datepicker-calendar-text-color-hover](datepicker-css-vars.md#mbx-datepicker-calendar-text-color-hover)       | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-datepicker-calendar-text-color-hover-dark](datepicker-css-vars.md#mbx-datepicker-calendar-text-color-hover-dark)         | [--mbx-datepicker-calendar-text-color-hover](datepicker-css-vars.md#mbx-datepicker-calendar-text-color-hover)       | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-datepicker-calendar-arrow](datepicker-css-vars.md#mbx-datepicker-calendar-arrow)                                         | <div style="text-align:center;width:100%;">/</div>                                                                  | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-datepicker-calendar-arrow-light](datepicker-css-vars.md#mbx-datepicker-calendar-arrow-light)                             | [--mbx-datepicker-calendar-arrow](datepicker-css-vars.md#mbx-datepicker-calendar-arrow)                             | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-datepicker-calendar-arrow-dark](datepicker-css-vars.md#mbx-datepicker-calendar-arrow-dark)                               | [--mbx-datepicker-calendar-arrow](datepicker-css-vars.md#mbx-datepicker-calendar-arrow)                             | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-datepicker-calendar-arrow-hover](datepicker-css-vars.md#mbx-datepicker-calendar-arrow-hover)                             | <div style="text-align:center;width:100%;">/</div>                                                                  | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-datepicker-calendar-arrow-hover-light](datepicker-css-vars.md#mbx-datepicker-calendar-arrow-hover-light)                 | [--mbx-datepicker-calendar-arrow-hover](datepicker-css-vars.md#mbx-datepicker-calendar-arrow-hover)                 | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-datepicker-calendar-arrow-hover-dark](datepicker-css-vars.md#mbx-datepicker-calendar-arrow-hover-dark)                   | [--mbx-datepicker-calendar-arrow-hover](datepicker-css-vars.md#mbx-datepicker-calendar-arrow-hover)                 | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-datepicker-calendar-selected-background](datepicker-css-vars.md#mbx-datepicker-calendar-selected-background)             | <div style="text-align:center;width:100%;">/</div>                                                                  | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-datepicker-calendar-selected-background-light](datepicker-css-vars.md#mbx-datepicker-calendar-selected-background-light) | [--mbx-datepicker-calendar-selected-background](datepicker-css-vars.md#mbx-datepicker-calendar-selected-background) | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-datepicker-calendar-selected-background-dark](datepicker-css-vars.md#mbx-datepicker-calendar-selected-background-dark)   | [--mbx-datepicker-calendar-selected-background](datepicker-css-vars.md#mbx-datepicker-calendar-selected-background) | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-datepicker-calendar-selected-text-color](datepicker-css-vars.md#mbx-datepicker-calendar-selected-text-color)             | <div style="text-align:center;width:100%;">/</div>                                                                  | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-datepicker-calendar-selected-text-color-light](datepicker-css-vars.md#mbx-datepicker-calendar-selected-text-color-light) | [--mbx-datepicker-calendar-selected-text-color](datepicker-css-vars.md#mbx-datepicker-calendar-selected-text-color) | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-datepicker-calendar-selected-text-color-dark](datepicker-css-vars.md#mbx-datepicker-calendar-selected-text-color-dark)   | [--mbx-datepicker-calendar-selected-text-color](datepicker-css-vars.md#mbx-datepicker-calendar-selected-text-color) | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-datepicker-calendar-today-color](datepicker-css-vars.md#mbx-datepicker-calendar-today-color)                             | <div style="text-align:center;width:100%;">/</div>                                                                  | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-datepicker-calendar-today-color-light](datepicker-css-vars.md#mbx-datepicker-calendar-today-color-light)                 | [--mbx-datepicker-calendar-today-color](datepicker-css-vars.md#mbx-datepicker-calendar-today-color)                 | <div style="text-align:center;width:100%;">/</div> |
| [--mbx-datepicker-calendar-today-color-dark](datepicker-css-vars.md#mbx-datepicker-calendar-today-color-dark)                   | [--mbx-datepicker-calendar-today-color](datepicker-css-vars.md#mbx-datepicker-calendar-today-color)                 | <div style="text-align:center;width:100%;">/</div> |

---

<br>

### Drawer

| Prop                                                                              | Fallback                                                              | Default                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------- | ----------------------------------------------------------------- |
| [--mbx-drawer-background-light](drawer-css-vars.md#mbx-drawer-background-light)   | [--mbx-drawer-background](drawer-css-vars.md#mbx-drawer-background)   | [--mbx-background-light](global-css-vars.md#mbx-background-light) |
| [--mbx-drawer-background](drawer-css-vars.md#mbx-drawer-background)               | <div style="text-align:center;width:100%;">/</div>                    | <div style="text-align:center;width:100%;">/</div>                |
| [--mbx-drawer-background-dark](drawer-css-vars.md#mbx-drawer-background-dark)     | [--mbx-drawer-background](drawer-css-vars.md#mbx-drawer-background)   | [--mbx-background-dark](global-css-vars.md#mbx-background-dark)   |
| [--mbx-drawer-text-color](drawer-css-vars.md#mbx-drawer-text-color)               | <div style="text-align:center;width:100%;">/</div>                    | <div style="text-align:center;width:100%;">/</div>                |
| [--mbx-drawer-text-color-light](drawer-css-vars.md#mbx-drawer-text-color-light)   | [--mbx-drawer-text-color](drawer-css-vars.md#mbx-drawer-text-color)   | [--mbx-text-color-light](global-css-vars.md#mbx-text-color-light) |
| [--mbx-drawer-text-color-dark](drawer-css-vars.md#mbx-drawer-text-color-dark)     | [--mbx-drawer-text-color](drawer-css-vars.md#mbx-drawer-text-color)   | [--mbx-text-color-dark](global-css-vars.md#mbx-text-color-dark)   |
| [--mbx-drawer-arrow](drawer-css-vars.md#mbx-drawer-arrow)                         | <div style="text-align:center;width:100%;">/</div>                    | <div style="text-align:center;width:100%;">/</div>                |
| [--mbx-drawer-arrow-light](drawer-css-vars.md#mbx-drawer-arrow-light)             | [--mbx-drawer-arrow](drawer-css-vars.md#mbx-drawer-arrow)             | <div style="text-align:center;width:100%;">/</div>                |
| [--mbx-drawer-arrow-dark](drawer-css-vars.md#mbx-drawer-arrow-dark)               | [--mbx-drawer-arrow](drawer-css-vars.md#mbx-drawer-arrow)             | <div style="text-align:center;width:100%;">/</div>                |
| [--mbx-drawer-arrow-hover](drawer-css-vars.md#mbx-drawer-arrow-hover)             | <div style="text-align:center;width:100%;">/</div>                    | <div style="text-align:center;width:100%;">/</div>                |
| [--mbx-drawer-arrow-hover-light](drawer-css-vars.md#mbx-drawer-arrow-hover-light) | [--mbx-drawer-arrow-hover](drawer-css-vars.md#mbx-drawer-arrow-hover) | <div style="text-align:center;width:100%;">/</div>                |
| [--mbx-drawer-arrow-hover-dark](drawer-css-vars.md#mbx-drawer-arrow-hover-dark)   | [--mbx-drawer-arrow-hover](drawer-css-vars.md#mbx-drawer-arrow-hover) | <div style="text-align:center;width:100%;">/</div>                |

---

<br>

### Form

| Prop                                                                                                      | Fallback                                                                                      | Default                                                                                              |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| [--mbx-form-background-light](form-css-vars.md#mbx-form-background-light)                                 | [--mbx-form-background](form-css-vars.md#mbx-form-background)                                 | [--mbx-background-light](global-css-vars.md#mbx-background-light)                                    |
| [--mbx-form-background](form-css-vars.md#mbx-form-background)                                             | <div style="text-align:center;width:100%;">/</div>                                            | <div style="text-align:center;width:100%;">/</div>                                                   |
| [--mbx-form-background-dark](form-css-vars.md#mbx-form-background-dark)                                   | [--mbx-form-background](form-css-vars.md#mbx-form-background)                                 | [--mbx-background-dark](global-css-vars.md#mbx-background-dark)                                      |
| [--mbx-form-text-color](form-css-vars.md#mbx-form-text-color)                                             | <div style="text-align:center;width:100%;">/</div>                                            | <div style="text-align:center;width:100%;">/</div>                                                   |
| [--mbx-form-text-color-light](form-css-vars.md#mbx-form-text-color-light)                                 | [--mbx-form-text-color](form-css-vars.md#mbx-form-text-color)                                 | [--mbx-text-color-light](global-css-vars.md#mbx-text-color-light)                                    |
| [--mbx-form-text-color-dark](form-css-vars.md#mbx-form-text-color-dark)                                   | [--mbx-form-text-color](form-css-vars.md#mbx-form-text-color)                                 | [--mbx-text-color-dark](global-css-vars.md#mbx-text-color-dark)                                      |
| [--mbx-form-submit-background](form-css-vars.md#mbx-form-submit-background)                               | <div style="text-align:center;width:100%;">/</div>                                            | <div style="text-align:center;width:100%;">/</div>                                                   |
| [--mbx-form-submit-background-light](form-css-vars.md#mbx-form-submit-background-light)                   | [--mbx-form-submit-background](form-css-vars.md#mbx-form-submit-background)                   | [--mbx-button-background-light](button-css-vars.md#mbx-button-background-light)                      |
| [--mbx-form-submit-background-dark](form-css-vars.md#mbx-form-submit-background-dark)                     | [--mbx-form-submit-background](form-css-vars.md#mbx-form-submit-background)                   | [--mbx-button-background-dark](button-css-vars.md#mbx-button-background-dark)                        |
| [--mbx-form-submit-text-color](form-css-vars.md#mbx-form-submit-text-color)                               | <div style="text-align:center;width:100%;">/</div>                                            | <div style="text-align:center;width:100%;">/</div>                                                   |
| [--mbx-form-submit-text-color-light](form-css-vars.md#mbx-form-submit-text-color-light)                   | [--mbx-form-submit-text-color](form-css-vars.md#mbx-form-submit-text-color)                   | [--mbx-button-text-color-light](button-css-vars.md#mbx-button-text-color-light)                      |
| [--mbx-form-submit-text-color-dark](form-css-vars.md#mbx-form-submit-text-color-dark)                     | [--mbx-form-submit-text-color](form-css-vars.md#mbx-form-submit-text-color)                   | [--mbx-button-text-color-dark](button-css-vars.md#mbx-button-text-color-dark)                        |
| [--mbx-form-formfield-background](form-css-vars.md#mbx-form-formfield-background)                         | <div style="text-align:center;width:100%;">/</div>                                            | <div style="text-align:center;width:100%;">/</div>                                                   |
| [--mbx-form-formfield-background-light](form-css-vars.md#mbx-form-formfield-background-light)             | [--mbx-form-formfield-background](form-css-vars.md#mbx-form-formfield-background)             | [--mbx-formfield-background-light](formfield-css-vars.md#mbx-formfield-background-light)             |
| [--mbx-form-formfield-background-dark](form-css-vars.md#mbx-form-formfield-background-dark)               | [--mbx-form-formfield-background](form-css-vars.md#mbx-form-formfield-background)             | [--mbx-formfield-background-dark](formfield-css-vars.md#mbx-formfield-background-dark)               |
| [--mbx-form-formfield-text-color](form-css-vars.md#mbx-form-formfield-text-color)                         | <div style="text-align:center;width:100%;">/</div>                                            | <div style="text-align:center;width:100%;">/</div>                                                   |
| [--mbx-form-formfield-text-color-light](form-css-vars.md#mbx-form-formfield-text-color-light)             | [--mbx-form-formfield-text-color](form-css-vars.md#mbx-form-formfield-text-color)             | [--mbx-formfield-text-color-light](formfield-css-vars.md#mbx-formfield-text-color-light)             |
| [--mbx-form-formfield-text-color-dark](form-css-vars.md#mbx-form-formfield-text-color-dark)               | [--mbx-form-formfield-text-color](form-css-vars.md#mbx-form-formfield-text-color)             | [--mbx-formfield-text-color-dark](formfield-css-vars.md#mbx-formfield-text-color-dark)               |
| [--mbx-form-formfield-background-hover](form-css-vars.md#mbx-form-formfield-background-hover)             | <div style="text-align:center;width:100%;">/</div>                                            | <div style="text-align:center;width:100%;">/</div>                                                   |
| [--mbx-form-formfield-background-hover-light](form-css-vars.md#mbx-form-formfield-background-hover-light) | [--mbx-form-formfield-background-hover](form-css-vars.md#mbx-form-formfield-background-hover) | [--mbx-formfield-background-hover-light](formfield-css-vars.md#mbx-formfield-background-hover-light) |
| [--mbx-form-formfield-background-hover-dark](form-css-vars.md#mbx-form-formfield-background-hover-dark)   | [--mbx-form-formfield-background-hover](form-css-vars.md#mbx-form-formfield-background-hover) | [--mbx-formfield-background-hover-dark](formfield-css-vars.md#mbx-formfield-background-hover-dark)   |
| [--mbx-form-formfield-text-color-hover](form-css-vars.md#mbx-form-formfield-text-color-hover)             | <div style="text-align:center;width:100%;">/</div>                                            | <div style="text-align:center;width:100%;">/</div>                                                   |
| [--mbx-form-formfield-text-color-hover-light](form-css-vars.md#mbx-form-formfield-text-color-hover-light) | [--mbx-form-formfield-text-color-hover](form-css-vars.md#mbx-form-formfield-text-color-hover) | [--mbx-formfield-text-color-hover-light](formfield-css-vars.md#mbx-formfield-text-color-hover-light) |
| [--mbx-form-formfield-text-color-hover-dark](form-css-vars.md#mbx-form-formfield-text-color-hover-dark)   | [--mbx-form-formfield-text-color-hover](form-css-vars.md#mbx-form-formfield-text-color-hover) | [--mbx-formfield-text-color-hover-dark](formfield-css-vars.md#mbx-formfield-text-color-hover-dark)   |

---

<br>
