export type { AuModuleOptions } from './module'

export type UiKitTheme =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
export type UiKitThemeButton = UiKitTheme | 'text' | 'link'
export type UiKitSizeButton = 'small' | 'large'

export interface UseNotification {
  message: string
  status?: 'primary' | 'success' | 'warning' | 'danger'
  timeout?: number
  group?: string
  pos?:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'
}
