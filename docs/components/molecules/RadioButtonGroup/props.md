# [RadioButtonGroup](index.md) properties

## Summary

- [Props table](#props-table)
- [Props list](#props-list)

<br>

## Props table

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[value](#value)</div> | <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[buttons](#buttons)</div> | <div style='text-align:center;margin:auto;'>{ component: `JSX.Element`, text: `string`, textPosition:  `top` &#124; `bottom` &#124; `left` &#124; `right` }[]</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[elementClassName](#elementclassname)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[radioProps](#radioprops)</div> | <div style='text-align:center;margin:auto;'>RadioButtonProps</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[defaultPosition](#defaultposition)</div> | <div style='text-align:center;margin:auto;'>`top` &#124; `bottom` &#124; `left` &#124; `right`</div> | <div style='text-align:center;margin:auto;'>left</div> |
| <div style='text-align:center;margin:auto;'>[horizontal](#horizontal)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>false</div> |
| <div style='text-align:center;margin:auto;'>[onChange](#onchange)</div> | <div style='text-align:center;margin:auto;'>(newValue: number) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |

<br>

## Props list

<br>

<br>

### value

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>

Selected RadioButton (as index)

<br>

<br>

### buttons

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>{ component: `JSX.Element`, text: `string`, textPosition:  `top` &#124; `bottom` &#124; `left` &#124; `right` }[]</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>

Radio elements array. Every element UI can be driven with attributes. A radio element can contain 3 fields:<ul><li>- `component`: custom component rendered before radio button</li><li>- `text`: custom radio text showed near the radio button</li><li>- `textPosition`: custom text position</li>

<br>

<br>

### elementClassName

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>

Classname applied on every radio element

<br>

<br>

### radioProps

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>RadioButtonProps</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>

[RadioButton props](../../atoms/RadioButton/props.md) applied on every RadioButton element

<br>

<br>

### defaultPosition

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>`top` &#124; `bottom` &#124; `left` &#124; `right`</div> | <div style='text-align:center;margin:auto;'>left</div> |

<br>

Default text position for RadioButton elements (when `textPosition` is not provided)

<br>

<br>

### horizontal

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>false</div> |

<br>

If `true`, the RadioButton elements are displayed horizontally

<br>

<br>

### onChange

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>(newValue: number) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |

<br>

Callback triggered when a RadioButton is clicked by the user, giving its index as parameter

<br>
