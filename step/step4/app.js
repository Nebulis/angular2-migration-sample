angular.module('Brewery', ['Brewery.service', 'Brewery.filter', 'Brewery.directive'])
  .directive('app', function (BreweryService) {
    return {
      templateUrl: 'app.html',
      controllerAs: 'app',
      bindToController: true,
      controller: function () {
        this.beers = BreweryService.getBeers();
      }
    }

  });
