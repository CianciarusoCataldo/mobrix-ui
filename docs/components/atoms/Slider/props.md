# Slider

## Summary

- [Props table](#props-table)
- [Props list](#props-list)

<br>

## Props table

<br>

| <div style='text-align:center;margin:auto;'>Parameter</div>             | <div style='text-align:center;margin:auto;'>Type</div>                       | <div style='text-align:center;margin:auto;'>Default</div>  |
| ----------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[value](#value)</div>       | <div style='text-align:center;margin:auto;'>number</div>                     | <div style='text-align:center;margin:auto;'>/</div>        |
| <div style='text-align:center;margin:auto;'>[onChange](#onchange)</div> | <div style='text-align:center;margin:auto;'>(newValue: number) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |
| <div style='text-align:center;margin:auto;'>[min](#min)</div>           | <div style='text-align:center;margin:auto;'>number</div>                     | <div style='text-align:center;margin:auto;'>/</div>        |
| <div style='text-align:center;margin:auto;'>[max](#max)</div>           | <div style='text-align:center;margin:auto;'>number</div>                     | <div style='text-align:center;margin:auto;'>/</div>        |
| <div style='text-align:center;margin:auto;'>[readOnly](#readonly)</div> | <div style='text-align:center;margin:auto;'>boolean</div>                    | <div style='text-align:center;margin:auto;'>/</div>        |

<br>

## Props list

<br>

### value

<br>

| <div style='text-align:center;margin:auto;'>Type</div>   | <div style='text-align:center;margin:auto;'>Default</div> |
| -------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>/</div>       |

Actual slider value<br><br>

### onChange

<br>

| <div style='text-align:center;margin:auto;'>Type</div>                       | <div style='text-align:center;margin:auto;'>Default</div>  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>(newValue: number) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |

callback triggered when slider value changes<br><br>

### min

<br>

| <div style='text-align:center;margin:auto;'>Type</div>   | <div style='text-align:center;margin:auto;'>Default</div> |
| -------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>/</div>       |

Min allowed value<br><br>

### max

<br>

| <div style='text-align:center;margin:auto;'>Type</div>   | <div style='text-align:center;margin:auto;'>Default</div> |
| -------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>/</div>       |

Max allowed value<br><br>

### readOnly

<br>

| <div style='text-align:center;margin:auto;'>Type</div>    | <div style='text-align:center;margin:auto;'>Default</div> |
| --------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div>       |

if `true`, component value can only be set with `value` parameter<br><br>
