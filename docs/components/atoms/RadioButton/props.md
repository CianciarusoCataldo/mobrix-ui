# RadioButton

## Summary

- [Props table](#props-table)
- [Props list](#props-list)

<br>

## Props table

<br>

| <div style='text-align:center;margin:auto;'>Parameter</div>                     | <div style='text-align:center;margin:auto;'>Type</div>                        | <div style='text-align:center;margin:auto;'>Default</div> |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[value](#value)</div>               | <div style='text-align:center;margin:auto;'>boolean</div>                     | <div style='text-align:center;margin:auto;'>false</div>   |
| <div style='text-align:center;margin:auto;'>[onChange](#onchange)</div>         | <div style='text-align:center;margin:auto;'>(newValue: boolean) => void</div> | <div style='text-align:center;margin:auto;'>/</div>       |
| <div style='text-align:center;margin:auto;'>[deselectable](#deselectable)</div> | <div style='text-align:center;margin:auto;'>boolean</div>                     | <div style='text-align:center;margin:auto;'>false</div>   |

<br>

## Props list

<br>

### value

<br>

| <div style='text-align:center;margin:auto;'>Type</div>    | <div style='text-align:center;margin:auto;'>Default</div> |
| --------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>false</div>   |

actual radio button value (radio icon visiblity)<br><br>

### onChange

<br>

| <div style='text-align:center;margin:auto;'>Type</div>                        | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>(newValue: boolean) => void</div> | <div style='text-align:center;margin:auto;'>/</div>       |

callback triggered when radio button value change<br><br>

### deselectable

<br>

| <div style='text-align:center;margin:auto;'>Type</div>    | <div style='text-align:center;margin:auto;'>Default</div> |
| --------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>false</div>   |

if `false`, the button can be selected only once (the value can't change then)<br><br>