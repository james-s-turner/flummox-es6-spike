import  React from 'react';
import {MailFlux} from '../shared/mail/MailFlux';
import {MailView} from '../shared/mail/MailView';
import FluxComponent from 'flummox/component';

export class MailAppRenderer {

    doRender() {

        let flux = new MailFlux();
        let actions = flux.getActions("mail-actions");
        actions.createMailEntry("added.by.server@acme.com");

        var result = React.renderToString(
            <FluxComponent flux={flux} connectToStores={'mail-store'}>
                <MailView/>
            </FluxComponent>
        );

        return  result;
    }

}
