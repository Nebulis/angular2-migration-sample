(function() {
  angular.module('Brewery').controller('BreweryCtrl', function($scope, BreweryService){
    $scope.beers = BreweryService.getBeers();
    $scope.selectBeer = function (beer) {
      BreweryService.getOnePinte(beer);
    };
  });
})();
