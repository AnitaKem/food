import { FoodNutrient } from './food-nutrient.model';

export interface Food {
  additionalDescriptions: string;
  allHighlightFields: string; // with HTML tags
  dataType: string;
  description: string;
  fdcId: number;
  foodCode: string;
  foodNutrients: Array<FoodNutrient>;
  publishedDate: string; // make it date?
  score: number;
}
