import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import { Quote } from '../components';

import './all.sass'

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const { title, image, heading } = frontmatter
  return (
    <Layout>
      <div className="is-fullwidth">
        <header className="columns header"
          style={{
            backgroundImage: `url(${
              !!image.childImageSharp ? image.childImageSharp.fluid.src : image
              })`,
          }}
        >
          <div className="column">
            <h1 className=" is-text has-text-centered heading has-text-white">
              {title || heading || "INGENIERIE GEOMATIQUES ET GEOMETRE EXPERTS"}
            </h1>
          </div>
          <div className="column">
            <Quote />
          </div>
        </header>
      </div>

    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
