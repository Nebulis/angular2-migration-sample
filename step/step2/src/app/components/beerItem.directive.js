angular.module('Brewery.directive', [])
  .component('beerItem',
    {
      bindings: {
        beer: '='
      },
      controllerAs: 'bi',
      templateUrl: 'app/components/beer-item.html',
      controller: function(BreweryService){
        this.selectBeer = function(){
          BreweryService.getOnePinte(this.beer);
        };
      }
    }
  )
