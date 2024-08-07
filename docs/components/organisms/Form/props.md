# [Form](index.md) properties

## Summary

- [Props table](#props-table)
- [Props list](#props-list)

<br>

## Props table

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[title](#title)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[fields](#fields)</div> | <div style='text-align:center;margin:auto;'>Record<string, { header?:string; type: ``}></div> | <div style='text-align:center;margin:auto;'>{}</div> |
| <div style='text-align:center;margin:auto;'>[submitContent](#submitcontent)</div> | <div style='text-align:center;margin:auto;'>`string` &#124; `JSX.Element`</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[fieldClassName](#fieldclassname)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[children](#children)</div> | <div style='text-align:center;margin:auto;'>JSX.Element</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[validate](#validate)</div> | <div style='text-align:center;margin:auto;'>(fieldValues: Record<string, any>) => Record<string, boolean></div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[onSubmit](#onsubmit)</div> | <div style='text-align:center;margin:auto;'>(fieldValues: Record<string, any>) => void</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>

## Props list

<br>

<br>

### title

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>

Form title

<br>

<br>

### fields

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>Record<string, { header?:string; type: ``}></div> | <div style='text-align:center;margin:auto;'>{}</div> |

<br>

Form fields object. Every key is the field unique ID, and will be used on submit when returning their values

<br>

<br>

### submitContent

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>`string` &#124; `JSX.Element`</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>

Custom submit button content

<br>

<br>

### fieldClassName

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>

Custom classname applied on every field

<br>

<br>

### children

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>JSX.Element</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>

Form content

<br>

<br>

### validate

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>(fieldValues: Record<string, any>) => Record<string, boolean></div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>

Custom validation callback. Must return an object with every field associated with a boolean value (if `false`, the field will be in error state)

<br>

<br>

### onSubmit

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>(fieldValues: Record<string, any>) => void</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>

Custom callback, called on submit

<br>
