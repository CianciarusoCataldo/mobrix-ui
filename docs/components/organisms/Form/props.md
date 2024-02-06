# Form properties

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
| <div style='text-align:center;margin:auto;'>[onSubmit](#onsubmit)</div> | <div style='text-align:center;margin:auto;'>(values: Record<string, any>) => void</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[submitLabel](#submitlabel)</div> | <div style='text-align:center;margin:auto;'>`string` &#124; `JSX.Element`</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[fieldClassName](#fieldclassname)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[children](#children)</div> | <div style='text-align:center;margin:auto;'>JSX.Element</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>

## Props list

<br>

### title

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |

Form title<br><br>

### fields

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>Record<string, { header?:string; type: ``}></div> | <div style='text-align:center;margin:auto;'>{}</div> |

Form fields object. Every key is the field unique ID, and will be used on submit when returning their values<br><br>

### onSubmit

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>(values: Record<string, any>) => void</div> | <div style='text-align:center;margin:auto;'>/</div> |

Custom callback triggered when clicking on submit button. Gives the fields values as input parameter<br><br>

### submitLabel

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>`string` &#124; `JSX.Element`</div> | <div style='text-align:center;margin:auto;'>/</div> |

Custom submit button label<br><br>

### fieldClassName

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |

Custom classname applied on every field<br><br>

### children

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>JSX.Element</div> | <div style='text-align:center;margin:auto;'>/</div> |

Form content<br><br>
