# MoBrix-ui molecules props list

## Summary

<br>

- [Card](#card)

- [Carousel](#carousel)

- [Container](#container)

- [DismissableCard](#dismissablecard)

- [Dropdown](#dropdown)

- [ExpandableContainer](#expandablecontainer)

- [FormField](#formfield)

- [List](#list)

- [Modal](#modal)

- [Popup](#popup)

- [RadioButtonGroup](#radiobuttongroup)

- [Review](#review)

- [Table](#table)

- [TabViewer](#tabviewer)

<br>

## Card

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[header](../molecules/Card/props.md#header)</div> | <div style='text-align:center;margin:auto;'>JSX.Element `OR` string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[body](../molecules/Card/props.md#body)</div> | <div style='text-align:center;margin:auto;'>JSX.Element `OR` string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[footer](../molecules/Card/props.md#footer)</div> | <div style='text-align:center;margin:auto;'>JSX.Element `OR` string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[noDivider](../molecules/Card/props.md#nodivider)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[noTopDivider](../molecules/Card/props.md#notopdivider)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[noBottomDivider](../molecules/Card/props.md#nobottomdivider)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>
<br>

## Carousel

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[elements](../molecules/Carousel/props.md#elements)</div> | <div style='text-align:center;margin:auto;'>(JSX.Element OR string)[]</div> | <div style='text-align:center;margin:auto;'>[]</div> |
| <div style='text-align:center;margin:auto;'>[onChange](../molecules/Carousel/props.md#onchange)</div> | <div style='text-align:center;margin:auto;'>(newValue: number) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |
| <div style='text-align:center;margin:auto;'>[value](../molecules/Carousel/props.md#value)</div> | <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>0</div> |

<br>
<br>

## Container

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[children](../molecules/Container/props.md#children)</div> | <div style='text-align:center;margin:auto;'>any</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[wrapper](../molecules/Container/props.md#wrapper)</div> | <div style='text-align:center;margin:auto;'>'div' | 'header' | 'footer'</div> | <div style='text-align:center;margin:auto;'>div</div> |

<br>
<br>

## DismissableCard

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[onClose](../molecules/DismissableCard/props.md#onclose)</div> | <div style='text-align:center;margin:auto;'>() => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |
| <div style='text-align:center;margin:auto;'>[alwaysVisible](../molecules/DismissableCard/props.md#alwaysvisible)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>false</div> |
| <div style='text-align:center;margin:auto;'>[header](../molecules/DismissableCard/props.md#header)</div> | <div style='text-align:center;margin:auto;'>JSX.Element `OR` string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[body](../molecules/DismissableCard/props.md#body)</div> | <div style='text-align:center;margin:auto;'>JSX.Element `OR` string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[footer](../molecules/DismissableCard/props.md#footer)</div> | <div style='text-align:center;margin:auto;'>JSX.Element `OR` string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[noDivider](../molecules/DismissableCard/props.md#nodivider)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[noTopDivider](../molecules/DismissableCard/props.md#notopdivider)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[noBottomDivider](../molecules/DismissableCard/props.md#nobottomdivider)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>
<br>

## Dropdown

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[value](../molecules/Dropdown/props.md#value)</div> | <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[elements](../molecules/Dropdown/props.md#elements)</div> | <div style='text-align:center;margin:auto;'>(JSX.Element | string)[]</div> | <div style='text-align:center;margin:auto;'>[]</div> |
| <div style='text-align:center;margin:auto;'>[hideArrow](../molecules/Dropdown/props.md#hidearrow)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>false</div> |
| <div style='text-align:center;margin:auto;'>[onChange](../molecules/Dropdown/props.md#onchange)</div> | <div style='text-align:center;margin:auto;'>(newValue: number) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |

<br>
<br>

## ExpandableContainer

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[children](../molecules/ExpandableContainer/props.md#children)</div> | <div style='text-align:center;margin:auto;'>any</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[wrapper](../molecules/ExpandableContainer/props.md#wrapper)</div> | <div style='text-align:center;margin:auto;'>'div' | 'header' | 'footer'</div> | <div style='text-align:center;margin:auto;'>div</div> |
| <div style='text-align:center;margin:auto;'>[expanded](../molecules/ExpandableContainer/props.md#expanded)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[compact](../molecules/ExpandableContainer/props.md#compact)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[onChange](../molecules/ExpandableContainer/props.md#onchange)</div> | <div style='text-align:center;margin:auto;'>(newValue: boolean) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |

<br>
<br>

## FormField

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[value](../molecules/FormField/props.md#value)</div> | <div style='text-align:center;margin:auto;'>/</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[type](../molecules/FormField/props.md#type)</div> | <div style='text-align:center;margin:auto;'><ul><li>'boolean'</li><li>'text'</li><li>'numeric'</li><li>'radio'</li><li>'checkbox'</li><li>'toggle'</li><li>'rater'</li><li>'slider'</li><li>'input'</li><li>'counter'</li></ul></div> | <div style='text-align:center;margin:auto;'>'text'</div> |
| <div style='text-align:center;margin:auto;'>[placeholder](../molecules/FormField/props.md#placeholder)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[required](../molecules/FormField/props.md#required)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[validate](../molecules/FormField/props.md#validate)</div> | <div style='text-align:center;margin:auto;'>(fieldValue: any) => boolean</div> | <div style='text-align:center;margin:auto;'>() => ˚{}</div> |
| <div style='text-align:center;margin:auto;'>[header](../molecules/FormField/props.md#header)</div> | <div style='text-align:center;margin:auto;'>JSX.Element `OR` string </div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[errorLabel](../molecules/FormField/props.md#errorlabel)</div> | <div style='text-align:center;margin:auto;'>JSX.Element `OR` string </div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>
<br>

## List

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |

<br>
<br>

## Modal

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |

<br>
<br>

## Popup

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |

<br>
<br>

## RadioButtonGroup

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |

<br>
<br>

## Review

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |

<br>
<br>

## Table

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |

<br>
<br>

## TabViewer

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |

<br>
