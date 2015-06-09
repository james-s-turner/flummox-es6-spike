import React from 'react';
import {ListView} from './ListView';
import FluxComponent from 'flummox/component';

export class MailView extends React.Component {

    constructor(){
        super();
        this._onSubmit = this._onSubmit.bind(this);
    }

    render() {

        return (

            <div className="MailView">
                <form onSubmit={this._onSubmit}>
                    <label htmlFor="email1" title="email">Email Address</label>
                    <input name="email1" type='email' autoFocus="autofocus" title="Enter an Email address" ref="mailAddress"/>
                    <input type="submit"/>
                </form>

                <FluxComponent connectToStores={'mail-store'} >
                    <ListView/>
                </FluxComponent>
             </div>
        );
    }

    _onSubmit(event){
        let emailAddress = this.refs.mailAddress.getDOMNode().value;
        if(emailAddress){
            var actions = this.props.flux.getActions("messages");
            actions.createMessage(emailAddress);
        }
        event.preventDefault();
    }
};
