/* global moment:false */

import { config } from './index.config';
import { MainController } from './main/main.controller';
import { CalendarDirective } from './components/calendar/calendar.directive';

angular.module('relayridestest', [])
  .constant('moment', moment)
  .config(config)
  .controller('MainController', MainController)
  .directive('calendar', () => { return new CalendarDirective() });
