import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

import Router from '../router'

export default class HeaderComponent extends Component {
    @tracked expand = document.documentElement.clientWidth < 675 ? false : true;
    @tracked expand_appointments = false;
    @tracked expand_services = false;
    @tracked expand_about = false;
    @tracked page = window.location.href

    setAllFalse() {

        this.expand_services = false;
        this.expand_appointments = false;
        this.expand_about = false;
    }

    @action
    expandMenu() {
        this.expand = !this.expand
    }

    @action
    expandAppointments() {
        this.expand_appointments = !this.expand_appointments
        if (this.expand_services) {
            this.expand_services = !this.expand_services
        }
        if (this.expand_about) {
            this.expand_about = !this.expand_about
        }
    }

    @action
    expandServices() {
        this.expand_services = !this.expand_services
        if (this.expand_appointments) {
            this.expand_appointments = !this.expand_appointments
        }
        if (this.expand_about) {
            this.expand_about = !this.expand_about
        }
    }

    @action
    expandAbout() {
        this.expand_about = !this.expand_about
        if (this.expand_appointments) {
            this.expand_appointments = !this.expand_appointments
        }
        if (this.expand_services) {
            this.expand_services = !this.expand_services
        }
    }
}
