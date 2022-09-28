import { DMNElement } from "./DMNElement"
import { KnowledgeSource } from "./KnowledgeSource"
import { InputData } from "./InputData"
import { Decision } from "./Decision"

/**
 * https://www.omg.org/spec/DMN/1.3/PDF#6.3.15
 */
export class AuthorityRequirement extends DMNElement {
  requiredAuthority?: KnowledgeSource
  requiredDecision?: Decision
  requiredInput?: InputData
}
