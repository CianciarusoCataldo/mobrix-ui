# RadioButtonGroup

## Summary

- [CSS Variables table](#css-variables-table)
- [CSS Variables list](#css-variables-list)

<br>

## CSS Variables table

<br>

| <div style='text-align:center;margin:auto;'>Prop</div>                                                                                            | <div style='text-align:center;margin:auto;'>Fallback</div>                                                                            | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-radiogroup-background](#--mbx-radiogroup-background)</div>                                     | <div style='text-align:center;margin:auto;'>/</div>                                                                                   | <div style='text-align:center;margin:auto;'>/</div>                                                                                                            |
| <div style='text-align:center;margin:auto;'>[--mbx-radiogroup-background-light](#--mbx-radiogroup-background-light)</div>                         | <div style='text-align:center;margin:auto;'>[--mbx-radiogroup-background](#--mbx-radiogroup-background)</div>                         | <div style='text-align:center;margin:auto;'>[--mbx-background-light](../../global/css-vars.md#--mbx-background-light)</div>                                    |
| <div style='text-align:center;margin:auto;'>[--mbx-radiogroup-background-dark](#--mbx-radiogroup-background-dark)</div>                           | <div style='text-align:center;margin:auto;'>[--mbx-radiogroup-background](#--mbx-radiogroup-background)</div>                         | <div style='text-align:center;margin:auto;'>[--mbx-background-dark](../../global/css-vars.md#--mbx-background-dark)</div>                                      |
| <div style='text-align:center;margin:auto;'>[--mbx-radiogroup-text-color](#--mbx-radiogroup-text-color)</div>                                     | <div style='text-align:center;margin:auto;'>/</div>                                                                                   | <div style='text-align:center;margin:auto;'>/</div>                                                                                                            |
| <div style='text-align:center;margin:auto;'>[--mbx-radiogroup-text-color-light](#--mbx-radiogroup-text-color-light)</div>                         | <div style='text-align:center;margin:auto;'>[--mbx-radiogroup-text-color](#--mbx-radiogroup-text-color)</div>                         | <div style='text-align:center;margin:auto;'>[--mbx-text-color-light](../../global/css-vars.md#--mbx-text-color-light)</div>                                    |
| <div style='text-align:center;margin:auto;'>[--mbx-radiogroup-text-color-dark](#--mbx-radiogroup-text-color-dark)</div>                           | <div style='text-align:center;margin:auto;'>[--mbx-radiogroup-text-color](#--mbx-radiogroup-text-color)</div>                         | <div style='text-align:center;margin:auto;'>[--mbx-text-color-dark](../../global/css-vars.md#--mbx-text-color-dark)</div>                                      |
| <div style='text-align:center;margin:auto;'>[--mbx-radiogroup-radio-background](#--mbx-radiogroup-radio-background)</div>                         | <div style='text-align:center;margin:auto;'>/</div>                                                                                   | <div style='text-align:center;margin:auto;'>/</div>                                                                                                            |
| <div style='text-align:center;margin:auto;'>[--mbx-radiogroup-radio-background-light](#--mbx-radiogroup-radio-background-light)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-radiogroup-radio-background](#--mbx-radiogroup-radio-background)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-radio-background-light](../../atoms/RadioButton/css-vars.md#--mbx-radio-background-light)</div>             |
| <div style='text-align:center;margin:auto;'>[--mbx-radiogroup-radio-background-dark](#--mbx-radiogroup-radio-background-dark)</div>               | <div style='text-align:center;margin:auto;'>[--mbx-radiogroup-radio-background](#--mbx-radiogroup-radio-background)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-radio-background-dark](../../atoms/RadioButton/css-vars.md#--mbx-radio-background-dark)</div>               |
| <div style='text-align:center;margin:auto;'>[--mbx-radiogroup-radio-background-hover](#--mbx-radiogroup-radio-background-hover)</div>             | <div style='text-align:center;margin:auto;'>/</div>                                                                                   | <div style='text-align:center;margin:auto;'>/</div>                                                                                                            |
| <div style='text-align:center;margin:auto;'>[--mbx-radiogroup-radio-background-hover-light](#--mbx-radiogroup-radio-background-hover-light)</div> | <div style='text-align:center;margin:auto;'>[--mbx-radiogroup-radio-background-hover](#--mbx-radiogroup-radio-background-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-radio-background-hover-light](../../atoms/RadioButton/css-vars.md#--mbx-radio-background-hover-light)</div> |
| <div style='text-align:center;margin:auto;'>[--mbx-radiogroup-radio-background-hover-dark](#--mbx-radiogroup-radio-background-hover-dark)</div>   | <div style='text-align:center;margin:auto;'>[--mbx-radiogroup-radio-background-hover](#--mbx-radiogroup-radio-background-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-radio-background-hover-dark](../../atoms/RadioButton/css-vars.md#--mbx-radio-background-hover-dark)</div>   |
| <div style='text-align:center;margin:auto;'>[--mbx-radiogroup-radio-icon-background](#--mbx-radiogroup-radio-icon-background)</div>               | <div style='text-align:center;margin:auto;'>/</div>                                                                                   | <div style='text-align:center;margin:auto;'>/</div>                                                                                                            |
| <div style='text-align:center;margin:auto;'>[--mbx-radiogroup-radio-icon-background-light](#--mbx-radiogroup-radio-icon-background-light)</div>   | <div style='text-align:center;margin:auto;'>[--mbx-radiogroup-radio-icon-background](#--mbx-radiogroup-radio-icon-background)</div>   | <div style='text-align:center;margin:auto;'>[--mbx-radio-icon-background-light](../../atoms/RadioButton/css-vars.md#--mbx-radio-icon-background-light)</div>   |
| <div style='text-align:center;margin:auto;'>[--mbx-radiogroup-radio-icon-background-dark](#--mbx-radiogroup-radio-icon-background-dark)</div>     | <div style='text-align:center;margin:auto;'>[--mbx-radiogroup-radio-icon-background](#--mbx-radiogroup-radio-icon-background)</div>   | <div style='text-align:center;margin:auto;'>[--mbx-radio-icon-background-dark](../../atoms/RadioButton/css-vars.md#--mbx-radio-icon-background-dark)</div>     |

## CSS Variables list

<br>

### --mbx-radiogroup-background

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Fallback value for `--mbx-radiogroup-background-light` and `--mbx-radiogroup-background-dark`<br><br>

### --mbx-radiogroup-background-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                    | <div style='text-align:center;margin:auto;'>Default</div>                                                                   |
| ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-radiogroup-background](#--mbx-radiogroup-background)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-light](../../global/css-vars.md#--mbx-background-light)</div> |

RadioGroup background when [dark](../../global/props.md#dark) mode is `off`<br><br>

### --mbx-radiogroup-background-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                    | <div style='text-align:center;margin:auto;'>Default</div>                                                                 |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-radiogroup-background](#--mbx-radiogroup-background)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-dark](../../global/css-vars.md#--mbx-background-dark)</div> |

RadioGroup background when [dark](../../global/props.md#dark) mode is `on`<br><br>

### --mbx-radiogroup-text-color

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Fallback value for `--mbx-radiogroup-text-color-light` and `--mbx-radiogroup-text-color-dark`<br><br>

### --mbx-radiogroup-text-color-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                    | <div style='text-align:center;margin:auto;'>Default</div>                                                                   |
| ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-radiogroup-text-color](#--mbx-radiogroup-text-color)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-color-light](../../global/css-vars.md#--mbx-text-color-light)</div> |

RadioGroup text color when [dark](../../global/props.md#dark) mode is `off`<br><br>

### --mbx-radiogroup-text-color-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                    | <div style='text-align:center;margin:auto;'>Default</div>                                                                 |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-radiogroup-text-color](#--mbx-radiogroup-text-color)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-color-dark](../../global/css-vars.md#--mbx-text-color-dark)</div> |

RadioGroup text color when [dark](../../global/props.md#dark) mode is `on`<br><br>

### --mbx-radiogroup-radio-background

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Fallback value for `mbx-radiogroup-radio-background-light` and `mbx-radiogroup-radio-background-dark`<br><br>

### --mbx-radiogroup-radio-background-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                | <div style='text-align:center;margin:auto;'>Default</div>                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-radiogroup-radio-background](#--mbx-radiogroup-radio-background)</div> | <div style='text-align:center;margin:auto;'>[--mbx-radio-background-light](../../atoms/RadioButton/css-vars.md#--mbx-radio-background-light)</div> |

Internal RadioButton background when [dark](../../global/props.md#dark) mode is off<br><br>

### --mbx-radiogroup-radio-background-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                | <div style='text-align:center;margin:auto;'>Default</div>                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| <div style='text-align:center;margin:auto;'>[--mbx-radiogroup-radio-background](#--mbx-radiogroup-radio-background)</div> | <div style='text-align:center;margin:auto;'>[--mbx-radio-background-dark](../../atoms/RadioButton/css-vars.md#--mbx-radio-background-dark)</div> |

Internal RadioButton background when [dark](../../global/props.md#dark) mode is on<br><br>

### --mbx-radiogroup-radio-background-hover

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Fallback value for `mbx-radiogroup-radio-background-hover-light` and `mbx-radiogroup-radio-background-hover-dark`<br><br>

### --mbx-radiogroup-radio-background-hover-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                            | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-radiogroup-radio-background-hover](#--mbx-radiogroup-radio-background-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-radio-background-hover-light](../../atoms/RadioButton/css-vars.md#--mbx-radio-background-hover-light)</div> |

Internal RadioButton background when [dark](../../global/props.md#dark) mode is off, on hover<br><br>

### --mbx-radiogroup-radio-background-hover-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                            | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <div style='text-align:center;margin:auto;'>[--mbx-radiogroup-radio-background-hover](#--mbx-radiogroup-radio-background-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-radio-background-hover-dark](../../atoms/RadioButton/css-vars.md#--mbx-radio-background-hover-dark)</div> |

Internal RadioButton background when [dark](../../global/props.md#dark) mode is on, on hover<br><br>

### --mbx-radiogroup-radio-icon-background

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

Fallback value for `mbx-radiogroup-radio-icon-background-light` and `mbx-radiogroup-radio-icon-background-dark`<br><br>

### --mbx-radiogroup-radio-icon-background-light

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                          | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                    |
| ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <div style='text-align:center;margin:auto;'>[--mbx-radiogroup-radio-icon-background](#--mbx-radiogroup-radio-icon-background)</div> | <div style='text-align:center;margin:auto;'>[--mbx-radio-icon-background-light](../../atoms/RadioButton/css-vars.md#--mbx-radio-icon-background-light)</div> |

Internal RadioButton icon background when [dark](../../global/props.md#dark) mode is off<br><br>

### --mbx-radiogroup-radio-icon-background-dark

<br>

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                                          | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-radiogroup-radio-icon-background](#--mbx-radiogroup-radio-icon-background)</div> | <div style='text-align:center;margin:auto;'>[--mbx-radio-icon-background-dark](../../atoms/RadioButton/css-vars.md#--mbx-radio-icon-background-dark)</div> |

Internal RadioButton icon background when [dark](../../global/props.md#dark) mode is on<br><br>