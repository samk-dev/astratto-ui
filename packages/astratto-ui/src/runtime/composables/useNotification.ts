import type { UseNotification } from '../../types'
import { useUIkit } from './useUikit'

const uikit = useUIkit()

export const useNotification = () => {
  const showNotification = (options: UseNotification) => {
    uikit?.notification({
      message: options.message,
      group: options.group || undefined,
      status: options.status || 'primary',
      pos: options.pos || 'top-right',
      timeout: options.timeout || 5000
    })
  }

  const closeAllNotifications = () => {
    // @ts-ignore
    uikit?.notification.closeAll()
  }

  return { showNotification, closeAllNotifications }
}
