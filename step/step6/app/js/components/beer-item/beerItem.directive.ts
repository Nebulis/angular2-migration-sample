class BeerItemController {
  constructor(public BreweryService) {
  }
  selectBeer () {
    this.BreweryService.getOnePinte(this.beer);
  };
}

export var beerItem = {
    bindings: {
      beer: '='
    },
    controllerAs: 'bi',
    templateUrl: './js/components/beer-item/beer-item.html',
    controller: BeerItemController
};
