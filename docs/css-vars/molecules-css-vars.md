# MoBrix-ui Molecules components

## Summary

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
