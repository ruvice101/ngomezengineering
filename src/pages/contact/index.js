import React from 'react'
import { navigate } from 'gatsby-link'
import { Helmet } from 'react-helmet'
import Layout from '../../components/Layout'
// import { Hero } from '../../components';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
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
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Contacter Nous</title>
          {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
        <section>
          <div className="container">
            <div className="content">
              
              {/* <Hero title="Contact" /> */}

              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'name'}>
                    Votre Nom
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                    Adresse Électronique
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'message'}>
                    Message
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <button className="button is-link" type="submit">
                    Envoyer
                  </button>
                </div>
              </form>
            </div>

            <div className="columns">
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.3456634704316!2d11.522916579103997!3d3.8770738844034733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf7d5ad59fc3%3A0xda42fdef787e5587!2sRue+Joseph+Essono+Balla%2C+Yaounde!5e0!3m2!1sen!2scm!4v1563923750266!5m2!1sen!2scm"
              className="column is-12" height="450" frameborder="0"
              allowfullscreen></iframe>
            </div>


          </div>
        </section>
      </Layout>
    )
  }
}
