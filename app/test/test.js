import chai from 'chai';
let expect = chai.expect;

import React from 'react';
import {jsdom} from 'jsdom';
import {MailApp} from '../browser/MailApp';

debugger;

describe('Flux Tests', function()  {

    beforeEach(() => {
        global.document = jsdom('<html><body></body></html>');
        global.window = document.defaultView;
    });

    it('runs MailApp', function() {
        let app = new MailApp();
        app.start(document.body);

        expect("stuff").to.equal('stuff');
    });

});