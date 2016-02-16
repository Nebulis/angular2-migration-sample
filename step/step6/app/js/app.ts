/// <reference path="../../typings/angularjs/angular-mocks.d.ts" />

import { BreweryService } from './components/brewery.service';
import { BeerItemController } from './components/beerItem.directive';
import {HTTP_PROVIDERS} from 'angular2/http';
import upgradeAdapter from './upgrader';


upgradeAdapter.addProvider(BreweryService);


angular.module('Brewery', [ ])
  .service('BreweryService', BreweryService)
  .directive('beerItem',
    <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(BeerItemController))
  .component('app', {
      templateUrl: 'js/app.html',
      controllerAs: 'app',
      controller: function (BreweryService) {
        this.beers = BreweryService.getBeers();
      }
  });


upgradeAdapter.bootstrap(document.documentElement, ['Brewery']);
