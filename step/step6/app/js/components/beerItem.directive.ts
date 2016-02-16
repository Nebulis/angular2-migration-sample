
import {Component, Input} from 'angular2/core';
import {BreweryService} from './brewery.service';
import NotePipe from './note.pipe';

@Component({
  selector: 'beer-item',
  templateUrl: './js/components/beer-item.html',
  pipes : [NotePipe]
})
export class BeerItemController {
  @Input() beer;
  constructor(public breweryService:BreweryService) {
  }
  selectBeer () {
    this.breweryService.getOnePinte(this.beer);
  };
}
