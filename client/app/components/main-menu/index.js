import angular from 'angular';

import {mainMenuDirective} from './main-menu.directive';

export const mainMenu = angular.module('main-menu', []).directive('mainMenu', mainMenuDirective);
