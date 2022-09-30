import { DMNElement } from "./DMNElement"
import { Artifact } from "./Artifact"
import { AssociationDirection } from "./AssociationDirection"

export class Association extends Artifact {
  public associationDirection: AssociationDirection
  public sourceRef: DMNElement
  public targetRef: DMNElement

  constructor(associationDirection: AssociationDirection, sourceRef: DMNElement, targetRef: DMNElement) {
    super()

    this.associationDirection = associationDirection
    this.sourceRef = sourceRef
    this.targetRef = targetRef
  }
}
