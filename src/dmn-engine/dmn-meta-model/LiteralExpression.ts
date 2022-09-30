import { Import } from "./Import"
import { Expression } from "./Expression"

export class LiteralExpression extends Expression {
  /**
   * The text of this LiteralExpression. It SHALL be a valid expression
   * in the express ionLanguage.
   */
  text?: string

  /**
   * This attribute identifies the expression language used in this
   * LiteralExpression. This value overrides the expression language
   * specified for the containing instance of
   * DecisionRequirementDiagram. The language SHALL be specified
   * in a URI format.
   */
  expressionLanguage?: string = "FEEL"

  /**
   * The instance of ImportedValues that specifies where the text of this
   * LiteralExpression is located.
   */
  importedValues?: Import
}
