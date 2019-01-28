import React, {Component} from 'react';

export class MainPresentation extends Component {
    render() {
        return (
            <div>
                <h3>selection {this.props.selection}</h3>
                <ul>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Twiiter</li>
                </ul>
            </div>
        );
    }
}