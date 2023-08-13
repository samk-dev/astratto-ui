import { useNuxtApp } from '#imports'

export const useUIkit = () => {
  const { $uikit } = useNuxtApp()

  if (typeof window !== 'undefined' && !$uikit)
    console.error('Could not load UIkit plugin!')

  return $uikit
}
