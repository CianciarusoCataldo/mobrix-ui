# FormField

## Summary

- [Props table](#props-table)
- [Props list](#props-list)

<br>

## Props table

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[value](#value)</div> | <div style='text-align:center;margin:auto;'>/</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[type](#type)</div> | <div style='text-align:center;margin:auto;'>`boolean` &#124; `text` &#124; `numeric` &#124; `radio` &#124; `checkbox` &#124; `toggle` &#124; `rater` &#124; `slider` &#124; `input` &#124; `counter`</div> | <div style='text-align:center;margin:auto;'>'text'</div> |
| <div style='text-align:center;margin:auto;'>[placeholder](#placeholder)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[required](#required)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[validate](#validate)</div> | <div style='text-align:center;margin:auto;'>(fieldValue: any) => boolean</div> | <div style='text-align:center;margin:auto;'>() => ˚{}</div> |
| <div style='text-align:center;margin:auto;'>[header](#header)</div> | <div style='text-align:center;margin:auto;'>`JSX.Element` &#124; `string`</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[errorLabel](#errorlabel)</div> | <div style='text-align:center;margin:auto;'>`JSX.Element` &#124; `string`</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>

## Props list

<br>

### value

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div> | <div style='text-align:center;margin:auto;'>/</div> |

FormField input content<br><br>

### type

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>`boolean` &#124; `text` &#124; `numeric` &#124; `radio` &#124; `checkbox` &#124; `toggle` &#124; `rater` &#124; `slider` &#124; `input` &#124; `counter`</div> | <div style='text-align:center;margin:auto;'>'text'</div> |

The field type. It determines the UI component to be used to render it. Allowed types are:

- `boolean` (rendered as a CheckBox)
- `numeric` (rendered as a Counter)
- `text` (rendered as a Input)
- `radio` (rendered as a RadioButton)
- `checkbox` (rendered as a CheckBox)
- `toggle` (rendered as a Toggle)
- `rater` (rendered as a Rater)
- `slider` (rendered as a Slider)
- `input` (rendered as a Input)
- `counter` (rendered as a Counter)<br><br>

### placeholder

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br><br>

### required

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |

If true, the field switch to error state if its value is empty<br><br>

### validate

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>(fieldValue: any) => boolean</div> | <div style='text-align:center;margin:auto;'>() => ˚{}</div> |

Custom validation function called on submit<br><br>

### header

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>`JSX.Element` &#124; `string`</div> | <div style='text-align:center;margin:auto;'>/</div> |

Form field header<br><br>

### errorLabel

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>`JSX.Element` &#124; `string`</div> | <div style='text-align:center;margin:auto;'>/</div> |

Custom error box content, displayed when FormField is in error state<br><br>
