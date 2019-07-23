import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import { Quote, Metiers, Partenaires } from '../components';

export const IndexPageTemplate = ({ title, image, partners, metiers }) => (
  <>
    <div className="is-fullwidth">
      <header className="columns header" style={{
        backgroundImage: `url(${
          (image && !!image.childImageSharp) ? image.childImageSharp.fluid.src : image
          })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}>
        <div className="column">
          <h1 className=" is-text has-text-centered heading has-text-white">
            {title}
            <span> AU <span className="has-text-green">CAM</span><span className="has-text-red">ER</span><span className="has-text-yellow">OUN</span> </span>
          </h1>
        </div>
        <div className="column">
          <Quote />
        </div>
      </header>

      <Metiers metiers={metiers} />
      
      <Partenaires partners={partners} />

      <div className="columns">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.3456634704316!2d11.522916579103997!3d3.8770738844034733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf7d5ad59fc3%3A0xda42fdef787e5587!2sRue+Joseph+Essono+Balla%2C+Yaounde!5e0!3m2!1sen!2scm!4v1563923750266!5m2!1sen!2scm"
          className="column is-12" height="450" frameborder="0"
          allowfullscreen></iframe>
      </div>

    </div>


  </>
)

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        {...frontmatter}
      />
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
        
        
        metiers {
          title
          image {
            childImageSharp {
              fixed {
                src
              }
            }
          }
        }
        
        partners {
          title
          image {
            childImageSharp {
              fixed {
                src
              }
            }
          }
        }


      }
    }
  }
`
