import React from 'react';

export class ListView extends React.Component {

    render() {
        const rowClass = function(index){
            const even =  !(index % 2);
            return (even ? "ListView-row--even" : "ListView-row--odd");
        };

        var lines = this.props.addresses.map( (address, index) =>
                <div className={rowClass(index)} key={address.emailAddress}>{address.emailAddress}</div>
        );


        return (
            <div className="ListView">
                <h2  className="ListView-title">Email Addresses</h2>
                <div className="ListView-body">{lines}</div><br/>
            </div>
        );
    }
};
