import { Component, OnInit } from '@angular/core';
import { FoodDataService } from 'src/app/services';
import { SearchByQueryResult } from 'src/app/models';

@Component({
  selector: 'app-plain-search',
  templateUrl: './plain-search.component.html',
  styleUrls: ['./plain-search.component.scss']
})
export class PlainSearchComponent implements OnInit {

  searchResult: SearchByQueryResult;

  constructor(public foodDataService: FoodDataService) { }

  ngOnInit() {
  }

  public onSearch(text: string) {
    this.foodDataService.searchByQuery(text).subscribe(result => {
      this.searchResult = result;
    });
  }

}
