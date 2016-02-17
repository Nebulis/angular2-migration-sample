/// <reference path="../../typings/angularjs/angular-mocks.d.ts" />

import { BreweryService } from './components/brewery.service';
import { noteFilter } from './components/note.filter';
import { beerItem } from './components/beerItem.directive';

import {UpgradeAdapter} from 'angular2/upgrade';
const upgradeAdapter = new UpgradeAdapter();

angular.module('Brewery', [ ])
  .service('BreweryService', BreweryService)
  .filter('NoteFilter', noteFilter)
  .component('beerItem', beerItem)
  .component('app', {
      templateUrl: 'js/app.html',
      controllerAs: 'app',
      controller: function (BreweryService) {
        this.beers = BreweryService.getBeers();
      }
  });


upgradeAdapter.bootstrap(document.documentElement, ['Brewery']);
