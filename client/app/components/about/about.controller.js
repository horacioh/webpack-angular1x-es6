class AboutController {
  // bind to this and not $scope
  // because of controllerAs.
  constructor() {
    this.title = 'Welcome to the About Page!!';
  }
}
// could also just export the class up top as well
export {AboutController};
