# DatePicker

## Summary

- [CSS Variables table](#css-variables-table)
- [CSS Variables list](#css-variables-list)

<br>

## CSS Variables table

<br>

| <div style='text-align:center;margin:auto;'>Prop</div>                                                                                                      | <div style='text-align:center;margin:auto;'>Fallback</div>                                                                                    | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-background](#mbx-datepicker-background)</div>                                                 | <div style='text-align:center;margin:auto;'>/</div>                                                                                           | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-background-light](#mbx-datepicker-background-light)</div>                                     | <div style='text-align:center;margin:auto;'>[mbx-datepicker-background](#mbx-datepicker-background)</div>                                     | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-background-dark](#mbx-datepicker-background-dark)</div>                                       | <div style='text-align:center;margin:auto;'>[mbx-datepicker-background](#mbx-datepicker-background)</div>                                     | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-text-color](#mbx-datepicker-text-color)</div>                                                 | <div style='text-align:center;margin:auto;'>/</div>                                                                                           | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-text-color-light](#mbx-datepicker-text-color-light)</div>                                     | <div style='text-align:center;margin:auto;'>[mbx-datepicker-text-color](#mbx-datepicker-text-color)</div>                                     | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-text-color-dark](#mbx-datepicker-text-color-dark)</div>                                       | <div style='text-align:center;margin:auto;'>[mbx-datepicker-text-color](#mbx-datepicker-text-color)</div>                                     | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-icon](#mbx-datepicker-icon)</div>                                                             | <div style='text-align:center;margin:auto;'>/</div>                                                                                           | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-icon-light](#mbx-datepicker-icon-light)</div>                                                 | <div style='text-align:center;margin:auto;'>[mbx-datepicker-icon](#mbx-datepicker-icon)</div>                                                 | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-icon-dark](#mbx-datepicker-icon-dark)</div>                                                   | <div style='text-align:center;margin:auto;'>[mbx-datepicker-icon](#mbx-datepicker-icon)</div>                                                 | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-icon-hover](#mbx-datepicker-icon-hover)</div>                                                 | <div style='text-align:center;margin:auto;'>/</div>                                                                                           | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-icon-hover-light](#mbx-datepicker-icon-hover-light)</div>                                     | <div style='text-align:center;margin:auto;'>[mbx-datepicker-icon-hover](#mbx-datepicker-icon-hover)</div>                                     | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>blue</div><div style='text-align:center;margin-auto;'><div style='background:blue;margin:auto; width:15px; height:15px;'/></div></div></div>     |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-icon-hover-dark](#mbx-datepicker-icon-hover-dark)</div>                                       | <div style='text-align:center;margin:auto;'>[mbx-datepicker-icon-hover](#mbx-datepicker-icon-hover)</div>                                     | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>orange</div><div style='text-align:center;margin-auto;'><div style='background:orange;margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-background](#mbx-datepicker-calendar-background)</div>                               | <div style='text-align:center;margin:auto;'>/</div>                                                                                           | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-background-light](#mbx-datepicker-calendar-background-light)</div>                   | <div style='text-align:center;margin:auto;'>[mbx-datepicker-calendar-background](#mbx-datepicker-calendar-background)</div>                   | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-background-dark](#mbx-datepicker-calendar-background-dark)</div>                     | <div style='text-align:center;margin:auto;'>[mbx-datepicker-calendar-background](#mbx-datepicker-calendar-background)</div>                   | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-text-color](#mbx-datepicker-calendar-text-color)</div>                               | <div style='text-align:center;margin:auto;'>/</div>                                                                                           | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-text-color-light](#mbx-datepicker-calendar-text-color-light)</div>                   | <div style='text-align:center;margin:auto;'>[mbx-datepicker-calendar-text-color](#mbx-datepicker-calendar-text-color)</div>                   | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-text-color-dark](#mbx-datepicker-calendar-text-color-dark)</div>                     | <div style='text-align:center;margin:auto;'>[mbx-datepicker-calendar-text-color](#mbx-datepicker-calendar-text-color)</div>                   | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-background-hover](#mbx-datepicker-calendar-background-hover)</div>                   | <div style='text-align:center;margin:auto;'>/</div>                                                                                           | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-background-hover-light](#mbx-datepicker-calendar-background-hover-light)</div>       | <div style='text-align:center;margin:auto;'>[mbx-datepicker-calendar-background-hover](#mbx-datepicker-calendar-background-hover)</div>       | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-background-hover-dark](#mbx-datepicker-calendar-background-hover-dark)</div>         | <div style='text-align:center;margin:auto;'>[mbx-datepicker-calendar-background-hover](#mbx-datepicker-calendar-background-hover)</div>       | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-text-color-hover](#mbx-datepicker-calendar-text-color-hover)</div>                   | <div style='text-align:center;margin:auto;'>/</div>                                                                                           | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-text-color-hover-light](#mbx-datepicker-calendar-text-color-hover-light)</div>       | <div style='text-align:center;margin:auto;'>[mbx-datepicker-calendar-text-color-hover](#mbx-datepicker-calendar-text-color-hover)</div>       | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-text-color-hover-dark](#mbx-datepicker-calendar-text-color-hover-dark)</div>         | <div style='text-align:center;margin:auto;'>[mbx-datepicker-calendar-text-color-hover](#mbx-datepicker-calendar-text-color-hover)</div>       | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-arrow](#mbx-datepicker-calendar-arrow)</div>                                         | <div style='text-align:center;margin:auto;'>/</div>                                                                                           | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-arrow-light](#mbx-datepicker-calendar-arrow-light)</div>                             | <div style='text-align:center;margin:auto;'>[mbx-datepicker-calendar-arrow](#mbx-datepicker-calendar-arrow)</div>                             | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-arrow-dark](#mbx-datepicker-calendar-arrow-dark)</div>                               | <div style='text-align:center;margin:auto;'>[mbx-datepicker-calendar-arrow](#mbx-datepicker-calendar-arrow)</div>                             | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-arrow-hover](#mbx-datepicker-calendar-arrow-hover)</div>                             | <div style='text-align:center;margin:auto;'>/</div>                                                                                           | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-arrow-hover-light](#mbx-datepicker-calendar-arrow-hover-light)</div>                 | <div style='text-align:center;margin:auto;'>[mbx-datepicker-calendar-arrow-hover](#mbx-datepicker-calendar-arrow-hover)</div>                 | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-arrow-hover-dark](#mbx-datepicker-calendar-arrow-hover-dark)</div>                   | <div style='text-align:center;margin:auto;'>[mbx-datepicker-calendar-arrow-hover](#mbx-datepicker-calendar-arrow-hover)</div>                 | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-selected-background](#mbx-datepicker-calendar-selected-background)</div>             | <div style='text-align:center;margin:auto;'>/</div>                                                                                           | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-selected-background-light](#mbx-datepicker-calendar-selected-background-light)</div> | <div style='text-align:center;margin:auto;'>[mbx-datepicker-calendar-selected-background](#mbx-datepicker-calendar-selected-background)</div> | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-selected-background-dark](#mbx-datepicker-calendar-selected-background-dark)</div>   | <div style='text-align:center;margin:auto;'>[mbx-datepicker-calendar-selected-background](#mbx-datepicker-calendar-selected-background)</div> | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-selected-text-color](#mbx-datepicker-calendar-selected-text-color)</div>             | <div style='text-align:center;margin:auto;'>/</div>                                                                                           | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-selected-text-color-light](#mbx-datepicker-calendar-selected-text-color-light)</div> | <div style='text-align:center;margin:auto;'>[mbx-datepicker-calendar-selected-text-color](#mbx-datepicker-calendar-selected-text-color)</div> | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-selected-text-color-dark](#mbx-datepicker-calendar-selected-text-color-dark)</div>   | <div style='text-align:center;margin:auto;'>[mbx-datepicker-calendar-selected-text-color](#mbx-datepicker-calendar-selected-text-color)</div> | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-today-color](#mbx-datepicker-calendar-today-color)</div>                             | <div style='text-align:center;margin:auto;'>/</div>                                                                                           | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-today-color-light](#mbx-datepicker-calendar-today-color-light)</div>                 | <div style='text-align:center;margin:auto;'>[mbx-datepicker-calendar-today-color](#mbx-datepicker-calendar-today-color)</div>                 | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>red</div><div style='text-align:center;margin-auto;'><div style='background:red;margin:auto; width:15px; height:15px;'/></div></div></div>       |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-today-color-dark](#mbx-datepicker-calendar-today-color-dark)</div>                   | <div style='text-align:center;margin:auto;'>[mbx-datepicker-calendar-today-color](#mbx-datepicker-calendar-today-color)</div>                 | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>red</div><div style='text-align:center;margin-auto;'><div style='background:red;margin:auto; width:15px; height:15px;'/></div></div></div>       |

## CSS Variables list

<br>

### --mbx-datepicker-background

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Fallback value for `and`<br><br>

### --mbx-datepicker-background-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                | <div style='text-align:center;margin:auto;'>Default</div> |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-datepicker-background](#mbx-datepicker-background)</div> | <div style='text-align:center;margin:auto;'>/</div>       |

DatePicker ATTRIBUTE when [dark](../../global/props.md#dark) mode is `off'<br><br>

### --mbx-datepicker-background-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                | <div style='text-align:center;margin:auto;'>Default</div> |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-datepicker-background](#mbx-datepicker-background)</div> | <div style='text-align:center;margin:auto;'>/</div>       |

DatePicker ATTRIBUTE when [dark](../../global/props.md#dark) mode is `on'<br><br>

### --mbx-datepicker-text-color

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Fallback value for `and`<br><br>

### --mbx-datepicker-text-color-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                | <div style='text-align:center;margin:auto;'>Default</div> |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-datepicker-text-color](#mbx-datepicker-text-color)</div> | <div style='text-align:center;margin:auto;'>/</div>       |

DatePicker ATTRIBUTE when [dark](../../global/props.md#dark) mode is `off'<br><br>

### --mbx-datepicker-text-color-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                | <div style='text-align:center;margin:auto;'>Default</div> |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-datepicker-text-color](#mbx-datepicker-text-color)</div> | <div style='text-align:center;margin:auto;'>/</div>       |

DatePicker ATTRIBUTE when [dark](../../global/props.md#dark) mode is `on'<br><br>

### --mbx-datepicker-icon

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Fallback value for `--mbx-datepicker-icon-light` and `--mbx-datepicker-icon-dark`<br><br>

### --mbx-datepicker-icon-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                    | <div style='text-align:center;margin:auto;'>Default</div> |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-datepicker-icon](#mbx-datepicker-icon)</div> | <div style='text-align:center;margin:auto;'>/</div>       |

DatePicker ATTRIBUTE when [dark](../../global/props.md#dark) mode is `off'<br><br>

### --mbx-datepicker-icon-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                    | <div style='text-align:center;margin:auto;'>Default</div> |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-datepicker-icon](#mbx-datepicker-icon)</div> | <div style='text-align:center;margin:auto;'>/</div>       |

DatePicker ATTRIBUTE when [dark](../../global/props.md#dark) mode is `on'<br><br>

### --mbx-datepicker-icon-hover

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Fallback value for `--mbx-datepicker-icon-hover-light` and `--mbx-datepicker-icon-hover-dark`<br><br>

### --mbx-datepicker-icon-hover-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-datepicker-icon-hover](#mbx-datepicker-icon-hover)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>blue</div><div style='text-align:center;margin-auto;'><div style='background:blue;margin:auto; width:15px; height:15px;'/></div></div></div> |

DatePicker ATTRIBUTE when [dark](../../global/props.md#dark) mode is `off', on 'hover'<br><br>

### --mbx-datepicker-icon-hover-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-datepicker-icon-hover](#mbx-datepicker-icon-hover)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>orange</div><div style='text-align:center;margin-auto;'><div style='background:orange;margin:auto; width:15px; height:15px;'/></div></div></div> |

DatePicker ATTRIBUTE when [dark](../../global/props.md#dark) mode is `on', on 'hover'<br><br>

### --mbx-datepicker-calendar-background

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Fallback value for `and`<br><br>

### --mbx-datepicker-calendar-background-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                  | <div style='text-align:center;margin:auto;'>Default</div> |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-datepicker-calendar-background](#mbx-datepicker-calendar-background)</div> | <div style='text-align:center;margin:auto;'>/</div>       |

DatePicker Calendar ATTRIBUTE when [dark](../../global/props.md#dark) mode is `off'<br><br>

### --mbx-datepicker-calendar-background-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                  | <div style='text-align:center;margin:auto;'>Default</div> |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-datepicker-calendar-background](#mbx-datepicker-calendar-background)</div> | <div style='text-align:center;margin:auto;'>/</div>       |

DatePicker Calendar ATTRIBUTE when [dark](../../global/props.md#dark) mode is `on'<br><br>

### --mbx-datepicker-calendar-text-color

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Fallback value for `and`<br><br>

### --mbx-datepicker-calendar-text-color-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                  | <div style='text-align:center;margin:auto;'>Default</div> |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-datepicker-calendar-text-color](#mbx-datepicker-calendar-text-color)</div> | <div style='text-align:center;margin:auto;'>/</div>       |

DatePicker Calendar ATTRIBUTE when [dark](../../global/props.md#dark) mode is `off'<br><br>

### --mbx-datepicker-calendar-text-color-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                  | <div style='text-align:center;margin:auto;'>Default</div> |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-datepicker-calendar-text-color](#mbx-datepicker-calendar-text-color)</div> | <div style='text-align:center;margin:auto;'>/</div>       |

DatePicker Calendar ATTRIBUTE when [dark](../../global/props.md#dark) mode is `on'<br><br>

### --mbx-datepicker-calendar-background-hover

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Fallback value for `and`<br><br>

### --mbx-datepicker-calendar-background-hover-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                              | <div style='text-align:center;margin:auto;'>Default</div> |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-datepicker-calendar-background-hover](#mbx-datepicker-calendar-background-hover)</div> | <div style='text-align:center;margin:auto;'>/</div>       |

DatePicker Calendar ATTRIBUTE when [dark](../../global/props.md#dark) mode is `off', on 'hover'<br><br>

### --mbx-datepicker-calendar-background-hover-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                              | <div style='text-align:center;margin:auto;'>Default</div> |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-datepicker-calendar-background-hover](#mbx-datepicker-calendar-background-hover)</div> | <div style='text-align:center;margin:auto;'>/</div>       |

DatePicker Calendar ATTRIBUTE when [dark](../../global/props.md#dark) mode is `on', on 'hover'<br><br>

### --mbx-datepicker-calendar-text-color-hover

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Fallback value for `and`<br><br>

### --mbx-datepicker-calendar-text-color-hover-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                              | <div style='text-align:center;margin:auto;'>Default</div> |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-datepicker-calendar-text-color-hover](#mbx-datepicker-calendar-text-color-hover)</div> | <div style='text-align:center;margin:auto;'>/</div>       |

DatePicker Calendar ATTRIBUTE when [dark](../../global/props.md#dark) mode is `off', on 'hover'<br><br>

### --mbx-datepicker-calendar-text-color-hover-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                              | <div style='text-align:center;margin:auto;'>Default</div> |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-datepicker-calendar-text-color-hover](#mbx-datepicker-calendar-text-color-hover)</div> | <div style='text-align:center;margin:auto;'>/</div>       |

DatePicker Calendar ATTRIBUTE when [dark](../../global/props.md#dark) mode is `on', on 'hover'<br><br>

### --mbx-datepicker-calendar-arrow

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Fallback value for `and`<br><br>

### --mbx-datepicker-calendar-arrow-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                        | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-datepicker-calendar-arrow](#mbx-datepicker-calendar-arrow)</div> | <div style='text-align:center;margin:auto;'>/</div>       |

DatePicker Calendar ATTRIBUTE when [dark](../../global/props.md#dark) mode is `off'<br><br>

### --mbx-datepicker-calendar-arrow-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                        | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-datepicker-calendar-arrow](#mbx-datepicker-calendar-arrow)</div> | <div style='text-align:center;margin:auto;'>/</div>       |

DatePicker Calendar ATTRIBUTE when [dark](../../global/props.md#dark) mode is `on'<br><br>

### --mbx-datepicker-calendar-arrow-hover

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Fallback value for `--mbx-datepicker-calendar-arrow-hover-light` and `--mbx-datepicker-calendar-arrow-hover-dark`<br><br>

### --mbx-datepicker-calendar-arrow-hover-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                    | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-datepicker-calendar-arrow-hover](#mbx-datepicker-calendar-arrow-hover)</div> | <div style='text-align:center;margin:auto;'>/</div>       |

DatePicker Calendar ATTRIBUTE when [dark](../../global/props.md#dark) mode is `off', on 'hover'<br><br>

### --mbx-datepicker-calendar-arrow-hover-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                    | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-datepicker-calendar-arrow-hover](#mbx-datepicker-calendar-arrow-hover)</div> | <div style='text-align:center;margin:auto;'>/</div>       |

DatePicker Calendar ATTRIBUTE when [dark](../../global/props.md#dark) mode is `on', on 'hover'<br><br>

### --mbx-datepicker-calendar-selected-background

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Fallback value for `--mbx-datepicker-calendar-selected-background-light` and `--mbx-datepicker-calendar-selected-background-dark`<br><br>

### --mbx-datepicker-calendar-selected-background-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                                    | <div style='text-align:center;margin:auto;'>Default</div> |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-datepicker-calendar-selected-background](#mbx-datepicker-calendar-selected-background)</div> | <div style='text-align:center;margin:auto;'>/</div>       |

DatePicker Calendar selected cell ATTRIBUTE when [dark](../../global/props.md#dark) mode is `off'<br><br>

### --mbx-datepicker-calendar-selected-background-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                                    | <div style='text-align:center;margin:auto;'>Default</div> |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-datepicker-calendar-selected-background](#mbx-datepicker-calendar-selected-background)</div> | <div style='text-align:center;margin:auto;'>/</div>       |

DatePicker Calendar selected cell ATTRIBUTE when [dark](../../global/props.md#dark) mode is `on'<br><br>

### --mbx-datepicker-calendar-selected-text-color

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Fallback value for `--mbx-datepicker-calendar-selected-text-color-light` and `--mbx-datepicker-calendar-selected-text-color-dark`<br><br>

### --mbx-datepicker-calendar-selected-text-color-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                                    | <div style='text-align:center;margin:auto;'>Default</div> |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-datepicker-calendar-selected-text-color](#mbx-datepicker-calendar-selected-text-color)</div> | <div style='text-align:center;margin:auto;'>/</div>       |

DatePicker Calendar selected cell ATTRIBUTE when [dark](../../global/props.md#dark) mode is `off'<br><br>

### --mbx-datepicker-calendar-selected-text-color-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                                    | <div style='text-align:center;margin:auto;'>Default</div> |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-datepicker-calendar-selected-text-color](#mbx-datepicker-calendar-selected-text-color)</div> | <div style='text-align:center;margin:auto;'>/</div>       |

DatePicker Calendar selected cell ATTRIBUTE when [dark](../../global/props.md#dark) mode is `on'<br><br>

### --mbx-datepicker-calendar-today-color

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Fallback value for `and`<br><br>

### --mbx-datepicker-calendar-today-color-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                    | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-datepicker-calendar-today-color](#mbx-datepicker-calendar-today-color)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>red</div><div style='text-align:center;margin-auto;'><div style='background:red;margin:auto; width:15px; height:15px;'/></div></div></div> |

DatePicker Calendar today color when [dark](../../global/props.md#dark) mode is `off'<br><br>

### --mbx-datepicker-calendar-today-color-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                    | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[mbx-datepicker-calendar-today-color](#mbx-datepicker-calendar-today-color)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>red</div><div style='text-align:center;margin-auto;'><div style='background:red;margin:auto; width:15px; height:15px;'/></div></div></div> |

DatePicker Calendar today color when [dark](../../global/props.md#dark) mode is `on'<br><br>
