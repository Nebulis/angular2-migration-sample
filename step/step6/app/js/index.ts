/// <reference path="../../typings/angularjs/angular-mocks.d.ts" />

import { BreweryService } from './components/brewery.service';
import { noteFilter } from './components/note.filter';
import { beerItem } from './components/beer-item/beerItem.directive';
import { AppComponent } from './components/app/app';

import {UpgradeAdapter} from 'angular2/upgrade';
const upgradeAdapter = new UpgradeAdapter();

angular.module('Brewery', [ ])
  .service('BreweryService', BreweryService)
  .filter('NoteFilter', noteFilter)
  .component('beerItem', beerItem)
  .component('app', AppComponent);


upgradeAdapter.bootstrap(document.documentElement, ['Brewery']);
