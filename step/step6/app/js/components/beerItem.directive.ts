export var beerItem = {
    bindings: {
      beer: '='
    },
    controllerAs: 'bi',
    templateUrl: './js/components/beer-item.html',
    controller: BeerItemController
};

class BeerItemController {
  constructor(public BreweryService) {
  }
  selectBeer () {
    this.BreweryService.getOnePinte(this.beer);
  };
}
