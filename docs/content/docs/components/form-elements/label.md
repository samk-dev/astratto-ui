# Label

## Props

```ts
export interface PropsAuLabel {
  /**
   * @description assigns the label to an input
   * */
  for: string
  /**
   * @description label text
   * */
  label: string
  /**
   * @description if the label is visible or only for screen readers
   * @default false
   * */
  srOnly?: boolean
  /**
   * @description if the input related to the label is required
   * @default false
   * */
  required?: boolean
}
```

## Slots

Default

## Usage example

```html
<template>
  <au-label for="target-input" label="Label" required />
</template>
```

```html
<template>
  <au-label for="target-input" label="Label" required> Label </au-label>
</template>
```
