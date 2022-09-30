import { Expression } from "./Expression"
import { Binding } from "./Binding"

export class Invocation extends Expression {
  /**
   * An expression whose value is a function.
   */
  calledFunction: Expression
  binding: Binding[]

  constructor(calledFunction: Expression, binding: Binding[]) {
    super()
    this.calledFunction = calledFunction
    this.binding = binding
  }
}
