import { DMNElement } from "./DMNElement"

export abstract class NamedElement extends DMNElement {
  public name: string

  protected constructor(name: string) {
    super()
    this.name = name
  }
}
