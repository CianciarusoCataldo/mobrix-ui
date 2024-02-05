# MoBrix-ui full props list

## Summary

- [atoms](#atoms)

  - [Button](#button)

  - [CheckBox](#checkbox)

  - [CodeBox](#codebox)

  - [Counter](#counter)

  - [Divider](#divider)

  - [IconButton](#iconbutton)

  - [Input](#input)

  - [Label](#label)

  - [Link](#link)

  - [RadioButton](#radiobutton)

  - [Rater](#rater)

  - [Selector](#selector)

  - [Slider](#slider)

  - [Spinner](#spinner)

  - [Toggle](#toggle)

- [molecules](#molecules)

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

  - [Table](#table)

  - [TabViewer](#tabviewer)

- [organisms](#organisms)

  - [Calendar](#calendar)

  - [DatePicker](#datepicker)

  - [Drawer](#drawer)

  - [Form](#form)

## atoms

<br>

### Button

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[onMouseEnter](atoms/Button/props.md#onmouseenter)</div> | <div style='text-align:center;margin:auto;'>() => void</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[onMouseLeave](atoms/Button/props.md#onmouseleave)</div> | <div style='text-align:center;margin:auto;'>() => void</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[onClick](atoms/Button/props.md#onclick)</div> | <div style='text-align:center;margin:auto;'>() => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |
| <div style='text-align:center;margin:auto;'>[children](atoms/Button/props.md#children)</div> | <div style='text-align:center;margin:auto;'>JSX.Element &#124; string</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>
<br>

### CheckBox

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[value](atoms/CheckBox/props.md#value)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>false</div> |
| <div style='text-align:center;margin:auto;'>[icon](atoms/CheckBox/props.md#icon)</div> | <div style='text-align:center;margin:auto;'>JSX.Element</div> | <div style='text-align:center;margin:auto;'>Internal tick icon</div> |
| <div style='text-align:center;margin:auto;'>[onChange](atoms/CheckBox/props.md#onchange)</div> | <div style='text-align:center;margin:auto;'>(newValue: boolean) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |

<br>
<br>

### CodeBox

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[value](atoms/CodeBox/props.md#value)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[highlight](atoms/CodeBox/props.md#highlight)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[environment](atoms/CodeBox/props.md#environment)</div> | <div style='text-align:center;margin:auto;'>`javascript` &#124; `python` &#124; `terminal` &#124; `common`</div> | <div style='text-align:center;margin:auto;'>'terminal'</div> |

<br>
<br>

### Counter

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[value](atoms/Counter/props.md#value)</div> | <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[placeholder](atoms/Counter/props.md#placeholder)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[readOnly](atoms/Counter/props.md#readonly)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>false</div> |
| <div style='text-align:center;margin:auto;'>[min](atoms/Counter/props.md#min)</div> | <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[max](atoms/Counter/props.md#max)</div> | <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[onChange](atoms/Counter/props.md#onchange)</div> | <div style='text-align:center;margin:auto;'>(newValue: number) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |

<br>
<br>

### Divider

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |

<br>
<br>

### IconButton

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[children](atoms/IconButton/props.md#children)</div> | <div style='text-align:center;margin:auto;'>JSX.Element &#124; string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[onMouseEnter](atoms/IconButton/props.md#onmouseenter)</div> | <div style='text-align:center;margin:auto;'>() => void</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[onMouseLeave](atoms/IconButton/props.md#onmouseleave)</div> | <div style='text-align:center;margin:auto;'>() => void</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[onClick](atoms/IconButton/props.md#onclick)</div> | <div style='text-align:center;margin:auto;'>() => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |

<br>
<br>

### Input

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[value](atoms/Input/props.md#value)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[placeholder](atoms/Input/props.md#placeholder)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[readOnly](atoms/Input/props.md#readonly)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>false</div> |
| <div style='text-align:center;margin:auto;'>[onChange](atoms/Input/props.md#onchange)</div> | <div style='text-align:center;margin:auto;'>(newValue: string) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |

<br>
<br>

### Label

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[children](atoms/Label/props.md#children)</div> | <div style='text-align:center;margin:auto;'>string &#124; string[]</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>
<br>

### Link

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[to](atoms/Link/props.md#to)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[newTab](atoms/Link/props.md#newtab)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>false</div> |
| <div style='text-align:center;margin:auto;'>[children](atoms/Link/props.md#children)</div> | <div style='text-align:center;margin:auto;'>`JSX.Element` &#124; `string`</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>
<br>

### RadioButton

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[value](atoms/RadioButton/props.md#value)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>false</div> |
| <div style='text-align:center;margin:auto;'>[deselectable](atoms/RadioButton/props.md#deselectable)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>false</div> |
| <div style='text-align:center;margin:auto;'>[onChange](atoms/RadioButton/props.md#onchange)</div> | <div style='text-align:center;margin:auto;'>(newValue: boolean) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |

<br>
<br>

### Rater

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[value](atoms/Rater/props.md#value)</div> | <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>0</div> |
| <div style='text-align:center;margin:auto;'>[max](atoms/Rater/props.md#max)</div> | <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>5</div> |
| <div style='text-align:center;margin:auto;'>[readOnly](atoms/Rater/props.md#readonly)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>false</div> |
| <div style='text-align:center;margin:auto;'>[type](atoms/Rater/props.md#type)</div> | <div style='text-align:center;margin:auto;'>`star`&#124;`circle`</div> | <div style='text-align:center;margin:auto;'>'star'</div> |
| <div style='text-align:center;margin:auto;'>[vertical](atoms/Rater/props.md#vertical)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>false</div> |
| <div style='text-align:center;margin:auto;'>[onChange](atoms/Rater/props.md#onchange)</div> | <div style='text-align:center;margin:auto;'>(newValue: number) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |

<br>
<br>

### Selector

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[value](atoms/Selector/props.md#value)</div> | <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>0</div> |
| <div style='text-align:center;margin:auto;'>[elements](atoms/Selector/props.md#elements)</div> | <div style='text-align:center;margin:auto;'>string[]</div> | <div style='text-align:center;margin:auto;'>[]</div> |
| <div style='text-align:center;margin:auto;'>[optionClassName](atoms/Selector/props.md#optionclassname)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[onChange](atoms/Selector/props.md#onchange)</div> | <div style='text-align:center;margin:auto;'>(newValue: number) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |

<br>
<br>

### Slider

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[value](atoms/Slider/props.md#value)</div> | <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[min](atoms/Slider/props.md#min)</div> | <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[max](atoms/Slider/props.md#max)</div> | <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[readOnly](atoms/Slider/props.md#readonly)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[onChange](atoms/Slider/props.md#onchange)</div> | <div style='text-align:center;margin:auto;'>(newValue: number) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |

<br>
<br>

### Spinner

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[value](atoms/Spinner/props.md#value)</div> | <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>'loading'</div> |
| <div style='text-align:center;margin:auto;'>[statuses](atoms/Spinner/props.md#statuses)</div> | <div style='text-align:center;margin:auto;'>Record<string, (JSX.Element &#124; string)></div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>
<br>

### Toggle

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[value](atoms/Toggle/props.md#value)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[onIcon](atoms/Toggle/props.md#onicon)</div> | <div style='text-align:center;margin:auto;'>JSX.Element</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[icon](atoms/Toggle/props.md#icon)</div> | <div style='text-align:center;margin:auto;'>JSX.Element</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[offIcon](atoms/Toggle/props.md#officon)</div> | <div style='text-align:center;margin:auto;'>JSX.Element</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[onChange](atoms/Toggle/props.md#onchange)</div> | <div style='text-align:center;margin:auto;'>(newValue: boolean) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |

<br>

## molecules

<br>

### Card

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[header](molecules/Card/props.md#header)</div> | <div style='text-align:center;margin:auto;'>JSX.Element &#124; string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[body](molecules/Card/props.md#body)</div> | <div style='text-align:center;margin:auto;'>JSX.Element &#124; string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[footer](molecules/Card/props.md#footer)</div> | <div style='text-align:center;margin:auto;'>JSX.Element &#124; string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[headerClassName](molecules/Card/props.md#headerclassname)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[bodyClassName](molecules/Card/props.md#bodyclassname)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[footerClassName](molecules/Card/props.md#footerclassname)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[headerProps](molecules/Card/props.md#headerprops)</div> | <div style='text-align:center;margin:auto;'>Record<string, any></div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[bodyProps](molecules/Card/props.md#bodyprops)</div> | <div style='text-align:center;margin:auto;'>Record<string, any></div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[footerProps](molecules/Card/props.md#footerprops)</div> | <div style='text-align:center;margin:auto;'>Record<string, any></div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[noDivider](molecules/Card/props.md#nodivider)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[noTopDivider](molecules/Card/props.md#notopdivider)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[noBottomDivider](molecules/Card/props.md#nobottomdivider)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[children](molecules/Card/props.md#children)</div> | <div style='text-align:center;margin:auto;'>`JSX.Element` &#124; `string`</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>
<br>

### Carousel

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[elements](molecules/Carousel/props.md#elements)</div> | <div style='text-align:center;margin:auto;'>(JSX.Element &#124; string)[]</div> | <div style='text-align:center;margin:auto;'>[]</div> |
| <div style='text-align:center;margin:auto;'>[onChange](molecules/Carousel/props.md#onchange)</div> | <div style='text-align:center;margin:auto;'>(newValue: number) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |
| <div style='text-align:center;margin:auto;'>[value](molecules/Carousel/props.md#value)</div> | <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>0</div> |

<br>
<br>

### Container

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[children](molecules/Container/props.md#children)</div> | <div style='text-align:center;margin:auto;'>any</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[wrapper](molecules/Container/props.md#wrapper)</div> | <div style='text-align:center;margin:auto;'>`div` &#124; `header` &#124; `footer`</div> | <div style='text-align:center;margin:auto;'>div</div> |

<br>
<br>

### DismissableCard

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[onClose](molecules/DismissableCard/props.md#onclose)</div> | <div style='text-align:center;margin:auto;'>() => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |
| <div style='text-align:center;margin:auto;'>[alwaysVisible](molecules/DismissableCard/props.md#alwaysvisible)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>false</div> |
| <div style='text-align:center;margin:auto;'>[header](molecules/DismissableCard/props.md#header)</div> | <div style='text-align:center;margin:auto;'>JSX.Element &#124; string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[body](molecules/DismissableCard/props.md#body)</div> | <div style='text-align:center;margin:auto;'>JSX.Element &#124; string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[footer](molecules/DismissableCard/props.md#footer)</div> | <div style='text-align:center;margin:auto;'>JSX.Element &#124; string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[noDivider](molecules/DismissableCard/props.md#nodivider)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[noTopDivider](molecules/DismissableCard/props.md#notopdivider)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[noBottomDivider](molecules/DismissableCard/props.md#nobottomdivider)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[children](molecules/DismissableCard/props.md#children)</div> | <div style='text-align:center;margin:auto;'>`JSX.Element` &#124; `string`</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[headerClassName](molecules/DismissableCard/props.md#headerclassname)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[bodyClassName](molecules/DismissableCard/props.md#bodyclassname)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[footerClassName](molecules/DismissableCard/props.md#footerclassname)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[headerProps](molecules/DismissableCard/props.md#headerprops)</div> | <div style='text-align:center;margin:auto;'>Record<string, any></div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[bodyProps](molecules/DismissableCard/props.md#bodyprops)</div> | <div style='text-align:center;margin:auto;'>Record<string, any></div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[footerProps](molecules/DismissableCard/props.md#footerprops)</div> | <div style='text-align:center;margin:auto;'>Record<string, any></div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>
<br>

### Dropdown

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[value](molecules/Dropdown/props.md#value)</div> | <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[elements](molecules/Dropdown/props.md#elements)</div> | <div style='text-align:center;margin:auto;'>(JSX.Element &#124; string)[]</div> | <div style='text-align:center;margin:auto;'>[]</div> |
| <div style='text-align:center;margin:auto;'>[hideArrow](molecules/Dropdown/props.md#hidearrow)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>false</div> |
| <div style='text-align:center;margin:auto;'>[onChange](molecules/Dropdown/props.md#onchange)</div> | <div style='text-align:center;margin:auto;'>(newValue: number) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |

<br>
<br>

### ExpandableContainer

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[children](molecules/ExpandableContainer/props.md#children)</div> | <div style='text-align:center;margin:auto;'>any</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[wrapper](molecules/ExpandableContainer/props.md#wrapper)</div> | <div style='text-align:center;margin:auto;'>`div` &#124; `header` &#124; `footer`</div> | <div style='text-align:center;margin:auto;'>div</div> |
| <div style='text-align:center;margin:auto;'>[expanded](molecules/ExpandableContainer/props.md#expanded)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[compact](molecules/ExpandableContainer/props.md#compact)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[onChange](molecules/ExpandableContainer/props.md#onchange)</div> | <div style='text-align:center;margin:auto;'>(newValue: boolean) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |

<br>
<br>

### FormField

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[value](molecules/FormField/props.md#value)</div> | <div style='text-align:center;margin:auto;'>/</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[type](molecules/FormField/props.md#type)</div> | <div style='text-align:center;margin:auto;'>`boolean` &#124; `text` &#124; `numeric` &#124; `radio` &#124; `checkbox` &#124; `toggle` &#124; `rater` &#124; `slider` &#124; `input` &#124; `counter`</div> | <div style='text-align:center;margin:auto;'>'text'</div> |
| <div style='text-align:center;margin:auto;'>[placeholder](molecules/FormField/props.md#placeholder)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[required](molecules/FormField/props.md#required)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[validate](molecules/FormField/props.md#validate)</div> | <div style='text-align:center;margin:auto;'>(fieldValue: any) => boolean</div> | <div style='text-align:center;margin:auto;'>() => ˚{}</div> |
| <div style='text-align:center;margin:auto;'>[header](molecules/FormField/props.md#header)</div> | <div style='text-align:center;margin:auto;'>`JSX.Element` &#124; `string`</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[headerClassName](molecules/FormField/props.md#headerclassname)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[headerProps](molecules/FormField/props.md#headerprops)</div> | <div style='text-align:center;margin:auto;'>Record<string, any></div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[errorLabel](molecules/FormField/props.md#errorlabel)</div> | <div style='text-align:center;margin:auto;'>`JSX.Element` &#124; `string`</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>
<br>

### List

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[elements](molecules/List/props.md#elements)</div> | <div style='text-align:center;margin:auto;'>(`JSX.Element` &#124; `string`)[]</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[onClick](molecules/List/props.md#onclick)</div> | <div style='text-align:center;margin:auto;'>() => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |

<br>
<br>

### Modal

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[onClose](molecules/Modal/props.md#onclose)</div> | <div style='text-align:center;margin:auto;'>() => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |
| <div style='text-align:center;margin:auto;'>[children](molecules/Modal/props.md#children)</div> | <div style='text-align:center;margin:auto;'>`JSX.Element` &#124; `string`</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>
<br>

### Popup

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[onClose](molecules/Popup/props.md#onclose)</div> | <div style='text-align:center;margin:auto;'>() => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |
| <div style='text-align:center;margin:auto;'>[children](molecules/Popup/props.md#children)</div> | <div style='text-align:center;margin:auto;'>`JSX.Element` &#124; `string`</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>
<br>

### RadioButtonGroup

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[value](molecules/RadioButtonGroup/props.md#value)</div> | <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[buttons](molecules/RadioButtonGroup/props.md#buttons)</div> | <div style='text-align:center;margin:auto;'>{ component: `JSX.Element`, text: `string`, textPosition:  `top` &#124; `bottom` &#124; `left` &#124; `right` }[]</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[elementClassName](molecules/RadioButtonGroup/props.md#elementclassname)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[radioProps](molecules/RadioButtonGroup/props.md#radioprops)</div> | <div style='text-align:center;margin:auto;'>RadioButtonProps</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[defaultPosition](molecules/RadioButtonGroup/props.md#defaultposition)</div> | <div style='text-align:center;margin:auto;'>`top` &#124; `bottom` &#124; `left` &#124; `right`</div> | <div style='text-align:center;margin:auto;'>left</div> |
| <div style='text-align:center;margin:auto;'>[horizontal](molecules/RadioButtonGroup/props.md#horizontal)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>false</div> |
| <div style='text-align:center;margin:auto;'>[onChange](molecules/RadioButtonGroup/props.md#onchange)</div> | <div style='text-align:center;margin:auto;'>(newValue: number) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |

<br>
<br>

### Review

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[user](molecules/Review/props.md#user)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[description](molecules/Review/props.md#description)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[icon](molecules/Review/props.md#icon)</div> | <div style='text-align:center;margin:auto;'>JSX.Element</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[url](molecules/Review/props.md#url)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[logo](molecules/Review/props.md#logo)</div> | <div style='text-align:center;margin:auto;'>`default` &#124; `link` &#124; `facebook` &#124; `twitter` &#124; `google` &#124; `linkedin` &#124; `github`</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[max](molecules/Review/props.md#max)</div> | <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>5</div> |
| <div style='text-align:center;margin:auto;'>[vertical](molecules/Review/props.md#vertical)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>false</div> |
| <div style='text-align:center;margin:auto;'>[rate](molecules/Review/props.md#rate)</div> | <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>0</div> |
| <div style='text-align:center;margin:auto;'>[rateType](molecules/Review/props.md#ratetype)</div> | <div style='text-align:center;margin:auto;'>`star`&#124;`circle`</div> | <div style='text-align:center;margin:auto;'>'star'</div> |

<br>
<br>

### Table

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[headers](molecules/Table/props.md#headers)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[rows](molecules/Table/props.md#rows)</div> | <div style='text-align:center;margin:auto;'>(JSX.Element &#124; string)[][]</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[headerClassName](molecules/Table/props.md#headerclassname)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[headersProps](molecules/Table/props.md#headersprops)</div> | <div style='text-align:center;margin:auto;'>Record<string, any></div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[cellClassName](molecules/Table/props.md#cellclassname)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[cellProps](molecules/Table/props.md#cellprops)</div> | <div style='text-align:center;margin:auto;'>Record<string, any></div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[rowClassName](molecules/Table/props.md#rowclassname)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[rowProps](molecules/Table/props.md#rowprops)</div> | <div style='text-align:center;margin:auto;'>Record<string, any></div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[onClick](molecules/Table/props.md#onclick)</div> | <div style='text-align:center;margin:auto;'>(row: number, column: number) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |
| <div style='text-align:center;margin:auto;'>[propsCallback](molecules/Table/props.md#propscallback)</div> | <div style='text-align:center;margin:auto;'>(row: number, column: number) => Record<string, any></div> | <div style='text-align:center;margin:auto;'>() => ({})</div> |

<br>
<br>

### TabViewer

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[selected](molecules/TabViewer/props.md#selected)</div> | <div style='text-align:center;margin:auto;'>/</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[tabs](molecules/TabViewer/props.md#tabs)</div> | <div style='text-align:center;margin:auto;'>{`label`: string; `content`: JSX.Element;}[]</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[tabProps](molecules/TabViewer/props.md#tabprops)</div> | <div style='text-align:center;margin:auto;'>Record<string,any></div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[tabSelectedProps](molecules/TabViewer/props.md#tabselectedprops)</div> | <div style='text-align:center;margin:auto;'>Record<string,any></div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[tabUnselectedProps](molecules/TabViewer/props.md#tabunselectedprops)</div> | <div style='text-align:center;margin:auto;'>Record<string,any></div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[tabViewProps](molecules/TabViewer/props.md#tabviewprops)</div> | <div style='text-align:center;margin:auto;'>Record<string,any></div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[tabClassName](molecules/TabViewer/props.md#tabclassname)</div> | <div style='text-align:center;margin:auto;'>Record<string,any></div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[tabSelectedClassName](molecules/TabViewer/props.md#tabselectedclassname)</div> | <div style='text-align:center;margin:auto;'>Record<string,any></div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[tabUnselectedClassName](molecules/TabViewer/props.md#tabunselectedclassname)</div> | <div style='text-align:center;margin:auto;'>Record<string,any></div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[tabViewClassName](molecules/TabViewer/props.md#tabviewclassname)</div> | <div style='text-align:center;margin:auto;'>Record<string,any></div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[onChange](molecules/TabViewer/props.md#onchange)</div> | <div style='text-align:center;margin:auto;'>(newValue: number) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |

<br>

## organisms

<br>

### Calendar

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[value](organisms/Calendar/props.md#value)</div> | <div style='text-align:center;margin:auto;'>CalendarDate</div> | <div style='text-align:center;margin:auto;'>Today date</div> |
| <div style='text-align:center;margin:auto;'>[hideArrows](organisms/Calendar/props.md#hidearrows)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[days](organisms/Calendar/props.md#days)</div> | <div style='text-align:center;margin:auto;'>string[]</div> | <div style='text-align:center;margin:auto;'>English week labels</div> |
| <div style='text-align:center;margin:auto;'>[months](organisms/Calendar/props.md#months)</div> | <div style='text-align:center;margin:auto;'>string[]</div> | <div style='text-align:center;margin:auto;'>English months labels</div> |
| <div style='text-align:center;margin:auto;'>[onViewChange](organisms/Calendar/props.md#onviewchange)</div> | <div style='text-align:center;margin:auto;'>(date: CalendarDate) => void</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[startYear](organisms/Calendar/props.md#startyear)</div> | <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>Today year</div> |
| <div style='text-align:center;margin:auto;'>[startMonth](organisms/Calendar/props.md#startmonth)</div> | <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>Today month</div> |
| <div style='text-align:center;margin:auto;'>[fromToday](organisms/Calendar/props.md#fromtoday)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>true</div> |
| <div style='text-align:center;margin:auto;'>[dayLabel](organisms/Calendar/props.md#daylabel)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>true</div> |
| <div style='text-align:center;margin:auto;'>[labelClassName](organisms/Calendar/props.md#labelclassname)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[labelProps](organisms/Calendar/props.md#labelprops)</div> | <div style='text-align:center;margin:auto;'>Record<string, any></div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[onChange](organisms/Calendar/props.md#onchange)</div> | <div style='text-align:center;margin:auto;'>(newValue: CalendarDate) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |

<br>
<br>

### DatePicker

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[value](organisms/DatePicker/props.md#value)</div> | <div style='text-align:center;margin:auto;'>CalendarDate</div> | <div style='text-align:center;margin:auto;'>Today date</div> |
| <div style='text-align:center;margin:auto;'>[hideArrows](organisms/DatePicker/props.md#hidearrows)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[days](organisms/DatePicker/props.md#days)</div> | <div style='text-align:center;margin:auto;'>string[]</div> | <div style='text-align:center;margin:auto;'>English week labels</div> |
| <div style='text-align:center;margin:auto;'>[months](organisms/DatePicker/props.md#months)</div> | <div style='text-align:center;margin:auto;'>string[]</div> | <div style='text-align:center;margin:auto;'>English months labels</div> |
| <div style='text-align:center;margin:auto;'>[onViewChange](organisms/DatePicker/props.md#onviewchange)</div> | <div style='text-align:center;margin:auto;'>(date: CalendarDate) => void</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[startYear](organisms/DatePicker/props.md#startyear)</div> | <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>Today year</div> |
| <div style='text-align:center;margin:auto;'>[startMonth](organisms/DatePicker/props.md#startmonth)</div> | <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>Today month</div> |
| <div style='text-align:center;margin:auto;'>[fromToday](organisms/DatePicker/props.md#fromtoday)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>true</div> |
| <div style='text-align:center;margin:auto;'>[dayLabel](organisms/DatePicker/props.md#daylabel)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>true</div> |
| <div style='text-align:center;margin:auto;'>[labelClassName](organisms/DatePicker/props.md#labelclassname)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[labelProps](organisms/DatePicker/props.md#labelprops)</div> | <div style='text-align:center;margin:auto;'>Record<string, any></div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[onChange](organisms/DatePicker/props.md#onchange)</div> | <div style='text-align:center;margin:auto;'>(newValue: CalendarDate) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |
| <div style='text-align:center;margin:auto;'>[onClose](organisms/DatePicker/props.md#onclose)</div> | <div style='text-align:center;margin:auto;'>() => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |

<br>
<br>

### Drawer

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[position](organisms/Drawer/props.md#position)</div> | <div style='text-align:center;margin:auto;'>`left` &#124; `right` &#124; `top` &#124; `bottom` &#124; `top-left` &#124; `top-right` &#124; `bottom-left` &#124; `bottom-right`</div> | <div style='text-align:center;margin:auto;'>`left`</div> |
| <div style='text-align:center;margin:auto;'>[onClose](organisms/Drawer/props.md#onclose)</div> | <div style='text-align:center;margin:auto;'>() => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |
| <div style='text-align:center;margin:auto;'>[children](organisms/Drawer/props.md#children)</div> | <div style='text-align:center;margin:auto;'>`(JSX.Element` &#124; `string`) &#124; (JSX.Element` &#124; `string`)[]</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[closeOnClickOutside](organisms/Drawer/props.md#closeonclickoutside)</div> | <div style='text-align:center;margin:auto;'>`boolean`</div> | <div style='text-align:center;margin:auto;'>true</div> |

<br>
<br>

### Form

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[title](organisms/Form/props.md#title)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[fields](organisms/Form/props.md#fields)</div> | <div style='text-align:center;margin:auto;'>Record<string, { header?:string; type: ``}></div> | <div style='text-align:center;margin:auto;'>{}</div> |
| <div style='text-align:center;margin:auto;'>[onSubmit](organisms/Form/props.md#onsubmit)</div> | <div style='text-align:center;margin:auto;'>(values: Record<string, any>) => void</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[submitLabel](organisms/Form/props.md#submitlabel)</div> | <div style='text-align:center;margin:auto;'>`string` &#124; `JSX.Element`</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[fieldClassName](organisms/Form/props.md#fieldclassname)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[children](organisms/Form/props.md#children)</div> | <div style='text-align:center;margin:auto;'>JSX.Element</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>
