import { Expression } from "./Expression"
import { FunctionKind } from "./FunctionKind"
import { InformationItem } from "./InformationItem"

export class FunctionDefinition extends Expression {
  formalParameter: InformationItem[] = []
  body?: Expression
  kind: FunctionKind = FunctionKind.FEEL
}
