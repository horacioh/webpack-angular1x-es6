import angular from 'angular';
import {app} from './app';

angular.element(document).ready(function() {
	angular.bootstrap(document.body, [app.name]);
});
