import angular from 'angular';
import uiRouter from 'angular-ui-router';

import {appDirective} from './app.directive';

import {home} from './components/home';
import {about} from './components/about';

import {mainMenu} from './components/main-menu';

export const app = angular.module('app', [
    uiRouter,

    home.name,
    about.name,

    mainMenu.name
  ])
  .directive('app', appDirective);
