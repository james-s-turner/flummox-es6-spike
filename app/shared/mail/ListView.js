import React from 'react';

export class ListView extends React.Component {

    render() {
        var lines = this.props.addresses.map( address => <div key={address.emailAddress}>{address.emailAddress}</div> );
        return (
            <div className="ListView">
                <h2>Email Addresses</h2>
                <div className="ListView">{lines}</div><br/>
            </div>
        );
    }
};
