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
        return (
            <div className="container ngomez-section" id="metiers">
                <div className="columns">
                    <h1 className="column heading has-text-centered">Métiers</h1>
                </div>
                <div className="columns metier-container margin-top-0">
                    {
                        [{
                            title: "SIG-WEBMAPPING"
                        },
                        {
                            title: "DRONE MAPPING"
                        },
                        {
                            title: "FONCIER"
                        }
                        ].map(this.renderMetiers)
                    }
                </div>
                <div className="columns metier-container margin-top-0">
                    {
                        [
                            {
                                title: "ARPENTAGE/TOPOGRAPHIE"
                            },
                            {
                                title: "MODELISATION 3D"
                            }
                        ].map(this.renderMetiers)
                    }
                    <div className="column is-one-third metier">
                        <div className="content bo-voir-tous">
                            <Link to="/metiers">
                                <h4>Voir Tous</h4>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Metiers;