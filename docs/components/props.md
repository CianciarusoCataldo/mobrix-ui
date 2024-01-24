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

| <div style='text-align:center;margin:auto;'>Parameter</div>                                          | <div style='text-align:center;margin:auto;'>Type</div>       | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | --------------------------------------------------------- | ------------ | --------------- | --------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[children](atoms/Button/props.md#children)</div>         | <div style='text-align:center;margin:auto;'>(JSX.Element     | string)                                                   | (JSX.Element | string)[]</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[onClick](atoms/Button/props.md#onclick)</div>           | <div style='text-align:center;margin:auto;'>() => void</div> | <div style='text-align:center;margin:auto;'>/</div>       |
| <div style='text-align:center;margin:auto;'>[onMouseEnter](atoms/Button/props.md#onmouseenter)</div> | <div style='text-align:center;margin:auto;'>() => void</div> | <div style='text-align:center;margin:auto;'>/</div>       |
| <div style='text-align:center;margin:auto;'>[onMouseLeave](atoms/Button/props.md#onmouseleave)</div> | <div style='text-align:center;margin:auto;'>() => void</div> | <div style='text-align:center;margin:auto;'>/</div>       |

<br>
<br>

### CheckBox

<br>

| <div style='text-align:center;margin:auto;'>Parameter</div>                                    | <div style='text-align:center;margin:auto;'>Type</div>                        | <div style='text-align:center;margin:auto;'>Default</div>            |
| ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[value](atoms/CheckBox/props.md#value)</div>       | <div style='text-align:center;margin:auto;'>boolean</div>                     | <div style='text-align:center;margin:auto;'>false</div>              |
| <div style='text-align:center;margin:auto;'>[onChange](atoms/CheckBox/props.md#onchange)</div> | <div style='text-align:center;margin:auto;'>(newValue: boolean) => void</div> | <div style='text-align:center;margin:auto;'>/</div>                  |
| <div style='text-align:center;margin:auto;'>[icon](atoms/CheckBox/props.md#icon)</div>         | <div style='text-align:center;margin:auto;'>JSX.Element</div>                 | <div style='text-align:center;margin:auto;'>Internal tick icon</div> |

<br>
<br>

### CodeBox

<br>

| <div style='text-align:center;margin:auto;'>Parameter</div>                                         | <div style='text-align:center;margin:auto;'>Type</div>    | <div style='text-align:center;margin:auto;'>Default</div> |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | ---------- | -------------- | ------------------------------------------------------------ |
| <div style='text-align:center;margin:auto;'>[value](atoms/CodeBox/props.md#value)</div>             | <div style='text-align:center;margin:auto;'>string</div>  | <div style='text-align:center;margin:auto;'>/</div>       |
| <div style='text-align:center;margin:auto;'>[highlight](atoms/CodeBox/props.md#highlight)</div>     | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div>       |
| <div style='text-align:center;margin:auto;'>[environment](atoms/CodeBox/props.md#environment)</div> | <div style='text-align:center;margin:auto;'>'javascript'  | 'python'                                                  | 'terminal' | 'common'</div> | <div style='text-align:center;margin:auto;'>'terminal'</div> |

<br>
<br>

### Counter

<br>

| <div style='text-align:center;margin:auto;'>Parameter</div>                                         | <div style='text-align:center;margin:auto;'>Type</div>                       | <div style='text-align:center;margin:auto;'>Default</div>  |
| --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[value](atoms/Counter/props.md#value)</div>             | <div style='text-align:center;margin:auto;'>number</div>                     | <div style='text-align:center;margin:auto;'>/</div>        |
| <div style='text-align:center;margin:auto;'>[onChange](atoms/Counter/props.md#onchange)</div>       | <div style='text-align:center;margin:auto;'>(newValue: number) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |
| <div style='text-align:center;margin:auto;'>[placeholder](atoms/Counter/props.md#placeholder)</div> | <div style='text-align:center;margin:auto;'>string</div>                     | <div style='text-align:center;margin:auto;'>/</div>        |
| <div style='text-align:center;margin:auto;'>[readOnly](atoms/Counter/props.md#readonly)</div>       | <div style='text-align:center;margin:auto;'>boolean</div>                    | <div style='text-align:center;margin:auto;'>false</div>    |
| <div style='text-align:center;margin:auto;'>[min](atoms/Counter/props.md#min)</div>                 | <div style='text-align:center;margin:auto;'>number</div>                     | <div style='text-align:center;margin:auto;'>/</div>        |
| <div style='text-align:center;margin:auto;'>[max](atoms/Counter/props.md#max)</div>                 | <div style='text-align:center;margin:auto;'>number</div>                     | <div style='text-align:center;margin:auto;'>/</div>        |

<br>
<br>

### Divider

<br>

| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------- |

<br>
<br>

### IconButton

<br>

| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------- |

<br>
<br>

### Input

<br>

| <div style='text-align:center;margin:auto;'>Parameter</div>                                       | <div style='text-align:center;margin:auto;'>Type</div>                       | <div style='text-align:center;margin:auto;'>Default</div>  |
| ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[value](atoms/Input/props.md#value)</div>             | <div style='text-align:center;margin:auto;'>string</div>                     | <div style='text-align:center;margin:auto;'>/</div>        |
| <div style='text-align:center;margin:auto;'>[onChange](atoms/Input/props.md#onchange)</div>       | <div style='text-align:center;margin:auto;'>(newValue: string) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |
| <div style='text-align:center;margin:auto;'>[placeholder](atoms/Input/props.md#placeholder)</div> | <div style='text-align:center;margin:auto;'>string</div>                     | <div style='text-align:center;margin:auto;'>/</div>        |
| <div style='text-align:center;margin:auto;'>[readOnly](atoms/Input/props.md#readonly)</div>       | <div style='text-align:center;margin:auto;'>boolean</div>                    | <div style='text-align:center;margin:auto;'>false</div>    |

<br>
<br>

### Label

<br>

| <div style='text-align:center;margin:auto;'>Parameter</div>                                 | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------- | --------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[children](atoms/Label/props.md#children)</div> | <div style='text-align:center;margin:auto;'>string     | string[]</div>                                            | <div style='text-align:center;margin:auto;'>/</div> |

<br>
<br>

### Link

<br>

| <div style='text-align:center;margin:auto;'>Parameter</div>                                | <div style='text-align:center;margin:auto;'>Type</div>   | <div style='text-align:center;margin:auto;'>Default</div> |
| ------------------------------------------------------------------------------------------ | -------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[to](atoms/Link/props.md#to)</div>             | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div>       |
| <div style='text-align:center;margin:auto;'>[newTab](atoms/Link/props.md#newtab)</div>     | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>false</div>   |
| <div style='text-align:center;margin:auto;'>[children](atoms/Link/props.md#children)</div> | <div style='text-align:center;margin:auto;'>JSX.Element  | string</div>                                              | <div style='text-align:center;margin:auto;'>/</div> |

<br>
<br>

### RadioButton

<br>

| <div style='text-align:center;margin:auto;'>Parameter</div>                                               | <div style='text-align:center;margin:auto;'>Type</div>                        | <div style='text-align:center;margin:auto;'>Default</div> |
| --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[value](atoms/RadioButton/props.md#value)</div>               | <div style='text-align:center;margin:auto;'>boolean</div>                     | <div style='text-align:center;margin:auto;'>false</div>   |
| <div style='text-align:center;margin:auto;'>[onChange](atoms/RadioButton/props.md#onchange)</div>         | <div style='text-align:center;margin:auto;'>(newValue: boolean) => void</div> | <div style='text-align:center;margin:auto;'>/</div>       |
| <div style='text-align:center;margin:auto;'>[deselectable](atoms/RadioButton/props.md#deselectable)</div> | <div style='text-align:center;margin:auto;'>boolean</div>                     | <div style='text-align:center;margin:auto;'>false</div>   |

<br>
<br>

### Rater

<br>

| <div style='text-align:center;margin:auto;'>Parameter</div>                                 | <div style='text-align:center;margin:auto;'>Type</div>                     | <div style='text-align:center;margin:auto;'>Default</div>  |
| ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------- | -------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[value](atoms/Rater/props.md#value)</div>       | <div style='text-align:center;margin:auto;'>number</div>                   | <div style='text-align:center;margin:auto;'>0</div>        |
| <div style='text-align:center;margin:auto;'>[max](atoms/Rater/props.md#max)</div>           | <div style='text-align:center;margin:auto;'>number</div>                   | <div style='text-align:center;margin:auto;'>5</div>        |
| <div style='text-align:center;margin:auto;'>[readOnly](atoms/Rater/props.md#readonly)</div> | <div style='text-align:center;margin:auto;'>boolean</div>                  | <div style='text-align:center;margin:auto;'>false</div>    |
| <div style='text-align:center;margin:auto;'>[type](atoms/Rater/props.md#type)</div>         | <div style='text-align:center;margin:auto;'>'star'                         | 'circle'</div>                                             | <div style='text-align:center;margin:auto;'>'star'</div> |
| <div style='text-align:center;margin:auto;'>[vertical](atoms/Rater/props.md#vertical)</div> | <div style='text-align:center;margin:auto;'>boolean</div>                  | <div style='text-align:center;margin:auto;'>false</div>    |
| <div style='text-align:center;margin:auto;'>[onChange](atoms/Rater/props.md#onchange)</div> | <div style='text-align:center;margin:auto;'>(newVote:number) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |

<br>
<br>

### Selector

<br>

| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------- |

<br>
<br>

### Slider

<br>

| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------- |

<br>
<br>

### Spinner

<br>

| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------- |

<br>
<br>

### Toggle

<br>

| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------- |

<br>

## molecules

<br>

### Card

<br>

| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------- |

<br>
<br>

### Carousel

<br>

| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------- |

<br>
<br>

### Container

<br>

| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------- |

<br>
<br>

### DismissableCard

<br>

| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------- |

<br>
<br>

### Dropdown

<br>

| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------- |

<br>
<br>

### ExpandableContainer

<br>

| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------- |

<br>
<br>

### FormField

<br>

| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------- |

<br>
<br>

### List

<br>

| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------- |

<br>
<br>

### Modal

<br>

| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------- |

<br>
<br>

### Popup

<br>

| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------- |

<br>
<br>

### RadioButtonGroup

<br>

| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------- |

<br>
<br>

### Review

<br>

| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------- |

<br>
<br>

### Table

<br>

| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------- |

<br>
<br>

### TabViewer

<br>

| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------- |

<br>

## organisms

<br>

### Calendar

<br>

| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------- |

<br>
<br>

### DatePicker

<br>

| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------- |

<br>
<br>

### Drawer

<br>

| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------- |

<br>
<br>

### Form

<br>

| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------- |

<br>
