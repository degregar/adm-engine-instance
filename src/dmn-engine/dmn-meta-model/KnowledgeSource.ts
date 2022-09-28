import { DRGElement } from "./DRGElement"
import { OrganisationalUnit } from "./types"
import { AuthorityRequirement } from "./AuthorityRequirement"

export class KnowledgeSource extends DRGElement {
  type?: string
  owner?: OrganisationalUnit
  locationURI?: string
  authorityRequirement: AuthorityRequirement[] = []
}
