import { DMNElement } from "./DMNElement"

export class Artifact extends DMNElement {}

export class TextAnnotation extends Artifact {
  public text: string
  public textFormat: string = "text/plain"

  constructor(text: string) {
    super()
    this.text = text
  }
}

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

export class Group extends Artifact {
  name?: string
}

export enum AssociationDirection {
  None = "None",
  One = "One",
  Both = "Both",
}
