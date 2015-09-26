class CalendarDirectiveController {
  constructor($log, moment) {
    'ngInject';
    this.$log = $log;
    this.moment = moment;
    this.days = this.moment.weekdays()
    this.activate();
  }

/**
 * Activate mehtod that kicks in when the directive loads
 * It Initializes th pagination, the today date, and the selected pages;
 * It also generates the page
 */
  activate() {
    this.page = 0;
    this.today = this.moment().startOf('day');
    this.selectedDates = [];
    this.generatePage(this.today);
  }
  /**
   * Method that is executed when clickign on a date. Right now it only
   * adds the date to the selectedDates array
   */
  pick(date) {
    this.selectedDates.push(date.format("YYYY-MM-DD"));
    this.unavailableDates.push(date.format("YYYY-MM-DD"));
  }

/**
 * @param  {moment}  date Date that we want to check if is available or not
 * @return {Boolean}      Return if the date is unavailable
 */
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
        unavailableDates: '='
      },
      templateUrl: 'app/components/calendar/calendar.html',
      scope: {}
    };
    return directive;
  }

}
