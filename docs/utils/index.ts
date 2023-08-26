interface TocItem {
  id: string
  text: string
  children: TocItem[] | undefined
}
export interface NavItem {
  title: string
  titleClickable: boolean
  _path: string
  children: NavItem[] | undefined
}
export const normalizeToc = (items: TocItem[]): NavItem[] => {
  const arr: NavItem[] = []

  items.forEach((el: TocItem) => {
    arr.push({
      title: el.text,
      titleClickable: true,
      _path: `#${el.id}`,
      children: el.children ? normalizeToc(el.children) : undefined
    })
  })

  return arr
}
