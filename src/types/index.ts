export type { AuModuleOptions } from './module'

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
