import  React from 'react';
import {MailFlux} from '../shared/mail/MailFlux.js';
import {MailView} from '../shared/mail/MailView';
import FluxComponent from 'flummox/component';
import './style.css!';

export class MyApp {

    start(rootElement){
        let flux = new MailFlux();
        React.render(
            <FluxComponent flux={flux} connectToStores={'messages'}>
                <MailView/>
            </FluxComponent>,
            rootElement
        );
    }


}