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

| Prop                                | Fallback                                                          | Default                                                                       |
| ----------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| --mbx-button-background             | [--mbx-background](global-css-vars.md#mbx-background)             |                                                                               |
| --mbx-button-background-dark        |                                                                   | [--mbx-background-dark](global-css-vars.md#mbx-background-dark)               |
| --mbx-button-background-light       |                                                                   | [--mbx-background-light](global-css-vars.md#mbx-background-light)             |
| --mbx-button-text-color             | [--mbx-text-color](global-css-vars.md#mbx-text-color)             |                                                                               |
| --mbx-button-text-color-light       |                                                                   | [--mbx-text-color-light](global-css-vars.md#mbx-text-color-light)             |
| --mbx-button-text-color-dark        | [--mbx-button-text-color](#mbx-button-text-color)                 | [--mbx-text-color-dark](global-css-vars.md#mbx-text-color-dark)               |
| --mbx-button-background-hover-light |                                                                   | [--mbx-background-hover-light](global-css-vars.md#mbx-background-hover-light) |
| --mbx-button-background-hover-dark  |                                                                   | [--mbx-background-hover-light](global-css-vars.md#mbx-background-hover-light) |
| --mbx-button-background-hover       | [--mbx-background-hover](global-css-vars.md#mbx-background-hover) |                                                                               |
| --mbx-button-text-color-hover       | [--mbx-text-color-hover](global-css-vars.md#mbx-text-color-hover) |                                                                               |
| --mbx-button-text-color-hover-light |                                                                   | [--mbx-text-color-hover-light](global-css-vars.md#mbx-text-color-hover-light) |
| --mbx-button-text-color-hover-dark  |                                                                   | [--mbx-text-color-hover-dark](global-css-vars.md#mbx-text-color-hover-dark)   |

---

<br>

### CheckBox

| Prop                                  | Fallback                                                                      | Default          |
| ------------------------------------- | ----------------------------------------------------------------------------- | ---------------- |
| --mbx-checkbox-background             | [--mbx-background](global-css-vars.md#mbx-background)                         |                  |
| --mbx-checkbox-background-dark        | [--mbx-background-dark](global-css-vars.md#mbx-background-dark)               |                  |
| --mbx-checkbox-background-light       | [--mbx-background-light](global-css-vars.md#mbx-background-light)             |                  |
| --mbx-checkbox-background-hover-light | [--mbx-background-hover-light](global-css-vars.md#mbx-background-hover-light) |                  |
| --mbx-checkbox-background-hover-dark  | [--mbx-background-hover-light](global-css-vars.md#mbx-background-hover-light) |                  |
| --mbx-checkbox-background-hover       | [--mbx-background-hover](global-css-vars.md#mbx-background-hover)             |                  |
| --mbx-checkbox-tick-color             |                                                                               |                  |
| --mbx-checkbox-tick-color-light       |                                                                               | rgb(37, 99, 235) |
| --mbx-checkbox-tick-color-dark        |                                                                               | white            |

---

<br>

### CodeBox

| Prop                           | Fallback                                                          | Default |
| ------------------------------ | ----------------------------------------------------------------- | ------- |
| --mbx-codebox-background       | [--mbx-background](global-css-vars.md#mbx-background)             |         |
| --mbx-codebox-background-dark  | [--mbx-background-dark](global-css-vars.md#mbx-background-dark)   |         |
| --mbx-codebox-background-light | [--mbx-background-light](global-css-vars.md#mbx-background-light) |         |
| --mbx-codebox-text-color       | [--mbx-text-color](global-css-vars.md#mbx-text-color)             |         |
| --mbx-codebox-text-color-light | [--mbx-text-color-light](global-css-vars.md#mbx-text-color-light) |         |
| --mbx-codebox-text-color-dark  | [--mbx-text-color-dark](global-css-vars.md#mbx-text-color-dark)   |         |

---

<br>

### Counter

| Prop                                    | Fallback                                                                      | Default |
| --------------------------------------- | ----------------------------------------------------------------------------- | ------- |
| --mbx-counterbox-background             | [--mbx-background](global-css-vars.md#mbx-background)                         |         |
| --mbx-counterbox-background-dark        | [--mbx-background-dark](global-css-vars.md#mbx-background-dark)               |         |
| --mbx-counterbox-background-light       | [--mbx-background-light](global-css-vars.md#mbx-background-light)             |         |
| --mbx-counterbox-text-color             | [--mbx-text-color](global-css-vars.md#mbx-text-color)                         |         |
| --mbx-counterbox-text-color-light       | [--mbx-text-color-light](global-css-vars.md#mbx-text-color-light)             |         |
| --mbx-counterbox-text-color-dark        | [--mbx-text-color-dark](global-css-vars.md#mbx-text-color-dark)               |         |
| --mbx-counterbox-background-hover-light | [--mbx-background-hover-light](global-css-vars.md#mbx-background-hover-light) |         |
| --mbx-counterbox-background-hover-dark  | [--mbx-background-hover-light](global-css-vars.md#mbx-background-hover-light) |         |
| --mbx-counterbox-background-hover       | [--mbx-background-hover](global-css-vars.md#mbx-background-hover)             |         |
| --mbx-counterbox-text-color-hover       | [--mbx-text-color-hover](global-css-vars.md#mbx-text-color-hover)             |         |
| --mbx-counterbox-text-color-hover-light | [--mbx-text-color-hover-light](global-css-vars.md#mbx-text-color-hover-light) |         |
| --mbx-counterbox-text-color-hover-dark  | [--mbx-text-color-hover-dark](global-css-vars.md#mbx-text-color-hover-dark)   |         |

---

<br>

### Divider

| Prop                      | Fallback                                                          | Default |
| ------------------------- | ----------------------------------------------------------------- | ------- |
| --mbx-divider-color       | [--mbx-text-color](global-css-vars.md#mbx-text-color)             |         |
| --mbx-divider-color-light | [--mbx-text-color-light](global-css-vars.md#mbx-text-color-light) |         |
| --mbx-divider-color-dark  | [--mbx-text-color-dark](global-css-vars.md#mbx-text-color-dark)   |         |

---

<br>

### Input

| Prop                                  | Fallback | Default                                                                       |
| ------------------------------------- | -------- | ----------------------------------------------------------------------------- |
| --mbx-inputbox-background             |          | [--mbx-background](global-css-vars.md#mbx-background)                         |
| --mbx-inputbox-background-dark        |          | [--mbx-background-dark](global-css-vars.md#mbx-background-dark)               |
| --mbx-inputbox-background-light       |          | [--mbx-background-light](global-css-vars.md#mbx-background-light)             |
| --mbx-inputbox-text-color             |          | [--mbx-text-color](global-css-vars.md#mbx-text-color)                         |
| --mbx-inputbox-text-color-light       |          | [--mbx-text-color-light](global-css-vars.md#mbx-text-color-light)             |
| --mbx-inputbox-text-color-dark        |          | [--mbx-text-color-dark](global-css-vars.md#mbx-text-color-dark)               |
| --mbx-inputbox-background-hover-light |          | [--mbx-background-hover-light](global-css-vars.md#mbx-background-hover-light) |
| --mbx-inputbox-background-hover-dark  |          | [--mbx-background-hover-light](global-css-vars.md#mbx-background-hover-light) |
| --mbx-inputbox-background-hover       |          | [--mbx-background-hover](global-css-vars.md#mbx-background-hover)             |
| --mbx-inputbox-text-color-hover       |          | [--mbx-text-color-hover](global-css-vars.md#mbx-text-color-hover)             |
| --mbx-inputbox-text-color-hover-light |          | [--mbx-text-color-hover-light](global-css-vars.md#mbx-text-color-hover-light) |
| --mbx-inputbox-text-color-hover-dark  |          | [--mbx-text-color-hover-dark](global-css-vars.md#mbx-text-color-hover-dark)   |

---

<br>

### Label

| Prop                         | Fallback | Default                                                           |
| ---------------------------- | -------- | ----------------------------------------------------------------- |
| --mbx-label-text-color       |          | [--mbx-text-color](global-css-vars.md#mbx-text-color)             |
| --mbx-label-text-color-light |          | [--mbx-text-color-light](global-css-vars.md#mbx-text-color-light) |
| --mbx-label-text-color-dark  |          | [--mbx-text-color-dark](global-css-vars.md#mbx-text-color-dark)   |

---

<br>

### Link

| Prop                         | Fallback | Default                                                                       |
| ---------------------------- | -------- | ----------------------------------------------------------------------------- |
| --mbx-link-color             |          | [--mbx-link-color](global-css-vars.md#mbx-link-color)                         |
| --mbx-link-color-light       |          | [--mbx-link-color-light](global-css-vars.md#mbx-link-color-light)             |
| --mbx-link-color-dark        |          | [--mbx-link-color-dark](global-css-vars.md#mbx-link-color-dark)               |
| --mbx-link-color-hover       |          | [--mbx-link-color-hover](global-css-vars.md#mbx-link-color-hover)             |
| --mbx-link-color-hover-light |          | [--mbx-link-color-hover-light](global-css-vars.md#mbx-link-color-hover-light) |
| --mbx-link-color-hover-dark  |          | [--mbx-link-color-hover-dark](global-css-vars.md#mbx-link-color-hover-dark)   |

---

<br>

### RadioButton

| Prop                               | Fallback | Default                                                                           |
| ---------------------------------- | -------- | --------------------------------------------------------------------------------- |
| --mbx-radio-background             |          |                                                                                   |
| --mbx-radio-background-light       |          | radial-gradient(#f1f1f1 20%, #e4e4e4 30%, #bebebe 55%, #f0f0f0 20%)               |
| --mbx-radio-background-dark        |          | radial-gradient(closest-side, #2d3748 20%, #232b38 30%, #1d1f44 55%, #191f29 20%) |
| --mbx-radio-background-hover       |          |                                                                                   |
| --mbx-radio-background-hover-light |          | radial-gradient(#f1f1f1 20%, #cfcfcf 30%, #a7a7a7 55%, #f0f0f0 20%)               |
| --mbx-radio-background-hover-dark  |          | radial-gradient(#354155 20%, #2d3747 30%, #2b2e5f 55%, #323f55 20%)               |
| --mbx-radio-icon-background        |          |                                                                                   |
| --mbx-radio-icon-background-light  |          | radial-gradient(circle at 23px 23px, #2d3748, #191f29)                            |
| --mbx-radio-icon-background-dark   |          | radial-gradient(circle at 23px 23px, #dbe0e6, #949494)                            |

---

<br>

### Rater

| Prop                         | Fallback | Default                                                           |
| ---------------------------- | -------- | ----------------------------------------------------------------- |
| --mbx-rater-background       |          | [--mbx-background](global-css-vars.md#mbx-background)             |
| --mbx-rater-background-dark  |          | [--mbx-background-dark](global-css-vars.md#mbx-background-dark)   |
| --mbx-rater-background-light |          | [--mbx-background-light](global-css-vars.md#mbx-background-light) |

---

<br>

### Selector

| Prop                                  | Fallback | Default                                                                       |
| ------------------------------------- | -------- | ----------------------------------------------------------------------------- |
| --mbx-selector-background             |          |                                                                               |
| --mbx-selector-background-dark        |          | [--mbx-background-dark](global-css-vars.md#mbx-background-dark)               |
| --mbx-selector-background-light       |          | [--mbx-background-light](global-css-vars.md#mbx-background-light)             |
| --mbx-selector-text-color             |          |                                                                               |
| --mbx-selector-text-color-light       |          | [--mbx-text-color-light](global-css-vars.md#mbx-text-color-light)             |
| --mbx-selector-text-color-dark        |          | [--mbx-text-color-dark](global-css-vars.md#mbx-text-color-dark)               |
| --mbx-selector-background-hover       |          |                                                                               |
| --mbx-selector-background-hover-light |          | [--mbx-background-hover-light](global-css-vars.md#mbx-background-hover-light) |
| --mbx-selector-background-hover-dark  |          | [--mbx-background-hover-light](global-css-vars.md#mbx-background-hover-light) |
| --mbx-selector-text-color-hover       |          |                                                                               |
| --mbx-selector-text-color-hover-light |          | [--mbx-text-color-hover-light](global-css-vars.md#mbx-text-color-hover-light) |
| --mbx-selector-text-color-hover-dark  |          | [--mbx-text-color-hover-dark](global-css-vars.md#mbx-text-color-hover-dark)   |

---

<br>

### Slider

| Prop                                 | Fallback | Default                                                           |
| ------------------------------------ | -------- | ----------------------------------------------------------------- |
| --mbx-slider-background              |          |                                                                   |
| --mbx-slider-background-dark         |          | [--mbx-background-dark](global-css-vars.md#mbx-background-dark)   |
| --mbx-slider-background-light        |          | [--mbx-background-light](global-css-vars.md#mbx-background-light) |
| --mbx-slider-thumb-color             |          |                                                                   |
| --mbx-slider-thumb-color-light       |          | radial-gradient(#2d3748, #1d232e)                                 |
| --mbx-slider-thumb-color-dark        |          | radial-gradient(#e3e4e9, #9b9999)                                 |
| --mbx-slider-thumb-color-hover       |          |                                                                   |
| --mbx-slider-thumb-color-hover-light |          | radial-gradient(#364257, #2a3444)                                 |
| --mbx-slider-thumb-color-hover-dark  |          | radial-gradient(#e8e9f0, #adabab)                                 |

---

<br>

### Spinner

| Prop                              | Fallback | Default |
| --------------------------------- | -------- | ------- |
| --mbx-spinner-success-color       |          |         |
| --mbx-spinner-success-color-light |          | #05bc29 |
| --mbx-spinner-success-color-dark  |          | #05bc29 |
| --mbx-spinner-error-color         |          |         |
| --mbx-spinner-error-color-light   |          | #ff0000 |
| --mbx-spinner-error-color-dark    |          | #ff0000 |
| --mbx-spinner-loading-color       |          |         |
| --mbx-spinner-loading-color-light |          | #202020 |
| --mbx-spinner-loading-color-dark  |          | #202020 |

---

<br>

### Toggle

| Prop                                       | Fallback | Default                                                           |
| ------------------------------------------ | -------- | ----------------------------------------------------------------- |
| --mbx-toggle-background                    |          |                                                                   |
| --mbx-toggle-background-dark               |          | [--mbx-background-dark](global-css-vars.md#mbx-background-dark)   |
| --mbx-toggle-background-light              |          | [--mbx-background-light](global-css-vars.md#mbx-background-light) |
| --mbx-toggle-icon-on-internal-color        |          |                                                                   |
| --mbx-toggle-icon-on-internal-color-light  |          | #ffffff                                                           |
| --mbx-toggle-icon-on-internal-color-dark   |          | #ffffff                                                           |
| --mbx-toggle-icon-on-external-color        |          |                                                                   |
| --mbx-toggle-icon-on-external-color-light  |          | #adadad                                                           |
| --mbx-toggle-icon-on-external-color-dark   |          | #adadad                                                           |
| --mbx-toggle-icon-off-internal-color       |          |                                                                   |
| --mbx-toggle-icon-off-internal-color-light |          | #a5a5a5                                                           |
| --mbx-toggle-icon-off-internal-color-dark  |          | #a5a5a5                                                           |
| --mbx-toggle-icon-off-external-color       |          |                                                                   |
| --mbx-toggle-icon-off-external-color-light |          | #a7a3a3                                                           |
| --mbx-toggle-icon-off-external-color-dark  |          | #a7a3a3                                                           |

---

<br>

<br>

## Molecules

<br>

### Card

| Prop                        | Fallback | Default                                                           |
| --------------------------- | -------- | ----------------------------------------------------------------- |
| --mbx-card-background       |          |                                                                   |
| --mbx-card-background-light |          | linear-gradient(to right, #fff, #ededee, #e6e7e7)                 |
| --mbx-card-background-dark  |          | linear-gradient(to right, #2d3748, #1d232e)                       |
| --mbx-card-text-color       |          |                                                                   |
| --mbx-card-text-color-light |          | [--mbx-text-color-light](global-css-vars.md#mbx-text-color-light) |
| --mbx-card-text-color-dark  |          | [--mbx-text-color-dark](global-css-vars.md#mbx-text-color-dark)   |

---

<br>

### Carousel

| Prop                                      | Fallback | Default                                                                        |
| ----------------------------------------- | -------- | ------------------------------------------------------------------------------ |
| --mbx-carousel-background                 |          |                                                                                |
| --mbx-carousel-background-dark            |          | [--mbx-background-dark](global-css-vars.md#mbx-background-dark)                |
| --mbx-carousel-background-light           |          | [--mbx-background-light](global-css-vars.md#mbx-background-light)              |
| --mbx-carousel-arrow-color                |          |                                                                                |
| --mbx-carousel-arrow-color-light          |          | #252525                                                                        |
| --mbx-carousel-arrow-color-dark           |          | #e2e2e2                                                                        |
| --mbx-carousel-arrow-color-hover          |          |                                                                                |
| --mbx-carousel-arrow-color-hover-light    |          | #287dfd                                                                        |
| --mbx-carousel-arrow-color-hover-dark     |          | #ff8007                                                                        |
| --mbx-carousel-dot-empty-background       |          |                                                                                |
| --mbx-carousel-dot-empty-background-light |          | radial-gradient(#000000, #181818, #282828, #3a3a3a, #4c4c4c, #6b6a6a, #858383) |
| --mbx-carousel-dot-empty-background-dark  |          | radial-gradient(#000000, #181818, #282828, #3a3a3a, #4c4c4c, #6b6a6a, #858383) |
| --mbx-carousel-dot-full-background        |          |                                                                                |
| --mbx-carousel-dot-full-background-light  |          | linear-gradient(to top, #ff8007, #fd8616, #fd9b3f, #fd9c40, #fcbb7f, #fad6b4)  |
| --mbx-carousel-dot-full-background-dark   |          | linear-gradient(to top, #ff8007, #fd8616, #fd9b3f, #fd9c40, #fcbb7f, #fad6b4)  |

---

<br>

### Container

| Prop                             | Fallback | Default                                                           |
| -------------------------------- | -------- | ----------------------------------------------------------------- |
| --mbx-container-background       |          | [--mbx-background](global-css-vars.md#mbx-background)             |
| --mbx-container-background-dark  |          | [--mbx-background-dark](global-css-vars.md#mbx-background-dark)   |
| --mbx-container-background-light |          | [--mbx-background-light](global-css-vars.md#mbx-background-light) |
| --mbx-container-text-color       |          | [--mbx-text-color](global-css-vars.md#mbx-text-color)             |
| --mbx-container-text-color-light |          | [--mbx-text-color-light](global-css-vars.md#mbx-text-color-light) |
| --mbx-container-text-color-dark  |          | [--mbx-text-color-dark](global-css-vars.md#mbx-text-color-dark)   |

---

<br>

### DismissableCard

| Prop                                      | Fallback | Default                                                                         |
| ----------------------------------------- | -------- | ------------------------------------------------------------------------------- |
| --mbx-dismissablecard-background          |          |                                                                                 |
| --mbx-dismissablecard-background-light    |          | [--mbx-card-background-light](card-css-vars.md#mbx-card-background-light)       |
| --mbx-dismissablecard-background-dark     |          | [--mbx-card-background-dark](card-css-vars.md#mbx-card-background-dark)         |
| --mbx-dismissablecard-text-color          |          |                                                                                 |
| --mbx-dismissablecard-text-color-light    |          | [--mbx-card-text-color-dark](card-css-vars.md#mbx-card-text-color-light)        |
| --mbx-dismissablecard-text-color-dark     |          | [--mbx-card-text-color-dark](card-css-vars.md#mbx-card-text-color-dark)         |
| --mbx-dismissablecard-x-color             |          |                                                                                 |
| --mbx-dismissablecard-x-color-light       |          | [--mbx-dismissablecard-text-color-light](#mbx-dismissablecard-text-color-light) |
| --mbx-dismissablecard-x-color-dark        |          | [--mbx-dismissablecard-text-color-dark](#mbx-dismissablecard-text-color-dark)   |
| --mbx-dismissablecard-x-color-hover       |          |                                                                                 |
| --mbx-dismissablecard-x-color-hover-light |          | red                                                                             |
| --mbx-dismissablecard-x-color-hover-dark  |          | red                                                                             |

---

<br>

### Dropdown

| Prop                                   | Fallback | Default |
| -------------------------------------- | -------- | ------- |
| --mbx-dropdown-background              |          |         |
| --mbx-dropdown-background-dark         |          |         |
| --mbx-dropdown-background-light        |          |         |
| --mbx-dropdown-text-color              |          |         |
| --mbx-dropdown-text-color-light        |          |         |
| --mbx-dropdown-text-color-dark         |          |         |
| --mbx-dropdown-background-hover-light  |          |         |
| --mbx-dropdown-background-hover-dark   |          |         |
| --mbx-dropdown-background-hover        |          |         |
| --mbx-dropdown-text-color-hover-light  |          |         |
| --mbx-dropdown-text-color-hover-dark   |          |         |
| --mbx-dropdown-text-color-hover        |          |         |
| --mbx-dropdown-arrow-color             |          |         |
| --mbx-dropdown-arrow-color-light       |          |         |
| --mbx-dropdown-arrow-color-dark        |          |         |
| --mbx-dropdown-arrow-color-hover       |          |         |
| --mbx-dropdown-arrow-color-hover-light |          |         |
| --mbx-dropdown-arrow-color-hover-dark  |          |         |

---

<br>

### ExpandableContainer

| Prop                                              | Fallback | Default |
| ------------------------------------------------- | -------- | ------- |
| --mbx-expandablecontainer-background              |          |         |
| --mbx-expandablecontainer-background-light        |          |         |
| --mbx-expandablecontainer-background-dark         |          |         |
| --mbx-expandablecontainer-text-color              |          |         |
| --mbx-expandablecontainer-text-color-light        |          |         |
| --mbx-expandablecontainer-text-color-dark         |          |         |
| --mbx-expandablecontainer-arrow-color             |          |         |
| --mbx-expandablecontainer-arrow-color-light       |          |         |
| --mbx-expandablecontainer-arrow-color-dark        |          |         |
| --mbx-expandablecontainer-arrow-color-hover       |          |         |
| --mbx-expandablecontainer-arrow-color-hover-light |          |         |
| --mbx-expandablecontainer-arrow-color-hover-dark  |          |         |

---

<br>

### FormField

| Prop                                   | Fallback | Default |
| -------------------------------------- | -------- | ------- |
| --mbx-formfield-background             |          |         |
| --mbx-formfield-background-dark        |          |         |
| --mbx-formfield-background-light       |          |         |
| --mbx-formfield-text-color-dark        |          |         |
| --mbx-formfield-text-color             |          |         |
| --mbx-formfield-background-hover-light |          |         |
| --mbx-formfield-background-hover-dark  |          |         |
| --mbx-formfield-background-hover       |          |         |
| --mbx-formfield-text-color-hover-light |          |         |
| --mbx-formfield-text-color-hover-dark  |          |         |
| --mbx-formfield-text-color-hover       |          |         |

---

<br>

### List

| Prop                              | Fallback | Default |
| --------------------------------- | -------- | ------- |
| --mbx-list-text-color             |          |         |
| --mbx-list-text-color-light       |          |         |
| --mbx-list-text-color-dark        |          |         |
| --mbx-list-text-color-hover       |          |         |
| --mbx-list-text-color-hover-light |          |         |
| --mbx-list-text-color-hover-dark  |          |         |

---

<br>

### Modal

| Prop                            | Fallback | Default |
| ------------------------------- | -------- | ------- |
| --mbx-modal-background          |          |         |
| --mbx-modal-background-light    |          |         |
| --mbx-modal-background-dark     |          |         |
| --mbx-modal-x-color             |          |         |
| --mbx-modal-x-color-light       |          |         |
| --mbx-modal-x-color-dark        |          |         |
| --mbx-modal-x-color-hover       |          |         |
| --mbx-modal-x-color-hover-light |          |         |
| --mbx-modal-x-color-hover-dark  |          |         |

---

<br>

### Popup

| Prop                         | Fallback | Default |
| ---------------------------- | -------- | ------- |
| --mbx-popup-background       |          |         |
| --mbx-popup-background-dark  |          |         |
| --mbx-popup-background-light |          |         |
| --mbx-popup-text-color       |          |         |
| --mbx-popup-text-color-light |          |         |
| --mbx-popup-text-color-dark  |          |         |

---

<br>

### RadioButtonGroup

| Prop                              | Fallback | Default |
| --------------------------------- | -------- | ------- |
| --mbx-radiogroup-background       |          |         |
| --mbx-radiogroup-background-dark  |          |         |
| --mbx-radiogroup-background-light |          |         |
| --mbx-radiogroup-text-color       |          |         |
| --mbx-radiogroup-text-color-light |          |         |
| --mbx-radiogroup-text-color-dark  |          |         |

---

<br>

### Review

| Prop                            | Fallback | Default |
| ------------------------------- | -------- | ------- |
| --mbx-review-background         |          |         |
| --mbx-review-background-dark    |          |         |
| --mbx-review-background-light   |          |         |
| --mbx-review-text-color         |          |         |
| --mbx-review-text-color-light   |          |         |
| --mbx-review-text-color-dark    |          |         |
| --mbx-review-link-color         |          |         |
| --mbx-review-link-color-light   |          |         |
| --mbx-review-link-color-dark    |          |         |
| --mbx-review-github-color       |          |         |
| --mbx-review-github-color-light |          |         |
| --mbx-review-github-color-dark  |          |         |

---

<br>

### TabViewer

| Prop                                            | Fallback | Default |
| ----------------------------------------------- | -------- | ------- |
| --mbx-tabviewer-background                      |          |         |
| --mbx-tabviewer-background-dark                 |          |         |
| --mbx-tabviewer-background-light                |          |         |
| --mbx-tabviewer-text-color                      |          |         |
| --mbx-tabviewer-text-color-light                |          |         |
| --mbx-tabviewer-text-color-dark                 |          |         |
| --mbx-tabviewer-inactive-background             |          |         |
| --mbx-tabviewer-inactive-background-dark        |          |         |
| --mbx-tabviewer-inactive-background-light       |          |         |
| --mbx-tabviewer-inactive-text-color             |          |         |
| --mbx-tabviewer-inactive-text-color-light       |          |         |
| --mbx-tabviewer-inactive-text-color-dark        |          |         |
| --mbx-tabviewer-inactive-background-hover-light |          |         |
| --mbx-tabviewer-inactive-background-hover-dark  |          |         |
| --mbx-tabviewer-inactive-background-hover       |          |         |
| --mbx-tabviewer-inactive-text-color-hover-light |          |         |
| --mbx-tabviewer-inactive-text-color-hover-dark  |          |         |
| --mbx-tabviewer-inactive-text-color-hover       |          |         |

---

<br>

### Table

| Prop                                      | Fallback | Default |
| ----------------------------------------- | -------- | ------- |
| --mbx-table-background                    |          |         |
| --mbx-table-background-dark               |          |         |
| --mbx-table-background-light              |          |         |
| --mbx-table-text-color                    |          |         |
| --mbx-table-text-color-light              |          |         |
| --mbx-table-text-color-dark               |          |         |
| --mbx-table-header-background             |          |         |
| --mbx-table-header-background-light       |          |         |
| --mbx-table-header-background-dark        |          |         |
| --mbx-table-header-text-color             |          |         |
| --mbx-table-header-text-color-light       |          |         |
| --mbx-table-header-text-color-dark        |          |         |
| --mbx-table-border-color-background       |          |         |
| --mbx-table-border-color-background-light |          |         |
| --mbx-table-border-color-background-dark  |          |         |

---

<br>

<br>

## Organisms

<br>

### Calendar

| Prop                                     | Fallback | Default |
| ---------------------------------------- | -------- | ------- |
| --mbx-calendar-background                |          |         |
| --mbx-calendar-background-dark           |          |         |
| --mbx-calendar-background-light          |          |         |
| --mbx-calendar-text-color                |          |         |
| --mbx-calendar-text-color-light          |          |         |
| --mbx-calendar-text-color-dark           |          |         |
| --mbx-calendar-background-hover-light    |          |         |
| --mbx-calendar-background-hover-dark     |          |         |
| --mbx-calendar-background-hover          |          |         |
| --mbx-calendar-text-color-hover-light    |          |         |
| --mbx-calendar-text-color-hover-dark     |          |         |
| --mbx-calendar-text-color-hover          |          |         |
| --mbx-calendar-arrow                     |          |         |
| --mbx-calendar-arrow-light               |          |         |
| --mbx-calendar-arrow-dark                |          |         |
| --mbx-calendar-arrow-hover               |          |         |
| --mbx-calendar-arrow-hover-light         |          |         |
| --mbx-calendar-arrow-hover-dark          |          |         |
| --mbx-calendar-selected-background       |          |         |
| --mbx-calendar-selected-background-dark  |          |         |
| --mbx-calendar-selected-background-light |          |         |
| --mbx-calendar-selected-text-color       |          |         |
| --mbx-calendar-selected-text-color-light |          |         |
| --mbx-calendar-selected-text-color-dark  |          |         |
| --mbx-calendar-today-color               |          |         |
| --mbx-calendar-today-color-light         |          |         |
| --mbx-calendar-today-color-dark          |          |         |

---

<br>

### DatePicker

| Prop                                                | Fallback | Default |
| --------------------------------------------------- | -------- | ------- |
| --mbx-datepicker-background                         |          |         |
| --mbx-datepicker-background-dark                    |          |         |
| --mbx-datepicker-background-light                   |          |         |
| --mbx-datepicker-text-color                         |          |         |
| --mbx-datepicker-text-color-light                   |          |         |
| --mbx-datepicker-text-color-dark                    |          |         |
| --mbx-datepicker-calendar-background                |          |         |
| --mbx-datepicker-calendar-background-dark           |          |         |
| --mbx-datepicker-calendar-background-light          |          |         |
| --mbx-datepicker-calendar-text-color                |          |         |
| --mbx-datepicker-calendar-text-color-light          |          |         |
| --mbx-datepicker-calendar-text-color-dark           |          |         |
| --mbx-datepicker-calendar-background-hover-light    |          |         |
| --mbx-datepicker-calendar-background-hover-dark     |          |         |
| --mbx-datepicker-calendar-background-hover          |          |         |
| --mbx-datepicker-calendar-text-color-hover-light    |          |         |
| --mbx-datepicker-calendar-text-color-hover-dark     |          |         |
| --mbx-datepicker-calendar-text-color-hover          |          |         |
| --mbx-datepicker-calendar-arrow                     |          |         |
| --mbx-datepicker-calendar-arrow-light               |          |         |
| --mbx-datepicker-calendar-arrow-dark                |          |         |
| --mbx-datepicker-calendar-arrow-hover               |          |         |
| --mbx-datepicker-calendar-arrow-hover-light         |          |         |
| --mbx-datepicker-calendar-arrow-hover-dark          |          |         |
| --mbx-datepicker-calendar-selected-background       |          |         |
| --mbx-datepicker-calendar-selected-background-dark  |          |         |
| --mbx-datepicker-calendar-selected-background-light |          |         |
| --mbx-datepicker-calendar-selected-text-color       |          |         |
| --mbx-datepicker-calendar-selected-text-color-light |          |         |
| --mbx-datepicker-calendar-selected-text-color-dark  |          |         |
| --mbx-datepicker-calendar-today-color               |          |         |
| --mbx-datepicker-calendar-today-color-light         |          |         |
| --mbx-datepicker-calendar-today-color-dark          |          |         |

---

<br>

### Drawer

| Prop                           | Fallback | Default |
| ------------------------------ | -------- | ------- |
| --mbx-drawer-background        |          |         |
| --mbx-drawer-background-dark   |          |         |
| --mbx-drawer-background-light  |          |         |
| --mbx-drawer-text-color        |          |         |
| --mbx-drawer-text-color-light  |          |         |
| --mbx-drawer-text-color-dark   |          |         |
| --mbx-drawer-arrow             |          |         |
| --mbx-drawer-arrow-light       |          |         |
| --mbx-drawer-arrow-dark        |          |         |
| --mbx-drawer-arrow-hover       |          |         |
| --mbx-drawer-arrow-hover-light |          |         |
| --mbx-drawer-arrow-hover-dark  |          |         |

---

<br>

### Form

| Prop                                        | Fallback | Default |
| ------------------------------------------- | -------- | ------- |
| --mbx-form-background                       |          |         |
| --mbx-form-background-dark                  |          |         |
| --mbx-form-background-light                 |          |         |
| --mbx-form-text-color                       |          |         |
| --mbx-form-text-color-light                 |          |         |
| --mbx-form-text-color-dark                  |          |         |
| --mbx-form-submit-background                |          |         |
| --mbx-form-submit-background-dark           |          |         |
| --mbx-form-submit-background-light          |          |         |
| --mbx-form-submit-text-color                |          |         |
| --mbx-form-submit-text-color-light          |          |         |
| --mbx-form-submit-text-color-dark           |          |         |
| --mbx-form-formfield-background             |          |         |
| --mbx-form-formfield-background-dark        |          |         |
| --mbx-form-formfield-background-light       |          |         |
| --mbx-form-formfield-text-color             |          |         |
| --mbx-form-formfield-text-color-light       |          |         |
| --mbx-form-formfield-text-color-dark        |          |         |
| --mbx-form-formfield-background-hover-light |          |         |
| --mbx-form-formfield-background-hover-dark  |          |         |
| --mbx-form-formfield-background-hover       |          |         |
| --mbx-form-formfield-text-color-hover-light |          |         |
| --mbx-form-formfield-text-color-hover-dark  |          |         |
| --mbx-form-formfield-text-color-hover       |          |         |

---

<br>
