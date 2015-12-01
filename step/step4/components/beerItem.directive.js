angular.module('Brewery.directive', []).directive('beerItem', function (BreweryService) {
  return {
    restrict: 'E',
    scope: {
      beer: '='
    },
    controllerAs: 'bi',
    bindToController: true,
    templateUrl: 'components/beer-item.html',
    controller: function () {
      this.selectBeer = function () {
        BreweryService.getOnePinte(this.beer);
      };
    }
  };
});
