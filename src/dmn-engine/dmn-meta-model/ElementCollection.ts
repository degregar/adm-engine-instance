import { NamedElement } from "./NamedElement"
import { DRGElement } from "./DRGElement"

export type ElementCollection = NamedElement & {
  drgElement: DRGElement[]
}
