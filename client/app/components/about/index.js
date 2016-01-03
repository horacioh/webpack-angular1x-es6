import angular from 'angular';

import {aboutDirective} from './about.directive';


import {mainMenuDirective} from '../main-menu';

export const about = angular.module('about', [])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('about', {
      url: '/about',
      template: '<about></about>'
    });
  })
  .directive('about', aboutDirective);
