import { ID } from "./types"

export abstract class DMNElement {
  public id?: ID
  public description?: string
  public label?: string
}
