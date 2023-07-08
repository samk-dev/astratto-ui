import type { UseNotification } from '../../types'
import { useUIkit3 } from '#imports'

export const useNotification = () => {
  const showNotification = (options: UseNotification) => {
    const uikit = useUIkit3()

    uikit?.notification({
      message: options.message,
      group: options.group || undefined,
      status: options.status || 'primary',
      pos: options.pos || 'top-right',
      timeout: options.timeout || 5000
    })
  }

  const closeAllNotifications = () => {
    const uikit = useUIkit3()
    uikit?.notification.closeAll()
  }

  return { showNotification, closeAllNotifications }
}
