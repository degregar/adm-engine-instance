import { DMNElement } from "./DMNElement"
import { Expression } from "./Expression"
import { UnaryTests } from "./UnaryTests"

export class InputClause extends DMNElement {
  /**
   * The subject of this InputClause.
   */
  inputExpression?: Expression

  /**
   * This attribute contains UnaryTests that constrain the
   * result of the inputExpression of this InputClause
   */
  inputValues?: UnaryTests
}
