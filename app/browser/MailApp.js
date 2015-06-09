import  React from 'react';
import {MailFlux} from '../shared/mail/MailFlux';
import {MailView} from '../shared/mail/MailView';
import FluxComponent from 'flummox/component';
import './app-style.css!';

export class MailApp {

    constructor(storeState){
        this.storeState = storeState;
    }

    start(rootElement){
        let flux = new MailFlux();
        let mailStore = flux.getStore("mail-store");
        mailStore.setState(this.storeState);

        React.render(
            <FluxComponent flux={flux} connectToStores={'mail-store'}>
                <MailView/>
            </FluxComponent>,
            rootElement
        );


    }


}