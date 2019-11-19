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

    </div>


  </>
)

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const { title, image, heading } = frontmatter
  // console.log({ metier, metier2 })
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
