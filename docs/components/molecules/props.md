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
| <div style='text-align:center;margin:auto;'>[children](../molecules/Card/props.md#children)</div> | <div style='text-align:center;margin:auto;'>`JSX.Element` &#124; `string`</div> | <div style='text-align:center;margin:auto;'>/</div> |

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
| <div style='text-align:center;margin:auto;'>[wrapper](../molecules/Container/props.md#wrapper)</div> | <div style='text-align:center;margin:auto;'>`div` &#124; `header` &#124; `footer`</div> | <div style='text-align:center;margin:auto;'>div</div> |

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
| <div style='text-align:center;margin:auto;'>[children](../molecules/DismissableCard/props.md#children)</div> | <div style='text-align:center;margin:auto;'>`JSX.Element` &#124; `string`</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>
<br>

## Dropdown

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[value](../molecules/Dropdown/props.md#value)</div> | <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[elements](../molecules/Dropdown/props.md#elements)</div> | <div style='text-align:center;margin:auto;'>(JSX.Element &#124; string)[]</div> | <div style='text-align:center;margin:auto;'>[]</div> |
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
| <div style='text-align:center;margin:auto;'>[wrapper](../molecules/ExpandableContainer/props.md#wrapper)</div> | <div style='text-align:center;margin:auto;'>`div` &#124; `header` &#124; `footer`</div> | <div style='text-align:center;margin:auto;'>div</div> |
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
| <div style='text-align:center;margin:auto;'>[type](../molecules/FormField/props.md#type)</div> | <div style='text-align:center;margin:auto;'>`boolean` &#124; `text` &#124; `numeric` &#124; `radio` &#124; `checkbox` &#124; `toggle` &#124; `rater` &#124; `slider` &#124; `input` &#124; `counter`</div> | <div style='text-align:center;margin:auto;'>'text'</div> |
| <div style='text-align:center;margin:auto;'>[placeholder](../molecules/FormField/props.md#placeholder)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[required](../molecules/FormField/props.md#required)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[validate](../molecules/FormField/props.md#validate)</div> | <div style='text-align:center;margin:auto;'>(fieldValue: any) => boolean</div> | <div style='text-align:center;margin:auto;'>() => ˚{}</div> |
| <div style='text-align:center;margin:auto;'>[header](../molecules/FormField/props.md#header)</div> | <div style='text-align:center;margin:auto;'>`JSX.Element` &#124; `string`</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[errorLabel](../molecules/FormField/props.md#errorlabel)</div> | <div style='text-align:center;margin:auto;'>`JSX.Element` &#124; `string`</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>
<br>

## List

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[elements](../molecules/List/props.md#elements)</div> | <div style='text-align:center;margin:auto;'>(`JSX.Element` &#124; `string`)[]</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[onClick](../molecules/List/props.md#onclick)</div> | <div style='text-align:center;margin:auto;'>() => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |

<br>
<br>

## Modal

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[onClose](../molecules/Modal/props.md#onclose)</div> | <div style='text-align:center;margin:auto;'>() => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |
| <div style='text-align:center;margin:auto;'>[children](../molecules/Modal/props.md#children)</div> | <div style='text-align:center;margin:auto;'>`JSX.Element` &#124; `string`</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>
<br>

## Popup

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[onClose](../molecules/Popup/props.md#onclose)</div> | <div style='text-align:center;margin:auto;'>() => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |
| <div style='text-align:center;margin:auto;'>[children](../molecules/Popup/props.md#children)</div> | <div style='text-align:center;margin:auto;'>`JSX.Element` &#124; `string`</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>
<br>

## RadioButtonGroup

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[value](../molecules/RadioButtonGroup/props.md#value)</div> | <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[buttons](../molecules/RadioButtonGroup/props.md#buttons)</div> | <div style='text-align:center;margin:auto;'>{ component: `JSX.Element`, text: `string`, textPosition:  `top` &#124; `bottom` &#124; `left` &#124; `right` }[]</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[elementClassName](../molecules/RadioButtonGroup/props.md#elementclassname)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[radioProps](../molecules/RadioButtonGroup/props.md#radioprops)</div> | <div style='text-align:center;margin:auto;'>RadioButtonProps</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[defaultPosition](../molecules/RadioButtonGroup/props.md#defaultposition)</div> | <div style='text-align:center;margin:auto;'>`top` &#124; `bottom` &#124; `left` &#124; `right`</div> | <div style='text-align:center;margin:auto;'>left</div> |
| <div style='text-align:center;margin:auto;'>[horizontal](../molecules/RadioButtonGroup/props.md#horizontal)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>false</div> |
| <div style='text-align:center;margin:auto;'>[onChange](../molecules/RadioButtonGroup/props.md#onchange)</div> | <div style='text-align:center;margin:auto;'>(newValue: number) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |

<br>
<br>

## Review

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[user](../molecules/Review/props.md#user)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[description](../molecules/Review/props.md#description)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[icon](../molecules/Review/props.md#icon)</div> | <div style='text-align:center;margin:auto;'>JSX.Element</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[url](../molecules/Review/props.md#url)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[logo](../molecules/Review/props.md#logo)</div> | <div style='text-align:center;margin:auto;'>`default` &#124; `link` &#124; `facebook` &#124; `twitter` &#124; `google` &#124; `linkedin` &#124; `github`</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[max](../molecules/Review/props.md#max)</div> | <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>5</div> |
| <div style='text-align:center;margin:auto;'>[vertical](../molecules/Review/props.md#vertical)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>false</div> |
| <div style='text-align:center;margin:auto;'>[rate](../molecules/Review/props.md#rate)</div> | <div style='text-align:center;margin:auto;'>number</div> | <div style='text-align:center;margin:auto;'>0</div> |
| <div style='text-align:center;margin:auto;'>[rateType](../molecules/Review/props.md#ratetype)</div> | <div style='text-align:center;margin:auto;'>`star`&#124;`circle`</div> | <div style='text-align:center;margin:auto;'>'star'</div> |

<br>
<br>

## Table

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[headers](../molecules/Table/props.md#headers)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[rows](../molecules/Table/props.md#rows)</div> | <div style='text-align:center;margin:auto;'>(JSX.Element &#124; string)[][]</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[headerClassName](../molecules/Table/props.md#headerclassname)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[headersProps](../molecules/Table/props.md#headersprops)</div> | <div style='text-align:center;margin:auto;'>Record<string, any></div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[cellClassName](../molecules/Table/props.md#cellclassname)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[cellProps](../molecules/Table/props.md#cellprops)</div> | <div style='text-align:center;margin:auto;'>Record<string, any></div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[rowClassName](../molecules/Table/props.md#rowclassname)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[rowProps](../molecules/Table/props.md#rowprops)</div> | <div style='text-align:center;margin:auto;'>Record<string, any></div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[onClick](../molecules/Table/props.md#onclick)</div> | <div style='text-align:center;margin:auto;'>(row: number, column: number) => void</div> | <div style='text-align:center;margin:auto;'>() => {}</div> |
| <div style='text-align:center;margin:auto;'>[propsCallback](../molecules/Table/props.md#propscallback)</div> | <div style='text-align:center;margin:auto;'>(row: number, column: number) => Record<string, any></div> | <div style='text-align:center;margin:auto;'>() => ({})</div> |

<br>
<br>

## TabViewer

<br>

<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |

<br>
