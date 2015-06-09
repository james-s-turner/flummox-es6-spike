import {Store} from 'flummox';

export class MailStore extends Store{

    constructor(flux){
        super();
        const messageActionIds = flux.getActionIds('mail-actions');
        this.register(messageActionIds.createMailEntry, this.handleNewMessage);

        this.state = {
            addresses: []
        };
    }

    handleNewMessage(addressEntry){
        this.setState({
            addresses: this.state.addresses.concat([addressEntry]),
        });
    }

}