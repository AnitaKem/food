import { Measure } from '../measure.model';

export interface CountPerAge {
  interval: { [key: string]: number };
  year: { [key: number]: number };
}

export interface FoodElement {
  name: string;
  measure: Measure;
  lifestyleGroup: {
    children: CountPerAge,
    males: CountPerAge,
    females: CountPerAge,
  };
}
