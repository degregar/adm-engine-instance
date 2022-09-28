import { NamedElement } from "./NamedElement"

export class Import extends NamedElement {
  importType: string
  locationURI?: string
  namespace: string

  constructor(name: string, importType: string, namespace: string) {
    super(name)
    this.importType = importType
    this.namespace = namespace
  }
}
