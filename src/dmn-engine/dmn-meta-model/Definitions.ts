import { NamedElement } from "./NamedElement"
import { BusinessContextElement, DMNDI, ElementCollection, ItemDefinition } from "./types"
import { DRGElement } from "./DRGElement"
import { Artifact } from "./artifact"
import { Import } from "./Import"

export type Definitions = NamedElement & {
  namespace: string
  expressionLanguage?: string
  typeLanguage?: string
  exporter?: string
  exporterVersion?: string
  itemDefinition: ItemDefinition[]
  drgElement: DRGElement[]
  businessContextElement: BusinessContextElement[]
  elementCollection: ElementCollection[]
  artifact: Artifact[]
  import: Import[]
  dmnDI?: DMNDI
}
