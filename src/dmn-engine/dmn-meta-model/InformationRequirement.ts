import { DMNElement } from "./DMNElement"
import { InputData } from "./InputData"
import { Decision } from "./Decision"

/**
 * https://www.omg.org/spec/DMN/1.3/PDF#6.3.13
 */
export class InformationRequirement extends DMNElement {
  requiredDecision?: Decision
  requiredInput?: InputData

  private constructor() {
    super()
  }

  static fromDecision(decision: Decision) {
    const ir = new InformationRequirement()
    ir.requiredDecision = decision
    return ir
  }

  static fromInputData(inputData: InputData) {
    const ir = new InformationRequirement()
    ir.requiredInput = inputData
    return ir
  }
}
