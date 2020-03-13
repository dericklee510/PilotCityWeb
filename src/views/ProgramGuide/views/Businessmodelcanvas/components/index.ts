export {default as BusinessModelCanvas} from "./BusinessModelCanvas.vue"
export interface TeamInfo {
    teamName: string;
    projectId: string;
    problemRatingT?: number;
    solutionRatingT?: number;
    innovationRatingT?: number;
    customerRatingT?: number;
    problemRatingE?: number;
    solutionRatingE?: number;
    innovationRatingE?: number;
    customerRatingE?: number;
    problem?: string;
    solution?: string;
    innovation?: string;
    customer?: string;
    averageRating:number
  }