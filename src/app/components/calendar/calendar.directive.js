class CalendarDirectiveController {
  constructor($log, moment) {
    'ngInject';
    this.$log = $log;
    this.moment = moment;
    this.days = this.moment.weekdays()
    this.activate();
  }

  activate() {
    this.page = 0;
    this.today = this.moment().startOf('day');
    this.generatePage(this.today);
  }

  pick(date) {
    this.$log.log(date);
    if (angular.isFunction(this.onpick)) {
      this.onpick();
    }
  }

  isUnavailable(date) {
    return this.unavailableDates.filter( unavailableDate => {
      return date.format("YYYY-MM-DD") === unavailableDate
    }).length > 0;
  }

  /**
   * Generate the view week view based on the start date
   * @param  {moment} date A moment date
   * @return {[moment]}      [description]
   */
  generatePage(date) {
    // Get the first date of the current week
    let start = this.moment(date).startOf('week');
    let week = [];
    for (let i = 0; i < 7; ++i) {
      week.push(this.moment(start).day(i));
    }
    this.week = week;
    this.month = this.week[0].format('MMMM');
  }

  /**
   * Get the next page
   */
  prev() {
    this.page --;
    let  date = this.moment(this.today).days(this.page * 7);
    this.generatePage(date);
  }

  /**
   * Get the previous page;
   */
  next() {
    this.page ++;
    let  date = this.moment(this.today).days(this.page * 7);
    this.generatePage(date);
  }
}

export class CalendarDirective {
  constructor() {
    let directive = {
      restrict: 'E',
      controller: CalendarDirectiveController,
      controllerAs: 'vm',
      bindToController: {
        unavailableDates: '=',
        onpick: '&'
      },
      templateUrl: 'app/components/calendar/calendar.html',
      scope: {}
    };
    return directive;
  }

}
