import { NamedElement } from "./NamedElement"
import { DRGElement } from "./DRGElement"
import { Artifact } from "./Artifact"
import { Import } from "./Import"
import { ItemDefinition } from "./ItemDefinition"
import { ElementCollection } from "./ElementCollection"
import { BusinessContextElement } from "./BusinessContextElement"
import { DMNDI } from "./DMNDI"

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
