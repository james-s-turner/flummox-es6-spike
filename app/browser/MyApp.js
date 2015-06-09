import  React from 'react';
import {MailFlux} from '../shared/mail/MailFlux';
import {MailView} from '../shared/mail/MailView';
import FluxComponent from 'flummox/component';
//import './style.css!';

export class MyApp {

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