import { DMNElement } from "./DMNElement"
import { Invocable } from "./types"

/**
 * https://www.omg.org/spec/DMN/1.3/PDF#6.3.14
 */
export class KnowledgeRequirement extends DMNElement {
  requiredKnowledge: Invocable

  constructor(requiredKnowledge: Invocable) {
    super()
    this.requiredKnowledge = requiredKnowledge
  }
}
