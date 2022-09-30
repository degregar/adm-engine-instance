import { BusinessContextElement } from "./BusinessContextElement"
import { Decision } from "./Decision"

export class PerformanceIndicator extends BusinessContextElement {
  public impactedDecision?: Decision
}
