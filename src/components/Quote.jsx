import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./quote.sass"

class Quote extends Component {
    render() {
        return (
            <form 
            method="POST"
            role="request-quote"
            >
                <h2 className="has-text-white has-text-centered">Recevez un devis gratuitement</h2>
                <div className="form-group">
                    <input type="text" placeholder="Noms" className="form-input"/>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Email" className="form-input"/>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Téléphone" className="form-input"/>
                </div>
                <div className="form-group">
                    <textarea
                     className="form-input msg-box"
                    ></textarea>
                </div>

                <button className="button is-primary is-fullwidth">Envoyer</button>
            </form>
        );
    }
}

Quote.propTypes = {

};

export default Quote;