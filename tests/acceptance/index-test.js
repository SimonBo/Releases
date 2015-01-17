import Ember from 'ember';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: Index', {
  setup: function() {
    application = startApp();
  },
  teardown: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /index', function() {
  visit('/index');

  andThen(function() {
    equal(
      find('h2').text(),
      'Welcome to Emberflow',
      'Application header is rendered'
      );

    equal(
      find('ul:not(.nav) > li').length,
      2,
      'There are two questions in the list'
      );
  });

test('qs links on index page lead to qestions', function() {
 visit('/');
 click('ul:not(.nav) > li > a:first');

 andThen(function() {
  equal(
    find('h2').length,
    1,
    'Question header is rendered'
    );

  equal(
    find('h2').length,
    2,
    'Question and author are rendered'
    );
 });
});
});
