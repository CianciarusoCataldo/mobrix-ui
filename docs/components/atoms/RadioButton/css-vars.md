# [RadioButton](index.md) CSS variables

## Summary

- [CSS Variables table](#css-variables-table)
- [CSS Variables list](#css-variables-list)

<br>

## CSS Variables table

<br>

| <div style='text-align:center;margin:auto;'>Css variable</div>                                                             | <div style='text-align:center;margin:auto;'>Fallback</div>                                                     | <div style='text-align:center;margin:auto;'>Default</div>                                                                           |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-radio-background](#-mbx-radio-background)</div>                         | <div style='text-align:center;margin:auto;'>/</div>                                                            | <div style='text-align:center;margin:auto;'>/</div>                                                                                 |
| <div style='text-align:center;margin:auto;'>[--mbx-radio-background-light](#-mbx-radio-background-light)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-radio-background](#-mbx-radio-background)</div>             | <div style='text-align:center;margin:auto;'>radial-gradient(#f1f1f1 20%, #e4e4e4 30%, #bebebe 55%, #f0f0f0 20%)</div>               |
| <div style='text-align:center;margin:auto;'>[--mbx-radio-background-dark](#-mbx-radio-background-dark)</div>               | <div style='text-align:center;margin:auto;'>[--mbx-radio-background](#-mbx-radio-background)</div>             | <div style='text-align:center;margin:auto;'>radial-gradient(closest-side, #2d3748 20%, #232b38 30%, #1d1f44 55%, #191f29 20%)</div> |
| <div style='text-align:center;margin:auto;'>[--mbx-radio-background-hover](#-mbx-radio-background-hover)</div>             | <div style='text-align:center;margin:auto;'>/</div>                                                            | <div style='text-align:center;margin:auto;'>/</div>                                                                                 |
| <div style='text-align:center;margin:auto;'>[--mbx-radio-background-hover-light](#-mbx-radio-background-hover-light)</div> | <div style='text-align:center;margin:auto;'>[--mbx-radio-background-hover](#-mbx-radio-background-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-radio-background-light](#-mbx-radio-background-light)</div>                      |
| <div style='text-align:center;margin:auto;'>[--mbx-radio-background-hover-dark](#-mbx-radio-background-hover-dark)</div>   | <div style='text-align:center;margin:auto;'>[--mbx-radio-background-hover](#-mbx-radio-background-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-radio-background-dark](#-mbx-radio-background-dark)</div>                        |
| <div style='text-align:center;margin:auto;'>[--mbx-radio-icon-background](#-mbx-radio-icon-background)</div>               | <div style='text-align:center;margin:auto;'>/</div>                                                            | <div style='text-align:center;margin:auto;'>/</div>                                                                                 |
| <div style='text-align:center;margin:auto;'>[--mbx-radio-icon-background-light](#-mbx-radio-icon-background-light)</div>   | <div style='text-align:center;margin:auto;'>[--mbx-radio-icon-background](#-mbx-radio-icon-background)</div>   | <div style='text-align:center;margin:auto;'>radial-gradient(circle at 23px 23px, #2d3748, #191f29)</div>                            |
| <div style='text-align:center;margin:auto;'>[--mbx-radio-icon-background-dark](#-mbx-radio-icon-background-dark)</div>     | <div style='text-align:center;margin:auto;'>[--mbx-radio-icon-background](#-mbx-radio-icon-background)</div>   | <div style='text-align:center;margin:auto;'>radial-gradient(circle at 23px 23px, #dbe0e6, #949494)</div>                            |

## CSS Variables list

<br>

<br>

### --mbx-radio-background

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `mbx-radio-background-light` and `mbx-radio-background-dark`

<br>

<br>

### --mbx-radio-background-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                         | <div style='text-align:center;margin:auto;'>Default</div>                                                             |
| -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-radio-background](#-mbx-radio-background)</div> | <div style='text-align:center;margin:auto;'>radial-gradient(#f1f1f1 20%, #e4e4e4 30%, #bebebe 55%, #f0f0f0 20%)</div> |

<br>

RadioButton background when dark mode is off

<br>

<br>

### --mbx-radio-background-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                         | <div style='text-align:center;margin:auto;'>Default</div>                                                                           |
| -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-radio-background](#-mbx-radio-background)</div> | <div style='text-align:center;margin:auto;'>radial-gradient(closest-side, #2d3748 20%, #232b38 30%, #1d1f44 55%, #191f29 20%)</div> |

<br>

RadioButton background when dark mode is on

<br>

<br>

### --mbx-radio-background-hover

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `mbx-radio-background-hover-light` and `mbx-radio-background-hover-dark`

<br>

<br>

### --mbx-radio-background-hover-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                     | <div style='text-align:center;margin:auto;'>Default</div>                                                      |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-radio-background-hover](#-mbx-radio-background-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-radio-background-light](#-mbx-radio-background-light)</div> |

<br>

RadioButton background when dark mode is off, on hover

<br>

<br>

### --mbx-radio-background-hover-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                     | <div style='text-align:center;margin:auto;'>Default</div>                                                    |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| <div style='text-align:center;margin:auto;'>[--mbx-radio-background-hover](#-mbx-radio-background-hover)</div> | <div style='text-align:center;margin:auto;'>[--mbx-radio-background-dark](#-mbx-radio-background-dark)</div> |

<br>

RadioButton background when dark mode is on, on hover

<br>

<br>

### --mbx-radio-icon-background

| <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div>        | <div style='text-align:center;margin:auto;'>/</div>       |

<br>

Fallback value for `mbx-radio-icon-background-light` and `mbx-radio-icon-background-dark`

<br>

<br>

### --mbx-radio-icon-background-light

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                   | <div style='text-align:center;margin:auto;'>Default</div>                                                |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-radio-icon-background](#-mbx-radio-icon-background)</div> | <div style='text-align:center;margin:auto;'>radial-gradient(circle at 23px 23px, #2d3748, #191f29)</div> |

<br>

RadioButton icon background when dark mode is off

<br>

<br>

### --mbx-radio-icon-background-dark

| <div style='text-align:center;margin:auto;'>Fallback</div>                                                   | <div style='text-align:center;margin:auto;'>Default</div>                                                |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-radio-icon-background](#-mbx-radio-icon-background)</div> | <div style='text-align:center;margin:auto;'>radial-gradient(circle at 23px 23px, #dbe0e6, #949494)</div> |

<br>

RadioButton icon background when dark mode is on

<br>
