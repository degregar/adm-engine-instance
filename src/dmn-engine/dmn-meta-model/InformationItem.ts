import { NamedElement } from "./NamedElement"
import { Expression } from "./Expression"

/**
 * an InformationItem element SHALL have a name
 * attribute, which is the name that is used to represent it in other Expression elements. The name of an
 * InformationItem element SHALL be unique within its scope.
 */
export class InformationItem extends NamedElement {
  valueExpression?: Expression
  typeRef: string

  constructor(name: string, typeRef: string) {
    super(name)
    this.typeRef = typeRef
  }
}
