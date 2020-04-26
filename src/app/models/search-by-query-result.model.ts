import { Food } from './food.model';
import { FoodSearchCriteria } from './food-search-criteria.model';

export interface SearchByQueryResult {
  currentPage: number;
  foodSearchCriteria: FoodSearchCriteria;
  foods: Array<Food>;
  totalHits: number;
  totalPages: number;
}
