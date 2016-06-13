(function() {
  angular.module('Brewery').controller('BreweryCtrl', BreweryCtrl);

  function BreweryCtrl($scope, BreweryService){
    $scope.beers = BreweryService.getBeers();
    $scope.selectBeer = function (beer) {
      BreweryService.getOnePinte(beer);
    };
  }
})();
