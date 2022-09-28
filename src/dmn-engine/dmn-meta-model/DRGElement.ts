import { NamedElement } from "./NamedElement"

export abstract class DRGElement extends NamedElement {
  protected constructor(name: string) {
    super(name)
  }
}
