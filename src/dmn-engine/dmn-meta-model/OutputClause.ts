import { DMNElement } from "./DMNElement"
import { UnaryTests } from "./UnaryTests"
import { Expression } from "./Expression"

export class OutputClause extends DMNElement {
  /**
   * The OutputClause of a single output decision table
   * SHALL NOT specify a typeRef. OutputClauses of a
   * multiple output decision table MAY specify a typeRef. A
   * typeRef is the name of the datatype of the output, either an
   * ItemDefinition, a base type in the specified
   * expressionLanguage, or an imported type.
   */
  typeRef: string

  /**
   * The OutputClause of a single output decision table
   * SHALL NOT specify a name. OutputClauses of a multiple
   * output decision table SHALL specify a name.
   */
  name?: string

  /**
   * This attribute contains UnaryTests that constrain the
   * result of the outputEntrys of the DecisionRules
   * corresponding to this OutputClause.
   */
  outputValues?: UnaryTests

  /**
   * In an Incomplete table, this attribute lists an instance of
   * Expression that is selected when no rules match for the
   * decision table.
   */
  defaultOutputEntry?: Expression

  constructor(typeRef: string) {
    super()
    this.typeRef = typeRef
  }
}
