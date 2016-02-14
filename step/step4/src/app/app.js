angular.module('Brewery', ['Brewery.service', 'Brewery.filter', 'Brewery.directive'])
  .component('app', {
      templateUrl: 'app/app.html',
      controllerAs: 'app',
      controller: function (BreweryService) {
        this.beers = BreweryService.getBeers();
      }
    }

  );
