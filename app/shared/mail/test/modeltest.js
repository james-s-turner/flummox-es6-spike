import chai from 'chai';
let expect = chai.expect;
import {MailFlux} from "../MailFlux";

describe('Test mail flux model', () =>  {

    it('creates email address entry in store', function() {
        let flux = new MailFlux();
        let actions = flux.getActions("mail-actions");
        let store = flux.getStore("mail-store");

        store.on("change", () => {
            expect(store.state.addresses.length).to.equal(1);
            expect(store.state.addresses[0].emailAddress).to.equal("a@acme.com");
        });
        actions.createMailEntry("a@acme.com");
    });
});
