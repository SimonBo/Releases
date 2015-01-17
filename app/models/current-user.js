import DS from 'ember-data';

export default DS.Model.extend({
  userToken: localStorage['userToken'],

  isSignedIn: function()  {
    return this.get('userToken') !== void 0;
  }.property('userToken')
});
