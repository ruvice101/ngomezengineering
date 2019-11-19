import React, { Component } from 'react';
import { navigate } from 'gatsby-link'
import "./quote.sass"

function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}
class Quote extends Component {
    constructor(props) {
        super(props)
        this.state = { isValidated: false }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...this.state,
            }),
        })
            .then(() => navigate(form.getAttribute('action')))
            .catch(error => alert(error))
    }


    render() {
        return (
            <form 
                name="request-quote"
                role="request-quote"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
            >
                <h2 className="has-text-white has-text-centered">Recevez un devis gratuitement</h2>
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                    <label>
                        Don’t fill this out:{' '}
                        <input name="bot-field" onChange={this.handleChange} />
                    </label>
                </div>
                <div className="form-group">
                    <input 
                        type={'text'}
                        name={'name'}
                        onChange={this.handleChange}
                        id={'name'}
                        required={true}
                        placeholder="Noms"
                        className="form-input"
                        />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                        id={'email'}
                        required={true}
                        placeholder="Adresse Électronique"
                        className="form-input"
                        />
                </div>
                <div className="form-group">
                    <input
                        type="tel"
                        name="phoneNumber"
                        onChange={this.handleChange}
                        id={'phoneNumber'}
                        required={true}
                        placeholder="Téléphone"
                        className="form-input"/>
                </div>
                <div className="form-group">
                    <textarea
                        name="message"
                        onChange={this.handleChange}
                        id={'message'}
                        required={true}
                        placeholder="Décrivez-nous votre projet"
                        className="form-input msg-box"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="button is-primary is-fullwidth">Envoyer</button>
            </form>
        );
    }
}

Quote.propTypes = {

};

export default Quote;