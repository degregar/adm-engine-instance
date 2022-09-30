import { FunctionDefinition } from "./FunctionDefinition"
import { KnowledgeRequirement } from "./KnowledgeRequirement"
import { AuthorityRequirement } from "./AuthorityRequirement"
import { Invocable } from "./Invocable"

export class BusinessKnowledgeModel extends Invocable {
  encapsulatedLogic?: FunctionDefinition

  knowledgeRequirement: KnowledgeRequirement[] = []
  authorityRequirement: AuthorityRequirement[] = []
}
