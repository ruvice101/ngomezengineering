import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

export class IndexPageTemplate extends React.Component {
    render() {
        let {
            image,
            title,
            heading,
            subheading,
            mainpitch,
            description,
            intro,
            main,
        } = this.props

        return (
            <div className="container">
                
                <div className="row">
                    <h1 className="text-text-center">
                        {title}
                    </h1>
                </div>
                
            </div>
        )
    }
}


IndexPageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    heading: PropTypes.string,
    subheading: PropTypes.string,
    mainpitch: PropTypes.object,
    description: PropTypes.string,
    intro: PropTypes.shape({
      blurbs: PropTypes.array,
    }),
  }