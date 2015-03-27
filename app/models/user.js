import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  password: DS.attr('string'),
  birthdate: DS.attr('date'),
  tShirtSize: DS.attr('string'),
  address1: DS.attr('string'),
  address2: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  province: DS.attr('string'),
  zip: DS.attr('string'),
  phone: DS.attr('string')
});
