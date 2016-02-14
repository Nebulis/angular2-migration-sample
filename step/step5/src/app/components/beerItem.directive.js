export function beerItem() {
  return {
    restrict: 'E',
    scope: {
      beer: '='
    },
    controllerAs: 'bi',
    bindToController: true,
    templateUrl: './app/components/beer-item.html',
    controller: BeerItemController
  };
};

class BeerItemController {
  constructor(BreweryService) {
    Object.assign(this, {BreweryService});
  }
  selectBeer () {
    this.BreweryService.getOnePinte(this.beer);
  };
}
