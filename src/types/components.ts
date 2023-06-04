export interface PropsBaseInput {
  /**
   * @description label text
   * */
  label: string
  /**
   * @description unique input id, it is used as id and name attrs
   * */
  name: string
  /**
   * @description if the input related to the label is required
   * @default false
   * */
  required?: boolean
  /**
   * @description input disabled state
   * @default false
   * */
  disabled?: boolean
}
