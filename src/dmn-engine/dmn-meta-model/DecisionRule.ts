import { DMNElement } from "./DMNElement"
import { UnaryTests } from "./UnaryTests"
import { LiteralExpression } from "./LiteralExpression"
import { RuleAnnotation } from "./RuleAnnotation"
import { Expression } from "./Expression"

export class DecisionRule extends DMNElement {
  /**
   * The instances of UnaryTests that specify the input
   * conditions that this DecisionRule must match for the
   * corresponding (by index) inputExpression.
   */
  public inputEntry: UnaryTests[] = []

  /**
   * A list of the instances of LiteralExpression that
   * compose the output components of this DecisionRule.
   */
  public outputEntry: LiteralExpression[] = []

  /**
   * A list of the instances of RuleAnnotation that compose
   * the annotations of this DecisionRule and match the
   * corresponding (by index) instances of
   * RuleAnnotationClause.
   */
  public annotationEntry: RuleAnnotation[] = []

  public isApplicable(): boolean {
    /**
     * By definition, a DecisionRule element that has no inputEntrys is always applicable.
     */
    return true
  }

  /**
   * An inputExpression satisfies its corresponding inputEntry if and only if one of the following alternatives is true:
   * a) One of the expressions in the inputEntry evaluates to a value, and the inputExpression value is
   * equal to that value.
   * b) One of the expressions in the inputEntry evaluates to a list of values, and the inputExpression value is
   * equal to at least one of the values in that list.
   * c) One of the expressions in the inputEntry is a unary test, and the unary test evaluates to true when the
   * inputExpression value is applied to it.
   * d) One of the expressions in the inputEntry is a boolean expressions using the special ‘?’ variable and that
   * expression evaluates to true when the inputExpression value is assigned to ‘?’.
   *
   * @param inputExpressions
   */
  public areInputExpressionsSatisfied(inputExpressions: Expression[]): boolean {
    return false
  }
}
