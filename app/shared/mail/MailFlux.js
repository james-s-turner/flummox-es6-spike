import {Flux} from 'flummox';
import {MailActions} from './MailActions';
import {MailStore} from './MailStore';

export class MailFlux extends Flux {

    constructor() {
        super();
        this.createActions('mail-actions', MailActions);
        this.createStore('mail-store', MailStore, this);
    }
}