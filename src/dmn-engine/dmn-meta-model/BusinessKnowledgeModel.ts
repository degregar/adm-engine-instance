import { Invocable } from "./types"
import { FunctionDefinition } from "./FunctionDefinition"
import { KnowledgeRequirement } from "./KnowledgeRequirement"
import { AuthorityRequirement } from "./AuthorityRequirement"

export class BusinessKnowledgeModel extends Invocable {
  encapsulatedLogic?: FunctionDefinition

  knowledgeRequirement: KnowledgeRequirement[] = []
  authorityRequirement: AuthorityRequirement[] = []
}
