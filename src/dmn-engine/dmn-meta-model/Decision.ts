import { DRGElement } from "./DRGElement"
import { OrganisationalUnit, PerformanceIndicator } from "./types"
import { Expression } from "./Expression"
import { InformationRequirement } from "./InformationRequirement"
import { KnowledgeRequirement } from "./KnowledgeRequirement"
import { AuthorityRequirement } from "./AuthorityRequirement"

export class Decision extends DRGElement {
  public question?: string
  public allowedAnswers?: string[]

  public decisionOwner?: OrganisationalUnit
  public decisionMaker?: OrganisationalUnit
  public impactedPerformanceIndicator?: PerformanceIndicator
  public decisionLogic?: Expression

  public informationRequirement: InformationRequirement[] = []
  public knowledgeRequirement: KnowledgeRequirement[] = []
  public authorityRequirement: AuthorityRequirement[] = []
}
