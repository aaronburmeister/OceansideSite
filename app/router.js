import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('home');
  this.route('new-client');
  this.route('established-client');
  this.route('veterinary-services');
  this.route('emergency');
  this.route('euthanasia');
  this.route('online-resources');
  this.route('our-staff');
});
