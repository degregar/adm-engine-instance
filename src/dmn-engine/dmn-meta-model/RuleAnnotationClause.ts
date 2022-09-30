import { DMNElement } from "./DMNElement"

export class RuleAnnotationClause extends DMNElement {
  /**
   * RuleAnnotationClause SHALL specify a name
   * that is used as the name of the rule annotation column of
   * the containing decision table.
   */
  name: string

  constructor(name: string) {
    super()
    this.name = name
  }
}
