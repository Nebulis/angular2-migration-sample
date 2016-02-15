/// <reference path="../../typings/angularjs/angular-mocks.d.ts" />

import { BreweryService } from './components/brewery.service';
import { noteFilter } from './components/note.filter';
import { beerItem } from './components/beerItem.directive';

import {UpgradeAdapter} from 'angular2/upgrade';
const upgradeAdapter = new UpgradeAdapter();

angular.module('Brewery', [ ])
  .service('BreweryService', BreweryService)
  .filter('NoteFilter', noteFilter)
  .directive('beerItem', beerItem)
  .directive('app', function () {
    return {
      templateUrl: 'js/app.html',
      controllerAs: 'app',
      bindToController: true,
      controller: function (BreweryService) {
        this.beers = BreweryService.getBeers();
      }
    }

  });


upgradeAdapter.bootstrap(document.documentElement, ['Brewery']);
