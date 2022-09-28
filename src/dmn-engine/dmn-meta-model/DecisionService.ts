import { Invocable } from "./types"
import { Decision } from "./Decision"
import { InputData } from "./InputData"

/**
 * https://www.omg.org/spec/DMN/1.3/PDF#6.3.10
 */
export class DecisionService extends Invocable {
  // The name of the variable and the name of the DecisionService SHALL be the same. This
  // name may be used to invoke a DecisionService from the decision logic of another decision or business
  // knowledge model.

  // The encapsulatedDecisions, inputDecisions and inputData attributes are optional. At least one of the
  // encapsulatedDecisions and inputDecisions attributes SHALL be specified.

  outputDecisions: Decision[] = []
  encapsulatedDecisions: Decision[] = []
  inputDecisions: Decision[] = []
  inputData: InputData[] = []

  call(params: { inputDecisions: Decision[]; inputData: InputData[] }) {}
}
