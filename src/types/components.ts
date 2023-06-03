export interface AuLabel {
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
