import { Expression } from "./Expression"

export class UnaryTests extends Expression {
  /**
   * The text of this UnaryTests. It SHALL be a valid expression in the
   * expressionLanguage.
   */
  text?: string

  /**
   * This attribute identifies the expression language used in this
   * UnaryTests. This value overrides the expression
   * language specified for the containing instance of
   * DecisionRequirementDiagram. The language SHALL
   * be specified in a URI format.
   */
  expressionLanguage?: string
}
