export function beerItem() {
  return {
    restrict: 'E',
    scope: {
      beer: '='
    },
    controllerAs: 'bi',
    bindToController: true,
    templateUrl: './js/components/beer-item.html',
    controller: BeerItemController
  };
};

class BeerItemController {
  constructor(public BreweryService) {
  }
  selectBeer () {
    this.BreweryService.getOnePinte(this.beer);
  };
}
