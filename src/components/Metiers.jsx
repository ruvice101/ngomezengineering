import React, { Component } from 'react';
import { Link } from 'gatsby'
import "./metiers.sass"

class Metiers extends Component {
    renderMetiers = (metier, i) => (
        <div className="column is-one-third metier">
            <div className="content" style={{
                backgroundImage: `url(${metier.image || "https://via.placeholder.com/320x360"})`
            }}>
                <h4>
                    {metier.title}
                </h4>
            </div>
        </div>
    )

    render() {
        let { metiers, listAll, hideTitle } = this.props
        return (
            <div className="container ngomez-section" id="metiers">
                {
                    !hideTitle &&
                    <div className="columns">
                        <h1 className="column heading has-text-centered">Métiers</h1>
                    </div>
                }
                <div className={`columns metier-container margin-top-0 ${listAll ? "is-multiline" : ""}`}>
                    {
                        metiers.length &&
                        (listAll ? metiers : metiers.slice(0,3)).map(this.renderMetiers)
                    }
                </div>
                {
                    !listAll &&
                    <div className="columns metier-container margin-top-0">
                        {
                            this.props.metiers.length &&
                            this.props.metiers.slice(3, 5).map(this.renderMetiers)
                        }
                        <div className="column is-one-third metier">
                            <div className="content bo-voir-tous">
                                <Link to="/metiers">
                                    <h4>Voir Tous</h4>
                                </Link>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Metiers;