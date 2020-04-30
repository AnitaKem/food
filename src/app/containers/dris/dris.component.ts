import { Component, OnInit } from '@angular/core';
import { elements, FoodElement } from '../../models/DRIs';

const childrenIntervals = [
  '1-3 y',
  '4-8 y'
];
const adultIntervals = [
  '9–13 y',
  '14–18 y',
  '19–30 y',
  '31–50 y',
  '51–70 y',
  '> 70 y'
];

@Component({
  selector: 'app-dris',
  templateUrl: './dris.component.html',
  styleUrls: ['./dris.component.scss']
})
export class DrisComponent implements OnInit {

  elementsTitles: Array<string> = Object.keys(elements);
  elements: { [key: string]: FoodElement } = elements;
  elementsCount = this.elementsTitles.length;

  childrenIntervals: Array<string> = childrenIntervals;
  adultIntervals: Array<string> = adultIntervals;

  constructor() { }

  ngOnInit() {
  }

}
