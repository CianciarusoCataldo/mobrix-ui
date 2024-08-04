# [FileChooser](index.md) properties

## Summary

- [Props table](#props-table)
- [Props list](#props-list)

<br>

## Props table

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[namePosition](#nameposition)</div> | <div style='text-align:center;margin:auto;'>`top` &#124; `bottom` &#124; `left` &#124; `right`</div> | <div style='text-align:center;margin:auto;'>`right`</div> |
| <div style='text-align:center;margin:auto;'>[hideFileName](#hidefilename)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>`false`</div> |
| <div style='text-align:center;margin:auto;'>[onChange](#onchange)</div> | <div style='text-align:center;margin:auto;'>(newValue: File) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |
| <div style='text-align:center;margin:auto;'>[children](#children)</div> | <div style='text-align:center;margin:auto;'>JSX.Element &#124; string</div> | <div style='text-align:center;margin:auto;'>`Select file`</div> |

<br>

## Props list

<br>

<br>

### namePosition

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>`top` &#124; `bottom` &#124; `left` &#124; `right`</div> | <div style='text-align:center;margin:auto;'>`right`</div> |

<br>

File name position (hidden when no file is actually selected

<br>

<br>

### hideFileName

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>`false`</div> |

<br>

Hide/show filename, when a file is selected

<br>

<br>

### onChange

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>(newValue: File) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |

<br>

Callback triggered when a file is selected by the user. It accept a single `File` type argument

<br>

<br>

### children

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>JSX.Element &#124; string</div> | <div style='text-align:center;margin:auto;'>`Select file`</div> |

<br>

FileChooser button content. If not set, a predefined label will be used

<br>
