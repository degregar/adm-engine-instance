import { DMNElement } from "./DMNElement"
import { InformationItem } from "./InformationItem"
import { Expression } from "./Expression"

export class Binding extends DMNElement {
  /**
   * The InformationItem on which the calledFunction of the owning
   * instance of Invocation depends that is bound by this Binding.
   */
  parameter: InformationItem

  /**
   * The instance of Expression to which the parameter in this Binding is
   * bound when the owning instance of Invocation is evaluated.
   */
  bindingFormula?: Expression

  constructor(parameter: InformationItem) {
    super()
    this.parameter = parameter
  }
}
