import { DRGElement } from "./DRGElement"
import { AuthorityRequirement } from "./AuthorityRequirement"
import { OrganisationalUnit } from "./OrganisationalUnit"

export class KnowledgeSource extends DRGElement {
  type?: string
  owner?: OrganisationalUnit
  locationURI?: string
  authorityRequirement: AuthorityRequirement[] = []
}
