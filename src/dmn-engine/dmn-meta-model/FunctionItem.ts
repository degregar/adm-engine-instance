import { DMNElement } from "./DMNElement"
import { InformationItem } from "./InformationItem"

export class FunctionItem extends DMNElement {
  /**
   * Reference to output type of function
   */
  outputTypeRef?: string

  /**
   * Function parameters as InformationItems
   */
  parameters?: InformationItem[]
}
