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
