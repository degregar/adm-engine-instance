import { Expression } from "./Expression"
import { InputClause } from "./InputClause"
import { OutputClause } from "./OutputClause"
import { RuleAnnotationClause } from "./RuleAnnotationClause"
import { DecisionRule } from "./DecisionRule"
import { HitPolicy } from "./HitPolicy"
import { BuiltinAggregator } from "./BuiltinAggregator"
import { DecisionTableOrientation } from "./DecisionTableOrientation"

export class DecisionTable extends Expression {
  /**
   * This attributes lists the instances of InputClause that compose this
   * DecisionTable.
   */
  input: InputClause[] = []

  /**
   * This attributes lists the instances of OutputClause that compose
   * this DecisionTable.
   */
  output: OutputClause[] = []

  /**
   * This attribute lists the instances of RuleAnnotationClause that
   * compose this DecisionTable.
   */
  annotation: RuleAnnotationClause[] = []

  /**
   * This attributes lists the instances of DecisionRule that compose
   * this DecisionTable.
   */
  rule: DecisionRule[] = []

  /**
   * The hit policy that determines the semantics of this DecisionTable.
   * Default is: UNIQUE.
   */
  hitPolicy: HitPolicy = HitPolicy.UNIQUE

  /**
   * If present, this attribute specifies the aggregation function to be
   * applied to the unordered set of values of the applicable rules to
   * determine the value of this DecisionTable when the hitPolicy is
   * COLLECT.
   */
  aggregation?: BuiltinAggregator

  /**
   * The preferred orientation for the diagrammatic representation of this
   * DecisionTable. This DecisionTable SHOULD BE represented
   * as specified by this attribute.
   */
  preferredOrientation?: DecisionTableOrientation

  /**
   * This attribute gives a description of the decision table output, and is
   * often the same as the name of the InformationItem for which the
   * decision table is the value expression.
   */
  outputLabel?: string

  constructor() {
    super()
  }
}
