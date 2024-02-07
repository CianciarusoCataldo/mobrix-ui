# DatePicker CSS variables

## Summary

- [CSS Variables table](#css-variables-table)
- [CSS Variables list](#css-variables-list)

<br>

## CSS Variables table

<br>

| <div style='text-align:center;margin:auto;'>Prop</div>                                                                                                       | <div style='text-align:center;margin:auto;'>Fallback</div>                                                                                        | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-background](#-mbx-datepicker-background)</div>                                                 | <div style='text-align:center;margin:auto;'>/</div>                                                                                               | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-background-light](#-mbx-datepicker-background-light)</div>                                     | <div style='text-align:center;margin:auto;'>[--mbx-datepicker-background](#--mbx-datepicker-background)</div>                                     | <div style='text-align:center;margin:auto;'>[--mbx-background-light](../../global/css-vars.md#-mbx-background-light)</div>                                                                                                                    |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-background-dark](#-mbx-datepicker-background-dark)</div>                                       | <div style='text-align:center;margin:auto;'>[--mbx-datepicker-background](#--mbx-datepicker-background)</div>                                     | <div style='text-align:center;margin:auto;'>[--mbx-background-dark](../../global/css-vars.md#-mbx-background-dark)</div>                                                                                                                      |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-text-color](#-mbx-datepicker-text-color)</div>                                                 | <div style='text-align:center;margin:auto;'>/</div>                                                                                               | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-text-color-light](#-mbx-datepicker-text-color-light)</div>                                     | <div style='text-align:center;margin:auto;'>[--mbx-datepicker-text-color](#--mbx-datepicker-text-color)</div>                                     | <div style='text-align:center;margin:auto;'>[--mbx-text-color-light](../../global/css-vars.md#-mbx-text-color-light)</div>                                                                                                                    |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-text-color-dark](#-mbx-datepicker-text-color-dark)</div>                                       | <div style='text-align:center;margin:auto;'>[--mbx-datepicker-text-color](#--mbx-datepicker-text-color)</div>                                     | <div style='text-align:center;margin:auto;'>[--mbx-text-color-dark](../../global/css-vars.md#-mbx-text-color-dark)</div>                                                                                                                      |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-icon](#-mbx-datepicker-icon)</div>                                                             | <div style='text-align:center;margin:auto;'>/</div>                                                                                               | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-icon-light](#-mbx-datepicker-icon-light)</div>                                                 | <div style='text-align:center;margin:auto;'>[--mbx-datepicker-icon](#--mbx-datepicker-icon)</div>                                                 | <div style='text-align:center;margin:auto;'>[--mbx-datepicker-text-color-light](#--mbx-datepicker-text-color-light)</div>                                                                                                                     |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-icon-dark](#-mbx-datepicker-icon-dark)</div>                                                   | <div style='text-align:center;margin:auto;'>[--mbx-datepicker-icon](#--mbx-datepicker-icon)</div>                                                 | <div style='text-align:center;margin:auto;'>[--mbx-datepicker-text-color-dark](#--mbx-datepicker-text-color-dark)</div>                                                                                                                       |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-icon-hover](#-mbx-datepicker-icon-hover)</div>                                                 | <div style='text-align:center;margin:auto;'>/</div>                                                                                               | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-icon-hover-light](#-mbx-datepicker-icon-hover-light)</div>                                     | <div style='text-align:center;margin:auto;'>[--mbx-datepicker-icon-hover](#--mbx-datepicker-icon-hover)</div>                                     | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>blue</div><div style='text-align:center;margin-auto;'><div style='background:blue;margin:auto; width:15px; height:15px;'/></div></div></div>     |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-icon-hover-dark](#-mbx-datepicker-icon-hover-dark)</div>                                       | <div style='text-align:center;margin:auto;'>[--mbx-datepicker-icon-hover](#--mbx-datepicker-icon-hover)</div>                                     | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>orange</div><div style='text-align:center;margin-auto;'><div style='background:orange;margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-background](#-mbx-datepicker-calendar-background)</div>                               | <div style='text-align:center;margin:auto;'>/</div>                                                                                               | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-background-light](#-mbx-datepicker-calendar-background-light)</div>                   | <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-background](#--mbx-datepicker-calendar-background)</div>                   | <div style='text-align:center;margin:auto;'>[--mbx-calendar-background-light](../../organisms/Calendar/css-vars.md#-mbx-calendar-background-light)</div>                                                                                      |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-background-dark](#-mbx-datepicker-calendar-background-dark)</div>                     | <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-background](#--mbx-datepicker-calendar-background)</div>                   | <div style='text-align:center;margin:auto;'>[--mbx-calendar-background-dark](../../organisms/Calendar/css-vars.md#-mbx-calendar-background-dark)</div>                                                                                        |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-text-color](#-mbx-datepicker-calendar-text-color)</div>                               | <div style='text-align:center;margin:auto;'>/</div>                                                                                               | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-text-color-light](#-mbx-datepicker-calendar-text-color-light)</div>                   | <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-text-color](#--mbx-datepicker-calendar-text-color)</div>                   | <div style='text-align:center;margin:auto;'>[--mbx-calendar-text-color-light](../../organisms/Calendar/css-vars.md#-mbx-calendar-text-color-light)</div>                                                                                      |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-text-color-dark](#-mbx-datepicker-calendar-text-color-dark)</div>                     | <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-text-color](#--mbx-datepicker-calendar-text-color)</div>                   | <div style='text-align:center;margin:auto;'>[--mbx-calendar-text-color-dark](../../organisms/Calendar/css-vars.md#-mbx-calendar-text-color-dark)</div>                                                                                        |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-background-hover](#-mbx-datepicker-calendar-background-hover)</div>                   | <div style='text-align:center;margin:auto;'>/</div>                                                                                               | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-background-hover-light](#-mbx-datepicker-calendar-background-hover-light)</div>       | <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-background-hover](#--mbx-datepicker-calendar-background-hover)</div>       | <div style='text-align:center;margin:auto;'>[--mbx-calendar-background-hover-light](../../organisms/Calendar/css-vars.md#-mbx-calendar-background-hover-light)</div>                                                                          |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-background-hover-dark](#-mbx-datepicker-calendar-background-hover-dark)</div>         | <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-background-hover](#--mbx-datepicker-calendar-background-hover)</div>       | <div style='text-align:center;margin:auto;'>[--mbx-calendar-background-hover-dark](../../organisms/Calendar/css-vars.md#-mbx-calendar-background-hover-dark)</div>                                                                            |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-text-color-hover](#-mbx-datepicker-calendar-text-color-hover)</div>                   | <div style='text-align:center;margin:auto;'>/</div>                                                                                               | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-text-color-hover-light](#-mbx-datepicker-calendar-text-color-hover-light)</div>       | <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-text-color-hover](#--mbx-datepicker-calendar-text-color-hover)</div>       | <div style='text-align:center;margin:auto;'>[--mbx-calendar-text-color-hover-light](../../organisms/Calendar/css-vars.md#-mbx-calendar-text-color-hover-light)</div>                                                                          |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-text-color-hover-dark](#-mbx-datepicker-calendar-text-color-hover-dark)</div>         | <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-text-color-hover](#--mbx-datepicker-calendar-text-color-hover)</div>       | <div style='text-align:center;margin:auto;'>[--mbx-calendar-text-color-hover-dark](../../organisms/Calendar/css-vars.md#-mbx-calendar-text-color-hover-dark)</div>                                                                            |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-arrow](#-mbx-datepicker-calendar-arrow)</div>                                         | <div style='text-align:center;margin:auto;'>/</div>                                                                                               | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-arrow-light](#-mbx-datepicker-calendar-arrow-light)</div>                             | <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-arrow](#--mbx-datepicker-calendar-arrow)</div>                             | <div style='text-align:center;margin:auto;'>[--mbx-calendar-arrow-light](../../organisms/Calendar/css-vars.md#-mbx-calendar-arrow-light)</div>                                                                                                |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-arrow-dark](#-mbx-datepicker-calendar-arrow-dark)</div>                               | <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-arrow](#--mbx-datepicker-calendar-arrow)</div>                             | <div style='text-align:center;margin:auto;'>[--mbx-calendar-arrow-dark](../../organisms/Calendar/css-vars.md#-mbx-calendar-arrow-dark)</div>                                                                                                  |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-arrow-hover](#-mbx-datepicker-calendar-arrow-hover)</div>                             | <div style='text-align:center;margin:auto;'>/</div>                                                                                               | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-arrow-hover-light](#-mbx-datepicker-calendar-arrow-hover-light)</div>                 | <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-arrow-hover](#--mbx-datepicker-calendar-arrow-hover)</div>                 | <div style='text-align:center;margin:auto;'>[--mbx-calendar-arrow-hover-light](../../organisms/Calendar/css-vars.md#-mbx-calendar-arrow-hover-light)</div>                                                                                    |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-arrow-hover-dark](#-mbx-datepicker-calendar-arrow-hover-dark)</div>                   | <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-arrow-hover](#--mbx-datepicker-calendar-arrow-hover)</div>                 | <div style='text-align:center;margin:auto;'>[--mbx-calendar-arrow-hover-dark](../../organisms/Calendar/css-vars.md#-mbx-calendar-arrow-hover-dark)</div>                                                                                      |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-selected-background](#-mbx-datepicker-calendar-selected-background)</div>             | <div style='text-align:center;margin:auto;'>/</div>                                                                                               | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-selected-background-light](#-mbx-datepicker-calendar-selected-background-light)</div> | <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-selected-background](#--mbx-datepicker-calendar-selected-background)</div> | <div style='text-align:center;margin:auto;'>[--mbx-calendar-selected-background-light](../../organisms/Calendar/css-vars.md#-mbx-calendar-selected-background-light)</div>                                                                    |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-selected-background-dark](#-mbx-datepicker-calendar-selected-background-dark)</div>   | <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-selected-background](#--mbx-datepicker-calendar-selected-background)</div> | <div style='text-align:center;margin:auto;'>[--mbx-calendar-selected-background-dark](../../organisms/Calendar/css-vars.md#-mbx-calendar-selected-background-dark)</div>                                                                      |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-selected-text-color](#-mbx-datepicker-calendar-selected-text-color)</div>             | <div style='text-align:center;margin:auto;'>/</div>                                                                                               | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-selected-text-color-light](#-mbx-datepicker-calendar-selected-text-color-light)</div> | <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-selected-text-color](#--mbx-datepicker-calendar-selected-text-color)</div> | <div style='text-align:center;margin:auto;'>[--mbx-calendar-selected-text-color-light](../../organisms/Calendar/css-vars.md#-mbx-calendar-selected-text-color-light)</div>                                                                    |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-selected-text-color-dark](#-mbx-datepicker-calendar-selected-text-color-dark)</div>   | <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-selected-text-color](#--mbx-datepicker-calendar-selected-text-color)</div> | <div style='text-align:center;margin:auto;'>[--mbx-calendar-selected-text-color-dark](../../organisms/Calendar/css-vars.md#-mbx-calendar-selected-text-color-dark)</div>                                                                      |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-today-color](#-mbx-datepicker-calendar-today-color)</div>                             | <div style='text-align:center;margin:auto;'>/</div>                                                                                               | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-today-color-light](#-mbx-datepicker-calendar-today-color-light)</div>                 | <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-today-color](#--mbx-datepicker-calendar-today-color)</div>                 | <div style='text-align:center;margin:auto;'>[--mbx-calendar-today-color-light](../../organisms/Calendar/css-vars.md#-mbx-calendar-today-color-light)</div>                                                                                    |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-today-color-dark](#-mbx-datepicker-calendar-today-color-dark)</div>                   | <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-today-color](#--mbx-datepicker-calendar-today-color)</div>                 | <div style='text-align:center;margin:auto;'>[--mbx-calendar-today-color-dark](../../organisms/Calendar/css-vars.md#-mbx-calendar-today-color-dark)</div>                                                                                      |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-modal-background](#-mbx-datepicker-modal-background)</div>                                     | <div style='text-align:center;margin:auto;'>/</div>                                                                                               | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-modal-background-light](#-mbx-datepicker-modal-background-light)</div>                         | <div style='text-align:center;margin:auto;'>[--mbx-datepicker-modal-background](#--mbx-datepicker-modal-background)</div>                         | <div style='text-align:center;margin:auto;'>[--mbx-modal-background-light](../../molecules/Modal/css-vars.md#-mbx-modal-background-light)</div>                                                                                               |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-modal-background-dark](#-mbx-datepicker-modal-background-dark)</div>                           | <div style='text-align:center;margin:auto;'>[--mbx-datepicker-modal-background](#--mbx-datepicker-modal-background)</div>                         | <div style='text-align:center;margin:auto;'>[--mbx-modal-background-dark](../../molecules/Modal/css-vars.md#-mbx-modal-background-dark)</div>                                                                                                 |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-modal-x-color](#-mbx-datepicker-modal-x-color)</div>                                           | <div style='text-align:center;margin:auto;'>/</div>                                                                                               | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-modal-x-color-light](#-mbx-datepicker-modal-x-color-light)</div>                               | <div style='text-align:center;margin:auto;'>[--mbx-datepicker-modal-x-color](#--mbx-datepicker-modal-x-color)</div>                               | <div style='text-align:center;margin:auto;'>[--mbx-modal-x-color-light](../../molecules/Modal/css-vars.md#-mbx-modal-x-color-light)</div>                                                                                                     |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-modal-x-color-dark](#-mbx-datepicker-modal-x-color-dark)</div>                                 | <div style='text-align:center;margin:auto;'>[--mbx-datepicker-modal-x-color](#--mbx-datepicker-modal-x-color)</div>                               | <div style='text-align:center;margin:auto;'>[--mbx-modal-x-color-dark](../../molecules/Modal/css-vars.md#-mbx-modal-x-color-dark)</div>                                                                                                       |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-modal-x-color-hover](#-mbx-datepicker-modal-x-color-hover)</div>                               | <div style='text-align:center;margin:auto;'>/</div>                                                                                               | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-modal-x-color-hover-light](#-mbx-datepicker-modal-x-color-hover-light)</div>                   | <div style='text-align:center;margin:auto;'>[--mbx-datepicker-modal-x-color-hover](#--mbx-datepicker-modal-x-color-hover)</div>                   | <div style='text-align:center;margin:auto;'>[--mbx-modal-x-color-hover-light](../../molecules/Modal/css-vars.md#-mbx-modal-x-color-hover-light)</div>                                                                                         |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-modal-x-color-hover-dark](#-mbx-datepicker-modal-x-color-hover-dark)</div>                     | <div style='text-align:center;margin:auto;'>[--mbx-datepicker-modal-x-color-hover](#--mbx-datepicker-modal-x-color-hover)</div>                   | <div style='text-align:center;margin:auto;'>[--mbx-modal-x-color-hover-dark](../../molecules/Modal/css-vars.md#-mbx-modal-x-color-hover-dark)</div>                                                                                           |

## CSS Variables list

<br>

### --mbx-datepicker-background

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Fallback value for `--mbx-datepicker-background-light` and `--mbx-datepicker-background-dark`<br><br>

### --mbx-datepicker-background-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                    | <div style='text-align:center;margin:auto;'>Default</div>                                                                  |
| ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-background](#--mbx-datepicker-background)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-light](../../global/css-vars.md#-mbx-background-light)</div> |

DatePicker background when [dark](../../global/props.md#dark) mode is `off'<br><br>

### --mbx-datepicker-background-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                    | <div style='text-align:center;margin:auto;'>Default</div>                                                                |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-background](#--mbx-datepicker-background)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-dark](../../global/css-vars.md#-mbx-background-dark)</div> |

DatePicker background when [dark](../../global/props.md#dark) mode is `on'<br><br>

### --mbx-datepicker-text-color

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Fallback value for `--mbx-datepicker-text-color-light` and `--mbx-datepicker-text-color-dark`<br><br>

### --mbx-datepicker-text-color-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                    | <div style='text-align:center;margin:auto;'>Default</div>                                                                  |
| ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-text-color](#--mbx-datepicker-text-color)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-color-light](../../global/css-vars.md#-mbx-text-color-light)</div> |

DatePicker text color when [dark](../../global/props.md#dark) mode is `off'<br><br>

### --mbx-datepicker-text-color-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                    | <div style='text-align:center;margin:auto;'>Default</div>                                                                |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-text-color](#--mbx-datepicker-text-color)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-color-dark](../../global/css-vars.md#-mbx-text-color-dark)</div> |

DatePicker text color when [dark](../../global/props.md#dark) mode is `on'<br><br>

### --mbx-datepicker-icon

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Fallback value for `--mbx-datepicker-icon-light` and `--mbx-datepicker-icon-dark`<br><br>

### --mbx-datepicker-icon-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                        | <div style='text-align:center;margin:auto;'>Default</div>                                                                 |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-icon](#--mbx-datepicker-icon)</div> | <div style='text-align:center;margin:auto;'>[--mbx-datepicker-text-color-light](#--mbx-datepicker-text-color-light)</div> |

DatePicker calendar icon color when [dark](../../global/props.md#dark) mode is `off'<br><br>

### --mbx-datepicker-icon-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                        | <div style='text-align:center;margin:auto;'>Default</div>                                                               |
| ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-icon](#--mbx-datepicker-icon)</div> | <div style='text-align:center;margin:auto;'>[--mbx-datepicker-text-color-dark](#--mbx-datepicker-text-color-dark)</div> |

DatePicker calendar icon color when [dark](../../global/props.md#dark) mode is `on'<br><br>

### --mbx-datepicker-icon-hover

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Fallback value for `--mbx-datepicker-icon-hover-light` and `--mbx-datepicker-icon-hover-dark`<br><br>

### --mbx-datepicker-icon-hover-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                    | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-icon-hover](#--mbx-datepicker-icon-hover)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>blue</div><div style='text-align:center;margin-auto;'><div style='background:blue;margin:auto; width:15px; height:15px;'/></div></div></div> |

DatePicker calendar icon color when [dark](../../global/props.md#dark) mode is `off', on 'hover'<br><br>

### --mbx-datepicker-icon-hover-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                    | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-icon-hover](#--mbx-datepicker-icon-hover)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>orange</div><div style='text-align:center;margin-auto;'><div style='background:orange;margin:auto; width:15px; height:15px;'/></div></div></div> |

DatePicker calendar icon color when [dark](../../global/props.md#dark) mode is `on', on 'hover'<br><br>

### --mbx-datepicker-calendar-background

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Extended from [Calendar](../../organisms/Calendar/index.md) - Fallback value for `--mbx-datepicker-calendar-background-light` and `--mbx-datepicker-calendar-background-dark`<br><br>

### --mbx-datepicker-calendar-background-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                      | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-background](#--mbx-datepicker-calendar-background)</div> | <div style='text-align:center;margin:auto;'>[--mbx-calendar-background-light](../../organisms/Calendar/css-vars.md#-mbx-calendar-background-light)</div> |

Extended from [Calendar](../../organisms/Calendar/index.md) - Calendar background when [dark](../../global/props.md#dark) mode is `off'<br><br>

### --mbx-datepicker-calendar-background-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                      | <div style='text-align:center;margin:auto;'>Default</div>                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-background](#--mbx-datepicker-calendar-background)</div> | <div style='text-align:center;margin:auto;'>[--mbx-calendar-background-dark](../../organisms/Calendar/css-vars.md#-mbx-calendar-background-dark)</div> |

Extended from [Calendar](../../organisms/Calendar/index.md) - Calendar background when [dark](../../global/props.md#dark) mode is `on'<br><br>

### --mbx-datepicker-calendar-text-color

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Extended from [Calendar](../../organisms/Calendar/index.md) - Fallback value for `--mbx-datepicker-calendar-text-color-light` and `--mbx-datepicker-calendar-text-color-dark`<br><br>

### --mbx-datepicker-calendar-text-color-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                      | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-text-color](#--mbx-datepicker-calendar-text-color)</div> | <div style='text-align:center;margin:auto;'>[--mbx-calendar-text-color-light](../../organisms/Calendar/css-vars.md#-mbx-calendar-text-color-light)</div> |

Extended from [Calendar](../../organisms/Calendar/index.md) - Calendar text color when [dark](../../global/props.md#dark) mode is `off'<br><br>

### --mbx-datepicker-calendar-text-color-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                      | <div style='text-align:center;margin:auto;'>Default</div>                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-text-color](#--mbx-datepicker-calendar-text-color)</div> | <div style='text-align:center;margin:auto;'>[--mbx-calendar-text-color-dark](../../organisms/Calendar/css-vars.md#-mbx-calendar-text-color-dark)</div> |

Extended from [Calendar](../../organisms/Calendar/index.md) - Calendar text color when [dark](../../global/props.md#dark) mode is `on'<br><br>

### --mbx-datepicker-calendar-background-hover

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Extended from [Calendar](../../organisms/Calendar/index.md) - Fallback value for `--mbx-datepicker-calendar-background-hover-light` and `--mbx-datepicker-calendar-background-hover-dark`<br><br>

### --mbx-datepicker-calendar-background-hover-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                                  | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-background-hover](#--mbx-datepicker-calendar-background-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-calendar-background-hover-light](../../organisms/Calendar/css-vars.md#-mbx-calendar-background-hover-light)</div> |

Extended from [Calendar](../../organisms/Calendar/index.md) - Calendar background when [dark](../../global/props.md#dark) mode is `off', on 'hover'<br><br>

### --mbx-datepicker-calendar-background-hover-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                                  | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-background-hover](#--mbx-datepicker-calendar-background-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-calendar-background-hover-dark](../../organisms/Calendar/css-vars.md#-mbx-calendar-background-hover-dark)</div> |

Extended from [Calendar](../../organisms/Calendar/index.md) - Calendar background when [dark](../../global/props.md#dark) mode is `on', on 'hover'<br><br>

### --mbx-datepicker-calendar-text-color-hover

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Extended from [Calendar](../../organisms/Calendar/index.md) - Fallback value for `--mbx-datepicker-calendar-text-color-hover-light` and `--mbx-datepicker-calendar-text-color-hover-dark`<br><br>

### --mbx-datepicker-calendar-text-color-hover-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                                  | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-text-color-hover](#--mbx-datepicker-calendar-text-color-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-calendar-text-color-hover-light](../../organisms/Calendar/css-vars.md#-mbx-calendar-text-color-hover-light)</div> |

Extended from [Calendar](../../organisms/Calendar/index.md) - Calendar text color when [dark](../../global/props.md#dark) mode is `off', on 'hover'<br><br>

### --mbx-datepicker-calendar-text-color-hover-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                                  | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-text-color-hover](#--mbx-datepicker-calendar-text-color-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-calendar-text-color-hover-dark](../../organisms/Calendar/css-vars.md#-mbx-calendar-text-color-hover-dark)</div> |

Extended from [Calendar](../../organisms/Calendar/index.md) - Calendar text color when [dark](../../global/props.md#dark) mode is `on', on 'hover'<br><br>

### --mbx-datepicker-calendar-arrow

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Extended from [Calendar](../../organisms/Calendar/index.md) - Fallback value for `--mbx-datepicker-calendar-arrow-light` and `--mbx-datepicker-calendar-arrow-dark`<br><br>

### --mbx-datepicker-calendar-arrow-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                            | <div style='text-align:center;margin:auto;'>Default</div>                                                                                      |
| --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-arrow](#--mbx-datepicker-calendar-arrow)</div> | <div style='text-align:center;margin:auto;'>[--mbx-calendar-arrow-light](../../organisms/Calendar/css-vars.md#-mbx-calendar-arrow-light)</div> |

Extended from [Calendar](../../organisms/Calendar/index.md) - Calendar arrow color when [dark](../../global/props.md#dark) mode is `off'<br><br>

### --mbx-datepicker-calendar-arrow-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                            | <div style='text-align:center;margin:auto;'>Default</div>                                                                                    |
| --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-arrow](#--mbx-datepicker-calendar-arrow)</div> | <div style='text-align:center;margin:auto;'>[--mbx-calendar-arrow-dark](../../organisms/Calendar/css-vars.md#-mbx-calendar-arrow-dark)</div> |

Extended from [Calendar](../../organisms/Calendar/index.md) - Calendar arrow color when [dark](../../global/props.md#dark) mode is `on'<br><br>

### --mbx-datepicker-calendar-arrow-hover

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Extended from [Calendar](../../organisms/Calendar/index.md) - Fallback value for `--mbx-datepicker-calendar-arrow-hover-light` and `--mbx-datepicker-calendar-arrow-hover-dark`<br><br>

### --mbx-datepicker-calendar-arrow-hover-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                        | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                  |
| --------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-arrow-hover](#--mbx-datepicker-calendar-arrow-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-calendar-arrow-hover-light](../../organisms/Calendar/css-vars.md#-mbx-calendar-arrow-hover-light)</div> |

Extended from [Calendar](../../organisms/Calendar/index.md) - Calendar arrow color when [dark](../../global/props.md#dark) mode is `off', on 'hover'<br><br>

### --mbx-datepicker-calendar-arrow-hover-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                        | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                |
| --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-arrow-hover](#--mbx-datepicker-calendar-arrow-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-calendar-arrow-hover-dark](../../organisms/Calendar/css-vars.md#-mbx-calendar-arrow-hover-dark)</div> |

Extended from [Calendar](../../organisms/Calendar/index.md) - Calendar arrow color when [dark](../../global/props.md#dark) mode is `on', on 'hover'<br><br>

### --mbx-datepicker-calendar-selected-background

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Extended from [Calendar](../../organisms/Calendar/index.md) - Fallback value for `--mbx-datepicker-calendar-selected-background-light` and `--mbx-datepicker-calendar-selected-background-dark`<br><br>

### --mbx-datepicker-calendar-selected-background-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                                        | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-selected-background](#--mbx-datepicker-calendar-selected-background)</div> | <div style='text-align:center;margin:auto;'>[--mbx-calendar-selected-background-light](../../organisms/Calendar/css-vars.md#-mbx-calendar-selected-background-light)</div> |

Extended from [Calendar](../../organisms/Calendar/index.md) - Calendar selected cell background when [dark](../../global/props.md#dark) mode is `off'<br><br>

### --mbx-datepicker-calendar-selected-background-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                                        | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-selected-background](#--mbx-datepicker-calendar-selected-background)</div> | <div style='text-align:center;margin:auto;'>[--mbx-calendar-selected-background-dark](../../organisms/Calendar/css-vars.md#-mbx-calendar-selected-background-dark)</div> |

Extended from [Calendar](../../organisms/Calendar/index.md) - Calendar selected cell background when [dark](../../global/props.md#dark) mode is `on'<br><br>

### --mbx-datepicker-calendar-selected-text-color

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Extended from [Calendar](../../organisms/Calendar/index.md) - Fallback value for `--mbx-datepicker-calendar-selected-text-color-light` and `--mbx-datepicker-calendar-selected-text-color-dark`<br><br>

### --mbx-datepicker-calendar-selected-text-color-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                                        | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-selected-text-color](#--mbx-datepicker-calendar-selected-text-color)</div> | <div style='text-align:center;margin:auto;'>[--mbx-calendar-selected-text-color-light](../../organisms/Calendar/css-vars.md#-mbx-calendar-selected-text-color-light)</div> |

Extended from [Calendar](../../organisms/Calendar/index.md) - Calendar selected cell text color when [dark](../../global/props.md#dark) mode is `off'<br><br>

### --mbx-datepicker-calendar-selected-text-color-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                                        | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-selected-text-color](#--mbx-datepicker-calendar-selected-text-color)</div> | <div style='text-align:center;margin:auto;'>[--mbx-calendar-selected-text-color-dark](../../organisms/Calendar/css-vars.md#-mbx-calendar-selected-text-color-dark)</div> |

Extended from [Calendar](../../organisms/Calendar/index.md) - Calendar selected cell text color when [dark](../../global/props.md#dark) mode is `on'<br><br>

### --mbx-datepicker-calendar-today-color

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Extended from [Calendar](../../organisms/Calendar/index.md) - Fallback value for `--mbx-datepicker-calendar-today-color-light` and `--mbx-datepicker-calendar-today-color-dark`<br><br>

### --mbx-datepicker-calendar-today-color-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                        | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                  |
| --------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-today-color](#--mbx-datepicker-calendar-today-color)</div> | <div style='text-align:center;margin:auto;'>[--mbx-calendar-today-color-light](../../organisms/Calendar/css-vars.md#-mbx-calendar-today-color-light)</div> |

Extended from [Calendar](../../organisms/Calendar/index.md) - Calendar today color when [dark](../../global/props.md#dark) mode is `off'<br><br>

### --mbx-datepicker-calendar-today-color-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                        | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                |
| --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-calendar-today-color](#--mbx-datepicker-calendar-today-color)</div> | <div style='text-align:center;margin:auto;'>[--mbx-calendar-today-color-dark](../../organisms/Calendar/css-vars.md#-mbx-calendar-today-color-dark)</div> |

Extended from [Calendar](../../organisms/Calendar/index.md) - Calendar today color when [dark](../../global/props.md#dark) mode is `on'<br><br>

### --mbx-datepicker-modal-background

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Extended from [Modal](../../molecules/Modal/index.md) - Fallback value for `--mbx-datepicker-modal-background-light` and `--mbx-datepicker-modal-background-dark`<br><br>

### --mbx-datepicker-modal-background-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                | <div style='text-align:center;margin:auto;'>Default</div>                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-modal-background](#--mbx-datepicker-modal-background)</div> | <div style='text-align:center;margin:auto;'>[--mbx-modal-background-light](../../molecules/Modal/css-vars.md#-mbx-modal-background-light)</div> |

Extended from [Modal](../../molecules/Modal/index.md) - Modal background when [dark](../../global/props.md#dark) mode is `off`<br><br>

### --mbx-datepicker-modal-background-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                | <div style='text-align:center;margin:auto;'>Default</div>                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-modal-background](#--mbx-datepicker-modal-background)</div> | <div style='text-align:center;margin:auto;'>[--mbx-modal-background-dark](../../molecules/Modal/css-vars.md#-mbx-modal-background-dark)</div> |

Extended from [Modal](../../molecules/Modal/index.md) - Modal background when [dark](../../global/props.md#dark) mode is `on`<br><br>

### --mbx-datepicker-modal-x-color

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Extended from [Modal](../../molecules/Modal/index.md) - Fallback value for `--mbx-datepicker-modal-x-color-light` and `--mbx-datepicker-modal-x-color-dark`<br><br>

### --mbx-datepicker-modal-x-color-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                          | <div style='text-align:center;margin:auto;'>Default</div>                                                                                 |
| ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-modal-x-color](#--mbx-datepicker-modal-x-color)</div> | <div style='text-align:center;margin:auto;'>[--mbx-modal-x-color-light](../../molecules/Modal/css-vars.md#-mbx-modal-x-color-light)</div> |

Extended from [Modal](../../molecules/Modal/index.md) - Modal x icon color when [dark](../../global/props.md#dark) mode is `off`<br><br>

### --mbx-datepicker-modal-x-color-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                          | <div style='text-align:center;margin:auto;'>Default</div>                                                                               |
| ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-modal-x-color](#--mbx-datepicker-modal-x-color)</div> | <div style='text-align:center;margin:auto;'>[--mbx-modal-x-color-dark](../../molecules/Modal/css-vars.md#-mbx-modal-x-color-dark)</div> |

Extended from [Modal](../../molecules/Modal/index.md) - Modal x icon color when [dark](../../global/props.md#dark) mode is `on`<br><br>

### --mbx-datepicker-modal-x-color-hover

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Extended from [Modal](../../molecules/Modal/index.md) - Fallback value for `--mbx-datepicker-modal-x-color-hover-light` and `--mbx-datepicker-modal-x-color-hover-dark`<br><br>

### --mbx-datepicker-modal-x-color-hover-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                      | <div style='text-align:center;margin:auto;'>Default</div>                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-modal-x-color-hover](#--mbx-datepicker-modal-x-color-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-modal-x-color-hover-light](../../molecules/Modal/css-vars.md#-mbx-modal-x-color-hover-light)</div> |

Extended from [Modal](../../molecules/Modal/index.md) - Modal x icon color when [dark](../../global/props.md#dark) mode is `off`, on `hover`<br><br>

### --mbx-datepicker-modal-x-color-hover-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                      | <div style='text-align:center;margin:auto;'>Default</div>                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-datepicker-modal-x-color-hover](#--mbx-datepicker-modal-x-color-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-modal-x-color-hover-dark](../../molecules/Modal/css-vars.md#-mbx-modal-x-color-hover-dark)</div> |

Extended from [Modal](../../molecules/Modal/index.md) - Modal x icon color when [dark](../../global/props.md#dark) mode is `on`, on `hover`<br><br>
