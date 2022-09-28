import { NamedElement } from "./NamedElement"
import { DRGElement } from "./DRGElement"
import { Decision } from "./Decision"
import { Expression } from "./Expression"

export type ID = string

export type ElementCollection = NamedElement & {
  drgElement: DRGElement[]
}

export class ItemDefinition extends NamedElement {
  item: InformationItem[] = []
}

export class BusinessContextElement extends NamedElement {
  public URI?: string
}

export class PerformanceIndicator extends BusinessContextElement {
  public impactedDecision?: Decision
}

export class OrganisationalUnit extends BusinessContextElement {
  public decisionMade?: Decision
  public decisionOwned?: Decision
}

export type DMNDI = {}

export class InformationItem extends NamedElement {
  // an InformationItem element SHALL have a name
  // attribute, which is the name that is used to represent it in other Expression elements. The name of an
  // InformationItem element SHALL be unique within its scope.

  valueExpression?: Expression
  typeRef?: ItemDefinition
}

export class Invocable extends DRGElement {
  public variable?: InformationItem
}

export class DecisionService extends Invocable {}
