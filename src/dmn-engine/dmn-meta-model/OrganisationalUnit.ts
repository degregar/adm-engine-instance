import { BusinessContextElement } from "./BusinessContextElement"
import { Decision } from "./Decision"

export class OrganisationalUnit extends BusinessContextElement {
  public decisionMade?: Decision
  public decisionOwned?: Decision
}
