import  React from 'react';
import {MailFlux} from '../shared/mail/MailFlux';
import {MailView} from '../shared/mail/MailView';
import FluxComponent from 'flummox/component';
//import './app-style.css!';

export class MailApp {

    start(rootElement){
        let flux = new MailFlux();
        React.render(
            <FluxComponent flux={flux} connectToStores={'mail-store'}>
                <MailView/>
            </FluxComponent>,
            rootElement
        );


    }


}