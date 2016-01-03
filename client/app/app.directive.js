import './app.css';
import template from './app.html';

export const appDirective = () => {
  return {
    template,
    restrict: 'E',
    scope: {},
    replace: true
  };
};
