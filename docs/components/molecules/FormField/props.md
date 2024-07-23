# [FormField](index.md) properties

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
| <div style='text-align:center;margin:auto;'>[type](#type)</div> | <div style='text-align:center;margin:auto;'>`boolean` &#124; `text` &#124; `numeric` &#124; `radio` &#124; `checkbox` &#124; `toggle` &#124; `rater` &#124; `slider` &#124; `input` &#124; `counter` &#124; `password`</div> | <div style='text-align:center;margin:auto;'>'text'</div> |
| <div style='text-align:center;margin:auto;'>[placeholder](#placeholder)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[required](#required)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[validate](#validate)</div> | <div style='text-align:center;margin:auto;'>(fieldValue: any) => boolean</div> | <div style='text-align:center;margin:auto;'>() => ˚{}</div> |
| <div style='text-align:center;margin:auto;'>[header](#header)</div> | <div style='text-align:center;margin:auto;'>`JSX.Element` &#124; `string`</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[headerClassName](#headerclassname)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[headerProps](#headerprops)</div> | <div style='text-align:center;margin:auto;'>Record<string, any></div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[errorLabel](#errorlabel)</div> | <div style='text-align:center;margin:auto;'>`JSX.Element` &#124; `string`</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>

## Props list

<br>

<br>

### value

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>

FormField input content

<br>

<br>

### type

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>`boolean` &#124; `text` &#124; `numeric` &#124; `radio` &#124; `checkbox` &#124; `toggle` &#124; `rater` &#124; `slider` &#124; `input` &#124; `counter` &#124; `password`</div> | <div style='text-align:center;margin:auto;'>'text'</div> |

<br>

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
- `counter` (rendered as a Counter)
- `password` (rendered as a Password)

<br>

<br>

### placeholder

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>

<br>

<br>

### required

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>

If true, the field switch to error state if its value is empty

<br>

<br>

### validate

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>(fieldValue: any) => boolean</div> | <div style='text-align:center;margin:auto;'>() => ˚{}</div> |

<br>

Custom validation function called on submit

<br>

<br>

### header

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>`JSX.Element` &#124; `string`</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>

Form field header

<br>

<br>

### headerClassName

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>

Custom classname applied on every header element

<br>

<br>

### headerProps

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>Record<string, any></div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>

Custom props applied on every header element (including MoBrix-ui shared props)

<br>

<br>

### errorLabel

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>`JSX.Element` &#124; `string`</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>

Custom error box content, displayed when FormField is in error state

<br>
