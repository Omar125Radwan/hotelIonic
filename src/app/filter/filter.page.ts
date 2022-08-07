/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

  filters = {
    'meal_type': 'lunch',
    'cuisine': 'french',
    'distance': 5,
    'popular': true,
    'priceByOrder': 'highToLow',
    'price': {
      'lowerPrice': '5',
      'higherPrice': '10',
    }
  };

  constructor() { }

  mealTypeChange(ev) {
    const type = ev.detail.value;
    this.filters.meal_type = type;
  }
  cuisineTypeChange(ev) {
    const type = ev.detail.value;
    this.filters.cuisine = type;
  }
  distanceChange(ev) {
    const type = ev.detail.value;
    this.filters.distance = type;
  }
  popularChange(ev) {
    const type = ev.detail.value;
    this.filters.popular = type;
  }
  highLowChange(ev) {
    const type = ev.detail.value;
    this.filters.priceByOrder = type;
  }
  priceChange(ev) {
    const type = ev.detail.value;
    this.filters.price.lowerPrice = type.lower;
    this.filters.price.higherPrice = type.upper;
  }
  ngOnInit() {
  }
  reset() {
    this.filters = {
      'meal_type': 'lunch',
      'cuisine': 'french',
      'distance': 5,
      'popular': true,
      'priceByOrder': 'highToLow',
      'price': {
        'lowerPrice': '5',
        'higherPrice': '10',
      }
    };
  }

  applyFilters() {
    console.log(this.filters);
  }

}
