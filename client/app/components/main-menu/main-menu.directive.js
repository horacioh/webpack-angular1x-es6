import './main-menu.css';
import template from './main-menu.html';

export const mainMenuDirective = () => {
	return {
		template,
		restrict: 'E',
		scope: {},
		replace: true
	};
};
