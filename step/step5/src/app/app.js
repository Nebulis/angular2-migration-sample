import { BreweryService } from './components/brewery.service';
import { noteFilter } from './components/note.filter';
import { beerItem } from './components/beerItem.directive';

angular.module('Brewery', [ ])
  .service('BreweryService', BreweryService)
  .filter('NoteFilter', noteFilter)
  .component('beerItem', beerItem)
  .component('app',
    {
      templateUrl: 'app/app.html',
      controllerAs: 'app',
      controller: function (BreweryService) {
        this.beers = BreweryService.getBeers();
      }

  });

angular.bootstrap(document.body, ['Brewery']);
