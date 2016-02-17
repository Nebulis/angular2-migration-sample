/// <reference path="../../typings/angularjs/angular-mocks.d.ts" />

import { BreweryService } from './components/brewery.service';
import { BeerItemController } from './components/beerItem.directive';
import {HTTP_PROVIDERS} from 'angular2/http';
import upgradeAdapter from './upgrader';
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser'

upgradeAdapter.addProvider(BreweryService);

@Component({
  selector:'app',
  templateUrl: 'js/app.html',
  directives : [BeerItemController],
})
class AppComponent {
  constructor(public breweryService:BreweryService) {
    this.beers = this.breweryService.getBeers();
  }
}


bootstrap(AppComponent, [BreweryService]);
