import { DRGElement } from "./DRGElement"
import { InformationItem } from "./types"
import { AuthorityRequirement } from "./AuthorityRequirement"

export class InputData extends DRGElement {
  variable: InformationItem
  requiresAuthority?: AuthorityRequirement

  constructor(name: string, variable: InformationItem) {
    super(name)
    this.variable = variable
  }
}
