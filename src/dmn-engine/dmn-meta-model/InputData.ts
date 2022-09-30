import { DRGElement } from "./DRGElement"
import { AuthorityRequirement } from "./AuthorityRequirement"
import { InformationItem } from "./InformationItem"

export class InputData extends DRGElement {
  variable: InformationItem
  requiresAuthority?: AuthorityRequirement

  constructor(name: string, variable: InformationItem) {
    super(name)
    this.variable = variable
  }
}
