# [CodeBox](index.md) properties

## Summary

- [Props table](#props-table)
- [Props list](#props-list)

<br>

## Props table

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[value](#value)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[highlight](#highlight)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>true</div> |
| <div style='text-align:center;margin:auto;'>[environment](#environment)</div> | <div style='text-align:center;margin:auto;'>`javascript` &#124; `python` &#124; `terminal` &#124; `common`</div> | <div style='text-align:center;margin:auto;'>'terminal'</div> |
| <div style='text-align:center;margin:auto;'>[multiline](#multiline)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>true</div> |

<br>

## Props list

<br>

<br>

### value

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>

code to display - multiline strings is supported

<br>

<br>

### highlight

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>true</div> |

<br>

Enable/disable text highlight, based on selected environment

<br>

<br>

### environment

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>`javascript` &#124; `python` &#124; `terminal` &#124; `common`</div> | <div style='text-align:center;margin:auto;'>'terminal'</div> |

<br>

environment for text highlight feature, default to 'terminal' (only enabled when 'highlight' is true)

<br>

<br>

### multiline

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>true</div> |

<br>

if `true`, parse the line breaks inside input string (if `false`, the input string will be displayed into one line)

<br>
