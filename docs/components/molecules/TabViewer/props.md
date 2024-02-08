# [TabViewer](index.md) properties

## Summary

- [Props table](#props-table)
- [Props list](#props-list)

<br>

## Props table

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[selected](#selected)</div> | <div style='text-align:center;margin:auto;'>/</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[tabs](#tabs)</div> | <div style='text-align:center;margin:auto;'>{`label`: string; `content`: JSX.Element;}[]</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[tabProps](#tabprops)</div> | <div style='text-align:center;margin:auto;'>Record<string,any></div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[tabSelectedProps](#tabselectedprops)</div> | <div style='text-align:center;margin:auto;'>Record<string,any></div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[tabUnselectedProps](#tabunselectedprops)</div> | <div style='text-align:center;margin:auto;'>Record<string,any></div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[tabViewProps](#tabviewprops)</div> | <div style='text-align:center;margin:auto;'>Record<string,any></div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[tabClassName](#tabclassname)</div> | <div style='text-align:center;margin:auto;'>Record<string,any></div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[tabSelectedClassName](#tabselectedclassname)</div> | <div style='text-align:center;margin:auto;'>Record<string,any></div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[tabUnselectedClassName](#tabunselectedclassname)</div> | <div style='text-align:center;margin:auto;'>Record<string,any></div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[tabViewClassName](#tabviewclassname)</div> | <div style='text-align:center;margin:auto;'>Record<string,any></div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[onChange](#onchange)</div> | <div style='text-align:center;margin:auto;'>(newValue: number) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |

<br>

## Props list

<br>

<br>

### selected

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>/</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>

<br>

<br>

### tabs

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>{`label`: string; `content`: JSX.Element;}[]</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>

tabs array. Every tab object contains 3 fields: <ul><li>`label`: tab label displayed on top</li><li>`content`: tab content element</li></ul>

<br>

<br>

### tabProps

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>Record<string,any></div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>

Custom props applied on every tab

<br>

<br>

### tabSelectedProps

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>Record<string,any></div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>

Custom props applied on every selected tab

<br>

<br>

### tabUnselectedProps

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>Record<string,any></div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>

Custom props applied on every unselected tab

<br>

<br>

### tabViewProps

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>Record<string,any></div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>

Custom props applied on the tab view panel

<br>

<br>

### tabClassName

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>Record<string,any></div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>

Custom props applied on every tab

<br>

<br>

### tabSelectedClassName

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>Record<string,any></div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>

Custom props applied on every selected tab

<br>

<br>

### tabUnselectedClassName

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>Record<string,any></div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>

Custom props applied on every unselected tab

<br>

<br>

### tabViewClassName

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>Record<string,any></div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>

Custom props applied on the tab view panel

<br>

<br>

### onChange

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>(newValue: number) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |

<br>

Callback triggered when a tab is selected, giving its index as parameter

<br>
