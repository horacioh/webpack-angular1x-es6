

class HomeController {
  // bind to this and not $scope
  // because of controllerAs.
  constructor() {
    this.title = 'Welcome to the Home Page!!';
  }
}
// could also just export the class up top as well
export {HomeController};
