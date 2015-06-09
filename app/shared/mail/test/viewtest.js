import chai from 'chai';
let expect = chai.expect;

import React from 'react';
import {jsdom} from 'jsdom';

import {MailFlux} from '../MailFlux';
import {MailView} from '../MailView';
import FluxComponent from 'flummox/component';



describe('Test View', () =>  {

    beforeEach(() => {
        global.document = jsdom('<html><body></body></html>');
        global.window = document.defaultView;
    });

    it('displays the email address created', function() {

        let flux = new MailFlux();
        var actions = flux.getActions("mail-actions").createMailEntry("a@b.com");

        React.render(
            <FluxComponent flux={flux} connectToStores={'mail-store'}>
                <MailView/>
            </FluxComponent>,
            document.body
        );
        expect(document.body.querySelector('.ListView-row').textContent).to.equal('a@b.com');
    });

});
