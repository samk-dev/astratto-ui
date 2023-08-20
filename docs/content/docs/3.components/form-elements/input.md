# Input

## Props

```ts
interface PropsAuInput {
  name?: string
  hint?: string
  required?: boolean
  disabled?: boolean
  validationMsg?: string
  validationtype?: 'danger' | 'success'
  leftIcon?: string
  rightIcon?: string
  rightIconClickable?: boolean
  placeholder: string
  autocomplete?: 'on' | 'off'
  autofocus?: boolean
  type?: 'text' | 'email' | 'number' | 'password' | 'tel' | 'url'
  size?: 'small' | 'large'
  width?: 'xsmall' | 'small' | 'medium' | 'large'
  loading?: boolean
  modelValue: string | number
}
```

## Events

```ts
interface EmitsAuInput {
  (e: 'update:modelValue', value: string | number): string | number
  (e: 'focus'): void
  (e: 'blur'): void
  (e: 'rightIconClick'): void
}
```

## Slots

TDB

## Usage

TDB
