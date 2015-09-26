Relay Rides Test
================

# Getting Started

Implement an HTML5 1-dimensional (i.e., 1-week) calendar that displays a car’s availability. At a minimum:

  * The user should be able to page among the weeks
  * Page zero should be this week; the last page should be three months from now
  * The calendar should indicate dates that are not available (data below)
  * Unavailable dates should be visually distinct from dates in the past

  ```js
  var unavailableDates = [
    "2015-06-01",
    "2015-06-08",
    "2015-06-15",
    "2015-06-16",
    "2015-06-17",
    "2015-07-03",
    "2015-07-04",
    "2015-07-05",
    "2015-07-12",
    "2015-07-29"
  ];
  ```

# Prerequisites
  * nodejs & npm
  * bower
  * gulp

# Develop
To run the app in a development environment with browsersync just run

  ```js
  gulp serve
  ```

If you want to run with a minified version of scripts and css just run

  ```js
  gulp serve
  ```

# Building

To build this app just run

  ```js
  gulp build
  ```
