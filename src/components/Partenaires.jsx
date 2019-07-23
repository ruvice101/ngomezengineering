import React, { Component } from 'react';
import './partenaires.sass'

class Partenaires extends Component {
  renderPartners = (partner, i) => partner.image ?
    <div className="column is-one-fifth" style={{ height: 128, background: '#fff' }} key={i}>
      <img
        title={partner.title}
        style={styles.img}
        alt={partner.title}
        src={partner.image}
        className="image-bw-to-color wow rubberBand"
      />
    </div>
    : null

  render() {
    return (
      <div className="is-fullwidth ngomez-section">
        <div className="columns">
          <h2 className="column heading has-text-centered">Partenaires</h2>
        </div>
        <div className="columns is-multiline pad2y">
          {
            this.props.partners.map(this.renderPartners)
          }
        </div>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

const styles = {
  img: {
    display: "block",
    maxWidth: 128,
    height: "auto"
  }
}

Partenaires.propTypes = {

};

export default Partenaires;