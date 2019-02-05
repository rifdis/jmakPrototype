import { Distractor } from '../entities/Distractor';

export class Item {
    ItemId: number;
    AssessmentId: number;
    ItemName: string;
    Distractors: Distractor[];
}

