class AppController {
  constructor(public BreweryService) {
    this.beers = BreweryService.getBeers();
  };
}

export var AppComponent = {
  controllerAs: 'app',
  templateUrl: './js/components/app/app.html',
  controller: AppController
};
