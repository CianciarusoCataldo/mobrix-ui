# MoBrix-ui changelog

## Versions

- [3.8.0](#380)
- [3.7.0](#370)
- [3.6.0](#360)
- [3.5.0](#350)
- [3.4.0](#340)
- [3.3.0](#330)
- [3.2.0](#320)
- [3.1.0](#310)
- [3.0.0](#300)
- [2.1.0](#210)
- [2.0.0](#200)
- [1.2.0](#120)
- [1.1.0](#110)
- [1.0.0](#100)

<br>

---

## Changes

<br>

### 3.8.0

- Ui improvements and fix
- Refactoring
- Bundle size reduced
- New shared property, `animation`, to customize components animation when they are rendered
- New global css variables, to customize shadow colors:
  - `--mbx-shadow`
  - `--mbx-shadow-light`
  - `--mbx-shadow-dark`

### 3.7.0

- `CodeBox` component refactoring:
  - `noCopyButton` properties removed
  - `copyButton` properties used instead (enable/disable copy button)
  - Multiline strings are now supported
- Clean-up

<br>

### 3.6.0

- `Image` component
- Clean-up
- Better automatic release system
- Docs updated

<br>

### 3.5.0

- Clean-up
- Refactoring
- Reduced bundle size
- Comments generator fix
- New automatic release creation system
- New automatic publish system

<br>

### 3.4.0

- `EmbeddedVideo` component
- Clean-up

<br>

### 3.3.0

- Slider fix
- IconButton highlight fix on mobile
- All components now use new building functions (`buildMbxReactiveComponent` and `buildMbxStandardComponent`)

<br>

### 3.2.0

- New DatePicker css vars, to customize its internal modal
  - `--mbx-datepicker-modal-background-light`,
  - `--mbx-datepicker-modal-background-dark`,
  - `--mbx-datepicker-modal-x-color-light`,
  - `--mbx-datepicker-modal-x-color-dark`,
  - `--mbx-datepicker-modal-x-color-hover-light`,
  - `--mbx-datepicker-modal-x-color-hover-dark`
- Clean-up
- New CI workflow to publish MoBrix-ui package to github registry
- Automatic css variables docs generation

<br>

### 3.1.0

- New Card properties (`headerClassName`, `headerProps`, `bodyClassName`, `bodyProps`, `footerClassName`, `footerProps`)
- Clean-up
- Minor improvements

<br>

### 3.0.0

- No more external dependencies
- Totally re-designed css variables system, to fully customize every component at once
- Docs and comments generator
- Global refactoring and huge clean-up

<br>

### 2.1.0

- `TabViewer` component
- Minor fixes

<br>

### 2.0.0

- `Calendar` component
- `DatePicker` component
- `Popup` component
- `Selector` component
- `Slider` component
- `RadioButtonGroup` component
- `RadioButton` component
- `Reactive components` replace old `Box Components`, mantaining only the automatic input value sync with actual value set
- Better overall performance
- Huge cleanup
- Deep refactoring
- Minor fixes

<br>

### 1.2.0

- `Carousel` arrow fix
- `ExpandableContainer` arrow fix
- `FacebookButtons` component

<br>

### 1.1.0

- `readonly` support for `Rater` component
- `Review` component
- Clean-up

<br>

### 1.0.0

- MoBrix-ui-components library setup
