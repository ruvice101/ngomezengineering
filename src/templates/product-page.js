import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import Banner from '../components/Banner';

export const ProductPageTemplate = ({
  image,
  title,
  heading,
  description
}) => (
    <section className="section section--gradient">
      <div className="container">

        <div className="columns">
          <div className="column">
            <Banner image={image} title={title} />
          </div>
        </div>

        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">

              <div className="columns">
                <div className="column is-7">
                  <h3 className="has-text-weight-semibold is-size-2">
                    {heading}
                  </h3>
                  <p>{description}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </section>
  )

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string
}

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Métier</title>
        {/* <link rel="canonical" href="http://ngomezengineering.com/metiers" /> */}
      </Helmet>
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
      />
    </Layout>
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        
      }
    }
  }
`
