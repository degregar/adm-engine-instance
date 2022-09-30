import { NamedElement } from "./NamedElement"
import { UnaryTests } from "./UnaryTests"
import { FunctionItem } from "./FunctionItem"

export class ItemDefinition extends NamedElement {
  /**
   * This attribute identifies by namespace-prefixed name the base type
   * of this ItemDefinition
   */
  typeRef: string

  /**
   * This attribute identifies the type language used to specify the base
   * type of this ItemDefinition. This value overrides the type
   * language specified in the Definitions element. The language
   * SHALL be specified in a URI format.
   */
  typeLanguage?: string = "FEEL" // TODO: Enum

  /**
   * This attribute lists the possible values or ranges of values in the
   * base type that are allowed in this ItemDefinition.
   */
  allowedValues?: UnaryTests

  /**
   * This attribute defines zero or more nested ItemDefinitions that
   * compose this ItemDefinition.
   */
  itemComponent?: ItemDefinition[]

  /**
   * Setting this flag to true indicates that the actual values defined by
   * this ItemDefinition are collections of allowed values. The default
   * is false.
   */
  isCollection: boolean = false

  /**
   * This attribute describes an optional FunctionItem that compose
   * this ItemDefinition.
   */
  functionItem?: FunctionItem

  constructor(name: string, typeRef: string) {
    super(name)
    this.typeRef = typeRef
  }
}
