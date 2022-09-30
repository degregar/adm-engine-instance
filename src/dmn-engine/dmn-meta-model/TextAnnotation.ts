import { Artifact } from "./Artifact"

export class TextAnnotation extends Artifact {
  public text: string
  public textFormat: string = "text/plain"

  constructor(text: string) {
    super()
    this.text = text
  }
}
