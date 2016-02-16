class BeerItemController {
  constructor(BreweryService) {
    Object.assign(this, {BreweryService});
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
  templateUrl: './app/components/beer-item.html',
  controller: BeerItemController
};
