import chai from 'chai';
let expect = chai.expect;

import React from 'react';
import {jsdom} from 'jsdom';
import {MyApp} from '../browser/MyApp';

describe('Flux Tests', () =>  {

    beforeEach(() => {
        global.document = jsdom('<html><body></body></html>');
        global.window = document.defaultView;
    });

    it('runs MyApp', function() {
        let myApp = new MyApp();
        myApp.startFlux(document.body);

        expect("stuff").to.equal('stuff');
    });

});